<?php
/**
 * Neo Think Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Neo Think
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_NEO_THINK_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'neo-think-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_NEO_THINK_VERSION, 'all' );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );


/**
 * Podcast Manager for WordPress
 * Creates a custom post type for podcasts and allows importing from RSS feeds
 */

// Register the custom post type
function register_podcast_post_type() {
    $labels = array(
        'name'                  => 'Podcasts',
        'singular_name'         => 'Podcast',
        'menu_name'             => 'Podcasts',
        'name_admin_bar'        => 'Podcast',
        'add_new'               => 'Add New',
        'add_new_item'          => 'Add New Podcast',
        'new_item'             => 'New Podcast',
        'edit_item'             => 'Edit Podcast',
        'view_item'             => 'View Podcast',
        'all_items'             => 'All Podcasts',
        'search_items'          => 'Search Podcasts',
        'parent_item_colon'     => 'Parent Podcasts:',
        'not_found'            => 'No podcasts found.',
        'not_found_in_trash'    => 'No podcasts found in Trash.',
        'featured_image'        => 'Podcast Cover Image',
        'set_featured_image'    => 'Set podcast image',
        'remove_featured_image' => 'Remove podcast image',
        'use_featured_image'    => 'Use as podcast image',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'podcast' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
        'show_in_rest'       => true,
        'menu_icon'          => 'dashicons-microphone',
    );

    register_post_type( 'ss_podcast', $args );
}
add_action( 'init', 'register_podcast_post_type' );

// Register the 'podcast_guest' taxonomy for the 'ss_podcast' post type
function register_guests_taxonomy() {
    $labels = array(
        'name'              => 'Guests',
        'singular_name'     => 'Guest',
        'search_items'      => 'Search Guests',
        'all_items'         => 'All Guests',
        'edit_item'         => 'Edit Guest',
        'update_item'       => 'Update Guest',
        'add_new_item'      => 'Add New Guest',
        'new_item_name'     => 'New Guest Name',
        'menu_name'         => 'Guests',
    );

    $args = array(
        'hierarchical'      => false,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'rewrite'           => array( 'slug' => 'guest' ),
    );

    register_taxonomy( 'podcast_guest', 'ss_podcast', $args );
}
add_action( 'init', 'register_guests_taxonomy' );

// Add custom fields to the "Add Guest" form
add_action( 'podcast_guest_add_form_fields', function() {
    ?>
    <div class="form-field">
        <label for="guest_position">Position</label>
        <input name="guest_position" type="text" id="guest_position" />
    </div>
    <div class="form-field">
        <label for="guest_image">Image URL</label>
        <input name="guest_image" type="text" id="guest_image" />
    </div>
    <div class="form-field">
        <label for="guest_bio">Bio</label>
        <textarea name="guest_bio" id="guest_bio" rows="5" cols="40"></textarea>
    </div>
    <div class="form-field">
        <label for="guest_twitter">Twitter URL</label>
        <input name="guest_twitter" type="url" id="guest_twitter" />
    </div>
    <div class="form-field">
        <label for="guest_facebook">Facebook URL</label>
        <input name="guest_facebook" type="url" id="guest_facebook" />
    </div>
    <div class="form-field">
        <label for="guest_instagram">Instagram URL</label>
        <input name="guest_instagram" type="url" id="guest_instagram" />
    </div>
    <?php
});

// Add custom fields to the "Edit Guest" form
add_action( 'podcast_guest_edit_form_fields', function( $term ) {
    $meta = function( $key ) use ( $term ) {
        return esc_attr( get_term_meta( $term->term_id, $key, true ) );
    };
    ?>
    <tr class="form-field">
        <th><label for="guest_position">Position</label></th>
        <td><input name="guest_position" id="guest_position" type="text" value="<?= $meta('guest_position') ?>"></td>
    </tr>
    <tr class="form-field">
        <th><label for="guest_image">Image URL</label></th>
        <td><input name="guest_image" id="guest_image" type="text" value="<?= $meta('guest_image') ?>"></td>
    </tr>
    <tr class="form-field">
        <th><label for="guest_bio">Bio</label></th>
        <td><textarea name="guest_bio" id="guest_bio" rows="5" cols="50"><?= esc_textarea( get_term_meta( $term->term_id, 'guest_bio', true ) ) ?></textarea></td>
    </tr>
    <tr class="form-field">
        <th><label for="guest_twitter">Twitter URL</label></th>
        <td><input name="guest_twitter" id="guest_twitter" type="url" value="<?= $meta('guest_twitter') ?>"></td>
    </tr>
    <tr class="form-field">
        <th><label for="guest_facebook">Facebook URL</label></th>
        <td><input name="guest_facebook" id="guest_facebook" type="url" value="<?= $meta('guest_facebook') ?>"></td>
    </tr>
    <tr class="form-field">
        <th><label for="guest_instagram">Instagram URL</label></th>
        <td><input name="guest_instagram" id="guest_instagram" type="url" value="<?= $meta('guest_instagram') ?>"></td>
    </tr>
    <?php
});

// Save custom field data when guest is created or edited
add_action( 'created_podcast_guest', 'save_guest_custom_fields' );
add_action( 'edited_podcast_guest', 'save_guest_custom_fields' );

function save_guest_custom_fields( $term_id ) {
    $fields = [
        'guest_position',
        'guest_image',
        'guest_bio',
        'guest_twitter',
        'guest_facebook',
        'guest_instagram',
    ];

    foreach ( $fields as $field ) {
        if ( isset( $_POST[ $field ] ) ) {
            update_term_meta( $term_id, $field, sanitize_text_field( $_POST[ $field ] ) );
        }
    }
}


// Add meta boxes for podcast details
function add_podcast_meta_boxes() {
    add_meta_box(
        'podcast_episode_meta',
        'Episode Details',
        'render_podcast_meta_box',
        'ss_podcast',
        'normal',
        'high'
    );
}
add_action( 'add_meta_boxes', 'add_podcast_meta_boxes' );

function render_podcast_meta_box( $post ) {
    wp_nonce_field( 'podcast_meta_box', 'podcast_meta_box_nonce' );

    $meta_fields = array(
        'audio_url' => 'Audio URL',
        'audio_type' => 'Audio Type',
        'duration' => 'Duration',
        'episode_number' => 'Episode Number',
        'episode_image' => 'Episode Image URL',
        'pub_date' => 'Publication Date'
    );

    echo '<table class="form-table"><tbody>';
    
    foreach ($meta_fields as $field => $label) {
        $value = get_post_meta( $post->ID, $field, true );
        echo '<tr>';
        echo '<th><label for="'.$field.'">'.$label.'</label></th>';
        echo '<td><input type="text" id="'.$field.'" name="'.$field.'" value="' . esc_attr( $value ) . '" class="regular-text"></td>';
        echo '</tr>';
    }
    
    echo '</tbody></table>';
}

function save_podcast_meta( $post_id ) {
    if ( ! isset( $_POST['podcast_meta_box_nonce'] ) || ! wp_verify_nonce( $_POST['podcast_meta_box_nonce'], 'podcast_meta_box' ) ) {
        return;
    }

    if ( ! current_user_can( 'edit_post', $post_id ) ) {
        return;
    }

    $fields = array( 'audio_url', 'audio_type', 'duration', 'episode_number', 'episode_image', 'pub_date' );
    
    foreach ( $fields as $field ) {
        if ( isset( $_POST[$field] ) ) {
            update_post_meta( $post_id, $field, sanitize_text_field( $_POST[$field] ) );
        }
    }
}
add_action( 'save_post_ss_podcast', 'save_podcast_meta' );

// RSS Parser Function
function parsePodcastRSS($url) {
    $rss = simplexml_load_file($url);
    
    if ($rss === false) {
        return false;
    }
    
    $namespaces = $rss->getNamespaces(true);
    $itunes = isset($namespaces['itunes']) ? $namespaces['itunes'] : '';
    
    $feed = array();
    $feed['title'] = (string)$rss->channel->title;
    $feed['link'] = (string)$rss->channel->link;
    $feed['description'] = (string)$rss->channel->description;
    
    if ($itunes) {
        $feed['author'] = (string)$rss->channel->children($itunes)->author;
        $feed['image'] = (string)$rss->channel->children($itunes)->image->attributes()->href;
    }
    
    $feed['items'] = array();
    
    foreach ($rss->channel->item as $item) {
        $enclosure = $item->enclosure;
        $itunesData = $itunes ? $item->children($itunes) : null;
		
		$title = (string)$item->title;
        $link = (string)$item->link;

        $episode_id = '';
		// Try to extract only episode ID from RSS.com link
		if (preg_match('#rss\.com/podcasts/[^/]+/(\d+)/?#', $link, $matches)) {
			$episode_id = $matches[1];
		}
		
		$keywords = $itunesData && $itunesData->keywords
            ? array_map('trim', explode(',', (string)$itunesData->keywords))
            : [];
        
        $feed['items'][] = array(
            'title' => (string)$item->title,
            'link' => (string)$item->link,
            'description' => (string)$item->description,
            'pubDate' => (string)$item->pubDate,
            'audio_url' => $enclosure ? (string)$enclosure['url'] : '',
            'audio_type' => $enclosure ? (string)$enclosure['type'] : '',
            'duration' => $itunesData ? (string)$itunesData->duration : '',
            'episode_number' => $itunesData ? (string)$itunesData->episode : '',
            'season_number' => $itunesData ? (string)$itunesData->season : '',
            'image' => $itunesData ? (string)$itunesData->image->attributes()->href : '',
			'episode_id' => $episode_id,
			'keywords' => $keywords,
        );
    }
    
    return $feed;
}

function convert_duration_to_seconds($duration_string) {
    if (empty($duration_string)) return 0;

    $parts = explode(':', $duration_string);
    $parts = array_reverse($parts); // for easier handling

    $seconds = 0;

    if (isset($parts[0])) $seconds += intval($parts[0]);         // seconds
    if (isset($parts[1])) $seconds += intval($parts[1]) * 60;     // minutes
    if (isset($parts[2])) $seconds += intval($parts[2]) * 3600;   // hours

    return $seconds;
}


// Podcast Import Functionality
function import_podcast_episodes($rss_feed_url) {
    $podcast_data = parsePodcastRSS($rss_feed_url);
    
    if (!$podcast_data || empty($podcast_data['items'])) {
        return false;
    }
    
    $imported_count = 0;
    
    foreach ($podcast_data['items'] as $episode) {
        // Check if episode already exists
        $existing = get_posts(array(
            'post_type' => 'ss_podcast',
            'meta_key' => 'audio_url',
            'meta_value' => $episode['audio_url'],
            'posts_per_page' => 1
        ));
        
        if ($existing) {
            continue; // Skip if already exists
        }
        
        // Create new episode post
        $post_data = array(
            'post_title' => $episode['title'],
            'post_content' => $episode['description'],
            'post_excerpt' => wp_trim_words($episode['description'], 55),
            'post_type' => 'ss_podcast',
            'post_status' => 'publish',
            'post_date' => date('Y-m-d H:i:s', strtotime($episode['pubDate'])),
        );
        
        $post_id = wp_insert_post($post_data);
        
        if ($post_id) {
            // Save meta data
            update_post_meta($post_id, 'audio_url', $episode['audio_url']);
            update_post_meta($post_id, 'audio_type', $episode['audio_type']);
            update_post_meta($post_id, 'duration', $episode['duration']);
			$duration = convert_duration_to_seconds($episode['duration']);
			update_post_meta($post_id, 'duration', $duration);

			$minutes = floor($duration / 60);
			$seconds = str_pad($duration % 60, 2, '0', STR_PAD_LEFT);
			$formatted = "{$minutes}:{$seconds}";
			update_post_meta($post_id, 'duration_formatted', $formatted);

            update_post_meta($post_id, 'duration_formatted', $formatted);
            update_post_meta($post_id, 'episode_number', $episode['episode_number']);
            update_post_meta($post_id, 'episode_image', $episode['image']);
            update_post_meta($post_id, 'pub_date', $episode['pubDate']);
			$formatted_pub_date = date('d M Y', strtotime($episode['pubDate']));
			update_post_meta($post_id, 'pub_date_formatted', $formatted_pub_date);
			
			update_post_meta($post_id, 'episode_id', $episode['episode_id']);
			if (!empty($episode['keywords'])) {
				update_post_meta($post_id, 'keywords', implode(', ', $episode['keywords']));
			}
            
            $imported_count++;
        }
    }
    
    return $imported_count;
}

// Cron Job Setup
function schedule_podcast_import() {
    if (!wp_next_scheduled('hourly_podcast_import')) {
        wp_schedule_event(time(), 'hourly', 'hourly_podcast_import');
    }
}
add_action('wp', 'schedule_podcast_import');

function run_hourly_podcast_import() {
    $rss_feed_url = get_option('podcast_rss_feed_url', '');
    
    if (!empty($rss_feed_url)) {
        $imported = import_podcast_episodes($rss_feed_url);
        error_log('Podcast import completed. Imported ' . $imported . ' new episodes.');
    }
}
add_action('hourly_podcast_import', 'run_hourly_podcast_import');

// Settings Page
function podcast_import_settings_page() {
    add_options_page(
        'Podcast Import Settings',
        'Podcast Import',
        'manage_options',
        'podcast-import-settings',
        'podcast_import_settings_html'
    );
}
add_action('admin_menu', 'podcast_import_settings_page');

function podcast_import_settings_html() {
    if (!current_user_can('manage_options')) {
        return;
    }
    
    if (isset($_POST['podcast_rss_feed_url'])) {
        update_option('podcast_rss_feed_url', esc_url_raw($_POST['podcast_rss_feed_url']));
        echo '<div class="notice notice-success"><p>Settings saved.</p></div>';
    }
    
    $current_url = get_option('podcast_rss_feed_url', '');
    ?>
    <div class="wrap">
        <h1>Podcast Import Settings</h1>
        <form method="post">
            <table class="form-table">
                <tr>
                    <th scope="row"><label for="podcast_rss_feed_url">Podcast RSS Feed URL</label></th>
                    <td>
                        <input type="url" name="podcast_rss_feed_url" id="podcast_rss_feed_url" 
                               value="<?php echo esc_attr($current_url); ?>" class="regular-text">
                        <p class="description">Enter the URL of the podcast RSS feed to import automatically</p>
                    </td>
                </tr>
            </table>
            <?php submit_button('Save Settings'); ?>
        </form>
        
        <h2>Manual Import</h2>
        <form method="post" action="<?php echo admin_url('admin-post.php'); ?>">
            <input type="hidden" name="action" value="manual_podcast_import">
            <?php wp_nonce_field('manual_podcast_import'); ?>
            <?php submit_button('Run Import Now'); ?>
        </form>
    </div>
    <?php
}

function handle_manual_podcast_import() {
    if (!current_user_can('manage_options') || !wp_verify_nonce($_POST['_wpnonce'], 'manual_podcast_import')) {
        wp_die('Unauthorized');
    }
    
    $rss_feed_url = get_option('podcast_rss_feed_url', '');
    if (!empty($rss_feed_url)) {
        $imported = import_podcast_episodes($rss_feed_url);
        wp_redirect(add_query_arg('imported', $imported, admin_url('options-general.php?page=podcast-import-settings')));
        exit;
    }
}
add_action('admin_post_manual_podcast_import', 'handle_manual_podcast_import');

// Cleanup on deactivation
function podcast_import_deactivate() {
    wp_clear_scheduled_hook('hourly_podcast_import');
}
register_deactivation_hook(__FILE__, 'podcast_import_deactivate');

// Shortcode for podcast player
function podcast_player_shortcode($atts) {
    $atts = shortcode_atts(array(
        'id' => get_the_ID(),
    ), $atts);
    
    $audio_url = get_post_meta($atts['id'], 'audio_url', true);
    $audio_type = get_post_meta($atts['id'], 'audio_type', true);
    
    if (!$audio_url) {
        return '';
    }
    
    ob_start();
    ?>
    <div class="podcast-player">
        <audio controls style="width: 100%">
            <source src="<?php echo esc_url($audio_url); ?>" type="<?php echo esc_attr($audio_type); ?>">
            Your browser does not support the audio element.
        </audio>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('podcast_player', 'podcast_player_shortcode');

// Display podcast meta with content
function display_podcast_meta($content) {
    if (is_singular('ss_podcast') && in_the_loop() && is_main_query()) {
        $post_id = get_the_ID();
        $duration = get_post_meta($post_id, 'duration', true);
        $pub_date = get_post_meta($post_id, 'pub_date', true);
        $episode_number = get_post_meta($post_id, 'episode_number', true);
        
        $meta_html = '<div class="podcast-meta">';
        $meta_html .= do_shortcode('[podcast_player id="'.$post_id.'"]');
        
        if ($duration || $pub_date || $episode_number) {
            $meta_html .= '<ul class="podcast-details">';
            
            if ($duration) {
                $meta_html .= '<li><strong>Duration:</strong> ' . esc_html($duration) . '</li>';
            }
            
            if ($pub_date) {
                $meta_html .= '<li><strong>Published:</strong> ' . esc_html(date('F j, Y', strtotime($pub_date))) . '</li>';
            }
            
            if ($episode_number) {
                $meta_html .= '<li><strong>Episode Number:</strong> ' . esc_html(ucfirst($episode_number)) . '</li>';
            }
            
            $meta_html .= '</ul>';
        }
        
        $meta_html .= '</div>';
        
        $content = $meta_html . $content;
    }
    
    return $content;
}
add_filter('the_content', 'display_podcast_meta');

function save_formatted_duration($post_id) {
    // Skip autosave and non-podcast post types (optional)
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;

    // Make sure it's the right post type (optional)
    if (get_post_type($post_id) !== 'ss_podcast') return;

    $duration = intval(get_post_meta($post_id, 'duration', true));

    if ($duration > 0) {
        $minutes = floor($duration / 60);
        $seconds = str_pad($duration % 60, 2, '0', STR_PAD_LEFT);
        $formatted = "{$minutes}:{$seconds}";

        update_post_meta($post_id, 'duration_formatted', $formatted);
    }
}
add_action('save_post', 'save_formatted_duration');

function ss_display_episode_image_shortcode($atts) {
    global $post;

    $atts = shortcode_atts([
        'id' => $post ? $post->ID : 0,
        'width' => 371,
        'height' => 217,
    ], $atts);

    $post_id = (int) $atts['id'];
    $width = (int) $atts['width'];
    $height = (int) $atts['height'];

    if (!$post_id) return '';

    $image_url = get_post_meta($post_id, 'episode_image', true);

    // ✅ Fallback image URL
    if (!$image_url) {
        $image_url = 'https://staging.neothink.com/wp-content/uploads/2025/06/New-Episode%E2%80%A8Available-Now.png';
    }

    $attachment_id = attachment_url_to_postid($image_url);
    $alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', true);
    $alt = $alt ? esc_attr($alt) : get_the_title($post_id);

    // If it's a WP media library image
    if ($attachment_id) {
        $srcset = wp_get_attachment_image_srcset($attachment_id, 'large');
        $sizes = wp_get_attachment_image_sizes($attachment_id, 'large');
        return sprintf(
            '<img decoding="async" width="%d" height="%d" src="%s" class="attachment-large size-large wp-image-%d" alt="%s"%s%s>',
            $width,
            $height,
            esc_url($image_url),
            $attachment_id,
            $alt,
            $srcset ? ' srcset="' . esc_attr($srcset) . '"' : '',
            $sizes ? ' sizes="' . esc_attr($sizes) . '"' : ''
        );
    }

    // Fallback for non-WP images
    return sprintf(
        '<img decoding="async" width="%d" height="%d" src="%s" alt="%s" style="max-width:100%%; height:auto;" />',
        $width,
        $height,
        esc_url($image_url),
        $alt
    );
}
add_shortcode('episode_image', 'ss_display_episode_image_shortcode');

// Shortcode: [rss_embed_player episode_id="1821051" title="Optional Title"]
function rss_embed_player_shortcode($atts) {
    $atts = shortcode_atts(array(
        'episode_id' => '',
        'title' => '',
    ), $atts, 'rss_embed_player');

    if (empty($atts['episode_id']) && is_singular('ss_podcast')) {
        $atts['episode_id'] = get_post_meta(get_the_ID(), 'episode_id', true);
    }

    if (empty($atts['episode_id'])) {
        return '';
    }
    $podcast_slug = 'markhamilton'; 
    // Use post title if no custom title
    $title = $atts['title'];
    if (empty($title) && is_singular('ss_podcast')) {
        $title = get_the_title();
    }

    // Construct embed URL
    $embed_url = "https://player.rss.com/{$podcast_slug}/{$atts['episode_id']}?theme=dark&about=false";

    // Build iframe
    $iframe = '<iframe 
        src="' . esc_url($embed_url) . '" 
        width="100%" 
        height="202px" 
        title="' . esc_attr($title) . '" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        scrolling="no">
    </iframe>';

    return $iframe;
}
add_shortcode('rss_embed_player', 'rss_embed_player_shortcode');

function custom_profile_cards_shortcode($atts, $content = null) {
    $default_atts = shortcode_atts([
        // Card 1
        'name1' => 'Wallace Hamilton',
        'position1' => 'Entrepreneur',
        'content1' => 'William Hamilton is an entrepreneur who believes the system is rigged, offering innovative solutions to help others achieve an extraordinary life.',
        'image1' => 'https://staging.neothink.com/wp-content/uploads/2025/06/guest2-1.png',
        'twitter1' => 'https://x.com',
        'facebook1' => 'https://facebook.com',
        'instagram1' => 'https://instagram.com',

        // Card 2
        'name2' => 'Mark Hamilton',
        'position2' => 'Entrepreneur',
        'content2' => 'Founder of Immortalis - the first Prime Law Capitalist Country',
        'image2' => 'https://staging.neothink.com/wp-content/uploads/2025/07/image-07-01-2025_12_49_PM.png',
        'twitter2' => 'https://x.com',
        'facebook2' => 'https://facebook.com',
        'instagram2' => 'https://instagram.com',
    ], $atts);

    ob_start(); ?>
    <style>
      .profile-cards {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      }
      .profile-card {
        flex: 1 1 300px;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .profile-card img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 15px;
      }
      .profile-card h3 {
        margin: 10px 0 5px;
      }
      .profile-card p.position {
        font-weight: bold;
        color: #666;
        margin-bottom: 10px;
      }
      .profile-card .social-icons {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: 15px;
      }
      .profile-card .social-icons a {
        display: inline-flex;
        color: #1B1F29;
        opacity: 0.6;
        transition: opacity 0.3s;
      }
      .profile-card .social-icons a:hover {
        opacity: 1;
      }
      .profile-card .social-icons svg {
        width: 24px;
        height: 24px;
      }
    </style>

    <div class="profile-cards">
      <?php for ($i = 1; $i <= 2; $i++) : ?>
        <div class="profile-card">
          <img src="<?php echo esc_url($default_atts["image$i"]); ?>" alt="<?php echo esc_attr($default_atts["name$i"]); ?>" />
          <h3><?php echo esc_html($default_atts["name$i"]); ?></h3>
          <p class="position"><?php echo esc_html($default_atts["position$i"]); ?></p>
          <p><?php echo esc_html($default_atts["content$i"]); ?></p>
          <div class="social-icons">
            <?php if ($default_atts["twitter$i"]) : ?>
              <a href="<?php echo esc_url($default_atts["twitter$i"]); ?>" target="_blank"><?php echo get_social_svg('twitter'); ?></a>
            <?php endif; ?>
            <?php if ($default_atts["facebook$i"]) : ?>
              <a href="<?php echo esc_url($default_atts["facebook$i"]); ?>" target="_blank"><?php echo get_social_svg('facebook'); ?></a>
            <?php endif; ?>
            <?php if ($default_atts["instagram$i"]) : ?>
              <a href="<?php echo esc_url($default_atts["instagram$i"]); ?>" target="_blank"><?php echo get_social_svg('instagram'); ?></a>
            <?php endif; ?>
          </div>
        </div>
      <?php endfor; ?>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('profile_cards', 'custom_profile_cards_shortcode');

function get_social_svg($platform) {
    switch ($platform) {
        case 'twitter':
            return '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 32 32"><path d="M32 6.076a13.172 13.172 0 01-3.769 1.031 6.58 6.58 0 002.887-3.631 13.17 13.17 0 01-4.169 1.594 6.563 6.563 0 00-11.188 5.98A18.635 18.635 0 012.228 4.15a6.564 6.564 0 002.031 8.75 6.532 6.532 0 01-2.975-.822v.083a6.566 6.566 0 005.263 6.437 6.575 6.575 0 01-2.965.112 6.568 6.568 0 006.13 4.564A13.172 13.172 0 010 27.539a18.616 18.616 0 0010.063 2.951c12.072 0 18.675-10.003 18.675-18.675 0-.285-.006-.568-.019-.85A13.338 13.338 0 0032 6.076z"/></svg>';
        case 'facebook':
            return '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 32 32"><path d="M29 0H3C1.343 0 0 1.343 0 3v26c0 1.657 1.343 3 3 3h13.5V20.5h-4v-5h4v-3.667C16.5 8.716 18.716 6.5 22.333 6.5c1.085 0 2.25.167 2.25.167v4h-2.5c-1.667 0-2 1.083-2 2.167V15.5h4.167l-.667 5H20.5V32H29c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3z"/></svg>';
        case 'instagram':
            return '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 32 32"><path d="M16 7a9 9 0 100 18 9 9 0 000-18zm0 14.8A5.8 5.8 0 1121.8 16 5.808 5.808 0 0116 21.8zM26.2 6.2a2.1 2.1 0 11-2.1-2.1 2.1 2.1 0 012.1 2.1zM32 9.2v13.6A9.2 9.2 0 0122.8 32H9.2A9.2 9.2 0 010 22.8V9.2A9.2 9.2 0 019.2 0h13.6A9.2 9.2 0 0132 9.2zM29 9.2a6.2 6.2 0 00-6.2-6.2H9.2A6.2 6.2 0 003 9.2v13.6a6.2 6.2 0 006.2 6.2h13.6a6.2 6.2 0 006.2-6.2V9.2z"/></svg>';
        default:
            return '';
    }
}

// Register the custom YouTube link meta field for ss_podcast
function ss_register_podcast_youtube_meta() {
    register_post_meta('ss_podcast', '_ss_youtube_link', [
        'show_in_rest'      => true,
        'type'              => 'string',
        'single'            => true,
        'sanitize_callback' => 'esc_url_raw',
        'auth_callback'     => function() {
            return current_user_can('edit_posts');
        }
    ]);
}
add_action('init', 'ss_register_podcast_youtube_meta');

// Add meta box to the ss_podcast post editor
function ss_add_youtube_meta_box() {
    add_meta_box(
        'ss_youtube_meta_box',       // ID
        'YouTube Link',              // Title
        'ss_youtube_meta_box_callback', // Callback
        'ss_podcast',                // Post type
        'normal',                    // Context
        'default'                    // Priority
    );
}
add_action('add_meta_boxes', 'ss_add_youtube_meta_box');

// Meta box HTML content
function ss_youtube_meta_box_callback($post) {
    $value = get_post_meta($post->ID, '_ss_youtube_link', true);
    wp_nonce_field('ss_youtube_meta_box', 'ss_youtube_meta_box_nonce');
    ?>
    <label for="ss_youtube_link">YouTube Video URL:</label>
    <input type="url" name="ss_youtube_link" id="ss_youtube_link" value="<?php echo esc_attr($value); ?>" style="width:100%;" placeholder="https://www.youtube.com/watch?v=..." />
    <?php
}

// Save the YouTube link field
function ss_save_youtube_meta_box_data($post_id) {
    // Check nonce
    if (!isset($_POST['ss_youtube_meta_box_nonce']) || !wp_verify_nonce($_POST['ss_youtube_meta_box_nonce'], 'ss_youtube_meta_box')) {
        return;
    }

    // Avoid autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Permissions check
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Save the meta field
    if (isset($_POST['ss_youtube_link'])) {
        update_post_meta($post_id, '_ss_youtube_link', esc_url_raw($_POST['ss_youtube_link']));
    }
}
add_action('save_post', 'ss_save_youtube_meta_box_data');
