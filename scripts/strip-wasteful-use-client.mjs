#!/usr/bin/env node
/**
 * Remove `'use client'` from .tsx files that use no React hooks and no
 * event-handler props. Next.js App Router best practice: push the client
 * boundary as far down the tree as possible. A wrapper that only forwards
 * props to a client child doesn't need to opt into the client bundle itself.
 *
 * Hooks detected: useState, useEffect, useCallback, useMemo, useRef,
 *   useContext, useReducer, useLayoutEffect, useSyncExternalStore,
 *   useTransition, useId, useDeferredValue, useRouter, usePathname,
 *   useSearchParams, useParams, useOptimistic, useFormStatus,
 *   useActionState, useEffectEvent.
 *
 * Event handlers: onClick, onChange, onSubmit, onFocus, onBlur, onKeyDown,
 *   onKeyUp, onMouseOver, onMouseOut, onInput.
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const HOOK_RE =
  /\buse(State|Effect|Callback|Memo|Ref|Context|Reducer|LayoutEffect|SyncExternalStore|Transition|Id|DeferredValue|Router|Pathname|SearchParams|Params|Optimistic|FormStatus|ActionState|EffectEvent)\s*[(<]/;
const HANDLER_RE =
  /on(Click|Change|Submit|Focus|Blur|KeyDown|KeyUp|MouseOver|MouseOut|Input)=\{/;
const USE_CLIENT_RE = /^(['"])use client\1\s*;?\s*\n/;

let stripped = 0;
let kept = 0;
const stripped_paths = [];

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith(".tsx")) processFile(full);
  }
}

function processFile(file) {
  const src = fs.readFileSync(file, "utf8");
  if (!USE_CLIENT_RE.test(src)) return;
  // Preserve shadcn convention: primitives under components/ui/ wrap client
  // libraries (Base UI / Radix) and must accept event-handler props from
  // callers, so they stay client components by design.
  if (/[\\/]components[\\/]ui[\\/]/.test(file)) {
    kept++;
    return;
  }
  const body = src.replace(USE_CLIENT_RE, "");
  if (HOOK_RE.test(body) || HANDLER_RE.test(body)) {
    kept++;
    return;
  }
  const next = body.replace(/^\n+/, "");
  fs.writeFileSync(file, next);
  stripped++;
  stripped_paths.push(path.relative(ROOT, file));
}

const target = process.argv[2] ?? "components";
walk(target);
console.log(`Stripped 'use client' from ${stripped} files.`);
console.log(`Kept 'use client' on ${kept} files (they use hooks or handlers).`);
if (stripped_paths.length && stripped_paths.length <= 50) {
  console.log("\nFiles modified:");
  for (const p of stripped_paths) console.log("  " + p);
}
