<?php

// don't load directly
if ( !defined( 'ABSPATH' ) ) {
    die( '-1' );
}
class CF7_Material_Design_Admin
{
    private  $customize_url ;
    private  $demos_url ;
    private  $plugin_url ;
    private  $upgrade_url ;
    private  $upgrade_cost ;
    private  $fs ;
    public function __construct()
    {
        // Enqueue
        add_action( 'admin_enqueue_scripts', array( $this, 'add_scripts_and_styles' ) );
        // Other actions
        add_action( 'current_screen', array( $this, 'md_help_tab' ) );
        // Set members
        $this->customize_url = admin_url( '/customize.php?autofocus[section]=cf7md_options' );
        $this->demos_url = 'http://cf7materialdesign.com/demos/';
        $this->plugin_url = plugin_dir_url( __DIR__ );
        global  $cf7md_fs ;
        $this->fs = $cf7md_fs;
        $this->upgrade_url = $cf7md_fs->get_upgrade_url( 'lifetime' );
        $this->upgrade_cost = CF7MD_UPGRADE_COST;
    }
    
    /**
     * Enqueue scripts and styles
     */
    public function add_scripts_and_styles( $hook )
    {
        // Register the admin scripts and styles
        wp_register_script(
            'cf7-material-design-admin',
            plugins_url( '../assets/js/cf7-material-design-admin.js', __FILE__ ),
            array( 'jquery' ),
            '1.0',
            true
        );
        wp_register_style( 'cf7-material-design-admin', plugins_url( '../assets/css/cf7-material-design-admin.css', __FILE__ ) );
        // Localize the script with the html
        $localize = array(
            'instructions_metabox' => $this->get_metabox_html(),
        );
        wp_localize_script( 'cf7-material-design-admin', 'cf7md_html', $localize );
        // Enqueued script with localized data.
        // Load only on ?page=wpcf7
        
        if ( strpos( $hook, 'wpcf7' ) !== false ) {
            wp_enqueue_script( 'cf7-material-design-admin' );
            wp_enqueue_style( 'cf7-material-design-admin' );
        }
    
    }
    
    /**
     * Metabox html
     */
    private function get_metabox_html()
    {
        ob_start();
        ?>
		<div id="cf7md-instructions-metabox" class="cf7md-card">
            <h2 class="cf7md-card-title">Material Design</h2>
            <div class="cf7md-card-content">
                <p>Apply material design to your form using shortcodes. Your form should look something like this:</p>
                <pre>[md-form]

[md-text label="Your name"]
[text* your-name]
[/md-text]

[md-text label="Your email"]
[email* your-email]
[/md-text]

[md-textarea label="Your message"]
[textarea* your-message]
[/md-textarea]

[md-submit]
[submit "Send"]
[/md-submit]

[/md-form]</pre>
            <ul>
                <li><a href="#" class="cf7md-open-docs">Documentation</a></li>
                <li><a href="<?php 
        echo  $this->demos_url ;
        ?>
" target="_blank">Demos</a></li>
                <li><a href="https://wordpress.org/support/plugin/material-design-for-contact-form-7/reviews/?rate=5#new-post" target="_blank">Rate this plugin</a></li>
                <?php 
        
        if ( $this->fs->is_free_plan() ) {
            ?>
                    <li><a href="https://wordpress.org/support/plugin/material-design-for-contact-form-7/" target="_blank">Support</a></li>
                    <li><a href="<?php 
            echo  $this->customize_url ;
            ?>
">Try the style customizer</a> (pro feature)</li>
                <?php 
        } else {
            ?>
                    <li><a href="mailto:cf7materialdesign@gmail.com" target="_blank">Direct email support</a></li>
                    <li><a href="<?php 
            echo  $this->customize_url ;
            ?>
">Customize styles</a></li>
                <?php 
        }
        
        ?>
            </ul>
            </div>
            <?php 
        
        if ( $this->fs->is_free_plan() ) {
            ?>
                <div class="cf7md-card-actions">
                    <a href="<?php 
            echo  $this->upgrade_url ;
            ?>
" class="cf7md-button">Upgrade for <?php 
            echo  $this->upgrade_cost ;
            ?>
</a>
                </div>
            <?php 
        }
        
        ?>
        </div>
		<?php 
        $return = ob_get_contents();
        ob_end_clean();
        return $return;
    }
    
    /**
     * Help tab html
     */
    private function get_help_tab_html()
    {
        $pro_feature_link = '(<a href="' . $this->upgrade_url . '" title="Upgrade now for ' . $this->upgrade_cost . '">pro&nbsp;feature</a>)';
        $container_class = 'cf7md-docs';
        $container_class .= ' cf7md-is-free';
        $label_attr = '<code>label</code> - the label for your form field';
        $help_attr = '<code>help</code> - (optional) text for below the field';
        $width_attrs = '<span class="cf7md-pro-sc">Width attributes - ' . $pro_feature_link . ' see layout section below</span>';
        ob_start();
        ?>
        <div class="<?php 
        echo  $container_class ;
        ?>
">
            <p>You can add material design to your new <em>and</em> existing forms by wrapping the form tags in these shortcodes.</p>
            <p><em>What do you mean by wrap?</em> - each shortcode has an opening <em>and</em> closing 'tag'. The opening tag (E.g. <code>[md-submit]</code>) goes before your <code>submit</code> form tag, and the closing tag (E.g. <code>[/md-submit]</code>) goes after it. Ending tags are the same as starting tags, but have <code>/</code> before the tag name, and don't need any parameters. Here's a full example of wrapping your submit button in a material design shortcode:</p>
            <p style="margin-left: 20px;"><code>[md-submit][submit "Send"][/md-submit]</code></p>
            <p>Some shortcodes also have 'parameters' that let you specify more details about your field. Parameters are added to the opening tag like so:</p>
            <p style="margin-left: 20px;"><code>[md-text label="Your name"]</code></p>
            <p>Here, we give the <code>label</code> parameter a value of 'Your name', which specifies for us that the field's label should be 'Your name'.</p>
            <h4>All Available Shortcodes</h4>
            <p>See these shortcodes in action, including example code, at the <a href="<?php 
        echo  $this->demos_url ;
        ?>
" target="_blank">demo site</a>.</a>
            <table class="cf7md-table">
                <thead>
                    <tr>
                        <th style="width: 110px;">Shortcode</th>
                        <th>Use</th>
                        <th>Parameters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>[md-form]</code></td>
                        <td>Wraps your entire form.</td>
                        <td><code>theme</code> - optionally specify <code>theme="dark"</code> for forms on a dark background<br />
                        <code>spacing</code> - optionally specify <code>spacing="tight"</code> for less vertical space between fields</td>
                    </tr>
                    <tr>
                        <td><code>[md-raw]</code></td>
                        <td>Wraps any miscellaneos elements.</td>
                        <td><?php 
        echo  $width_attrs ;
        ?>
</td>
                    </tr>
                    <tr>
                        <td><code>[md-text]</code></td>
                        <td>Wraps text, email, url, tel, number and date form tags.</td>
                        <td>
                            <?php 
        echo  $label_attr ;
        ?>
<br />
                            <?php 
        echo  $help_attr ;
        ?>
<br />
                            <?php 
        echo  $width_attrs ;
        ?>
                        </td>
                    </tr>
                    <tr>
                        <td><code>[md-textarea]</code></td>
                        <td>Wraps your textarea form tags.</td>
                        <td>
                            <code>autosize</code> - <code>1</code> (default) to auto-resize or <code>0</code> to remain static<br />
                            <?php 
        echo  $label_attr ;
        ?>
<br />
                            <?php 
        echo  $help_attr ;
        ?>
<br />
                            <?php 
        echo  $width_attrs ;
        ?>
                        </td>
                    </tr>
                    <tr>
                        <td><code>[md-select]</code></td>
                        <td>Wraps your drop-down menu form tags.</td>
                        <td>
                            <?php 
        echo  $label_attr ;
        ?>
<br />
                            <?php 
        echo  $help_attr ;
        ?>
<br />
                            <?php 
        echo  $width_attrs ;
        ?>
                        </td>
                    </tr>
                    <tr>
                        <td><code>[md-checkbox]</code></td>
                        <td>Wraps your checkbox form tags.</td>
                        <td>
                            <?php 
        echo  $label_attr ;
        ?>
<br />
                            <?php 
        echo  $help_attr ;
        ?>
<br />
                            <?php 
        echo  $width_attrs ;
        ?>
                        </td>
                    </tr>
                    <tr>
                        <td><code>[md-radio]</code></td>
                        <td>Wraps your radio form tags.</td>
                        <td>
                            <?php 
        echo  $label_attr ;
        ?>
<br />
                            <?php 
        echo  $help_attr ;
        ?>
<br />
                            <?php 
        echo  $width_attrs ;
        ?>
                        </td>
                    </tr>
                    <tr class="cf7md-pro-sc">
                        <td><code>[md-switch]</code></td>
                        <td>Wraps checkbox OR radio form tags to turn them into <a href="https://material.io/guidelines/components/selection-controls.html#selection-controls-switch" target="_blank">switches</a>. <?php 
        echo  $pro_feature_link ;
        ?>
</td>
                        <td>
                            <?php 
        echo  $label_attr ;
        ?>
<br />
                            <?php 
        echo  $help_attr ;
        ?>
<br />
                            <?php 
        echo  $width_attrs ;
        ?>
                        </td>
                    </tr>
                    <tr>
                        <td><code>[md-accept]</code></td>
                        <td>Wraps your acceptance form tags.</td>
                        <td>
                            <code>terms</code> - the terms to which the user must agree<br />
                            <?php 
        echo  $label_attr ;
        ?>
<br />
                            <?php 
        echo  $help_attr ;
        ?>
<br />
                            <?php 
        echo  $width_attrs ;
        ?>
                        </td>
                    </tr>
                    <tr>
                        <td><code>[md-file]</code></td>
                        <td>Wraps your file upload tags.</td>
                        <td>
                            <code>nofile</code> - the text to show before a file is chosen (default: No file chosen)<br />
                            <code>btn_text</code> - the button text (default: Choose file)<br />
                            <?php 
        echo  $label_attr ;
        ?>
<br />
                            <?php 
        echo  $help_attr ;
        ?>
<br />
                            <?php 
        echo  $width_attrs ;
        ?>
                        </td>
                    </tr>
                    <tr>
                        <td><code>[md-quiz]</code></td>
                        <td>Wraps your quiz form tags.</td>
                        <td>
                            <?php 
        echo  $help_attr ;
        ?>
<br />
                            <?php 
        echo  $width_attrs ;
        ?>
                        </td>
                    </tr>
                    <tr>
                        <td><code>[md-captcha]</code></td>
                        <td>Wraps your captcha form tags.</td>
                        <td>
                            <?php 
        echo  $width_attrs ;
        ?>
                        </td>
                    </tr>
                    <tr>
                        <td><code>[md-submit]</code></td>
                        <td>Wraps your submit button form tag.</td>
                        <td><?php 
        echo  $width_attrs ;
        ?>
</td>
                    </tr>
                    <tr class="cf7md-pro-sc">
                        <td><code>[md-card]</code></td>
                        <td>Wraps multiple elements (including other <code>[md-*]</code> shortcodes) to group them into sections. <?php 
        echo  $pro_feature_link ;
        ?>
</td>
                        <td>
                            <code>title</code> - (optional) the title for the section<br />
                            <code>subtitle</code> - (optional) the subtitle for the section<br />
                            <code>titlesize</code> - optionally set to <code>large</code><br />
                            <?php 
        echo  $width_attrs ;
        ?>
                        </td>
                    </tr>
                </tbody>
            </table>

            <h4 id="cf7md-layout">Layout attributes <?php 
        echo  $pro_feature_link ;
        ?>
</h4>
            <p>If you're on the pro version, most shortcodes have width attributes available. The width attributes specify how many columns out of 12 (desktop), 8 (tablet) or 4 (mobile) the element should occupy. The attributes are:</p>
            <ul>
                <li><code>desktopwidth</code> - how many columns out of 12 should the element occupy on large screens (>= 840px)?</li>
                <li><code>tabletwidth</code> - how many columns out of 8 should the element occupy on medium-sized screens (>= 480px)?</li>
                <li><code>mobilewidth</code> - how many columns out of 4 should the element occupy on medium-sized screens (< 480px)?</li>
            </ul>
            <p>Here's an example of making two fields appear side-by-side on desktop and tablet, and vertically stacked on mobiles.</p>
            <p style="margin-left: 20px;"><code>[md-text tabletwidth="4" desktopwidth="6"][text your-name][/md-text]</code><br /><code>[md-text tabletwidth="4" desktopwidth="6"][email your-email][/md-text]</code></p>
            <p>We set <code>tabletwidth</code> to <code>4</code> (half of 8) and <code>desktopwidth</code> to <code>6</code> (half of 12). We don't need to specify <code>mobilewidth</code> because the default is always to fill all available columns.</p>

            <h4>How can I customize the colours and fonts to match my theme?</h4>
            <?php 
        ?>
                <p>Customizing colours and fonts is a pro feature, but you can <a href="<?php 
        echo  $this->customize_url ;
        ?>
">try it out for free in the customizer</a>, your styles just won't be applied until you upgrade. Once you upgrade, the styles you chose will take effect.</p>
            <?php 
        ?>

            <h4>It doesn't look right for me!</h4>
            <p>Some themes have styles that override the material design styles. If this happens to you, post a link to your form page in the <a href="https://wordpress.org/support/plugin/material-design-for-contact-form-7/" target="_blank">support forum</a> and I'll help you fix it.</p>
            <?php 
        ?>
        </div>
		<?php 
        $return = ob_get_contents();
        ob_end_clean();
        return $return;
    }
    
    /**
     * Add help tab
     */
    public function md_help_tab()
    {
        $screen = get_current_screen();
        //echo '<pre>' . print_r( $screen, true ) . '</pre>';
        if ( $screen->base != 'toplevel_page_wpcf7' && $screen->base != 'contact_page_wpcf7-new' ) {
            return;
        }
        $content = $this->get_help_tab_html();
        // Add help tab
        $screen->add_help_tab( array(
            'id'      => 'cf7md-help',
            'title'   => 'Material Design',
            'content' => $content,
        ) );
    }

}
// Finally initialize code
$cf7_material_design_admin = new CF7_Material_Design_Admin();