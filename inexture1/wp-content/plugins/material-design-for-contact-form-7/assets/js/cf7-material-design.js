// This closure gives access to jQuery as $
// Don't delete it
(function($) {

	// Do stuff
	$(document).ready(function(){


		// === Running ID === //
		window.cf7mdId = 0;


		// === Form formatting === //
		$('.cf7md-form').each(function(){
			var $this = $(this);

			// Remove empty p tags inside, before and after
			$this.siblings('p')
				.add($this.find('p'))
				.filter(function () { return $.trim(this.innerHTML) == "" }).remove();

			// Add `required` attribute to all required fields
			$('.cf7md-text, .cf7md-textarea').find('.wpcf7-validates-as-required').each(function(){
				$(this).attr('required', 'required');
			});
		});
		

		// === Generic item formatting === //
		$('.cf7md-item').each(function(){
			var $this = $(this),
				$span = $this.find('.wpcf7-form-control-wrap');

			// Remove breaks
			$this.find('br').remove();
			// Add md class to span
			$span.addClass('mdc-form-field cf');
		});
		

		// === Prepare text inputs and textareas for MD Init === //
		$('.cf7md-text, .cf7md-textarea').each(function() {
			var $this = $(this),
				$input = $this.find('input, textarea'),
				$span = $this.find('.wpcf7-form-control-wrap'),
				$tpl = $this.find('.cf7md-text-html').find('> div'),
				$label = $tpl.find('label');
			
			// Move input
			$input.detach().prependTo($tpl);
			// Insert template
			$tpl.detach().appendTo($span);
			// Add md class to input
			$input.addClass('mdc-textfield__input');
			// Add 'for' to label
			$label.attr('for', $input.attr('name'));
			// Add autosize to textareas
			if($this.hasClass('cf7md-textarea-autosize')){
				$input.attr('rows', '2');
				autosize($input);
			}
		});


		// === Make html5 date inputs play nice with our text fields === //
		$('.cf7md-text [type="date"]').each(function(){
			var $this = $(this);
			$this.change(function(){
				if($this.val() !== '') {
					$this.addClass('cf7md-has-input');
				} else {
					$this.removeClass('cf7md-has-input');
				}
			});
		});


		// === Prepare selects === //
		$('.cf7md-select').each(function() {
			var $this = $(this),
				$select = $this.find('select'),
				label = $this.find('.cf7md-select-label').text(),
				$option1 = $select.children('option').first();

			if($select.hasClass('wpcf7-validates-as-required')) {
				label += '*';
			}
			
			if($this.hasClass('cf7md-select--multi')) {
				// Add class and size for multi
				$select.addClass('mdc-multi-select mdc-list');
				$select.attr('size', '5');
			} else {
				// Add class for standard select
				$select.addClass('mdc-select');
				// Add blank option as label
				if($option1.attr('value') === '') {
					$option1.text(label);
				} else {
					$option1.before('<option default selected value="">' + label + '</option>');
				}
			}
		});


		// === Prepare checkboxes === //
		$('.cf7md-checkbox, .cf7md-radio').each(function() {
			var $this = $(this),
				type = $this.hasClass('cf7md-radio') ? 'radio' : 'checkbox',
				$items = $this.find('.wpcf7-list-item'),
				tpl = $this.find('.cf7md-' + type + '-html').html();

			$items.each(function(){
				var $item = $(this),
					$checkbox = $item.find('input'),
					$label = $item.find('.wpcf7-list-item-label'),
					$labelWrap = $label.parents('label'),
					label = $label.text(),
					$html = $(tpl).clone(),
					$wrap = $('<div class="mdc-' + type + '"></div>'),
					mdcCheckbox = $wrap[0],
					id = 'cf7md' + ++cf7mdId;
				
				// Add classes and ID
				$checkbox.addClass('mdc-' + type + '__native-control').attr('id', id);
				$item.addClass('cf7md-' + type + '-item mdc-form-field cf');
				// Rearrange markup
				$item.append($wrap);
				$label.remove();
				$labelWrap.remove();
				$checkbox.detach().appendTo($wrap);
				$wrap.append($html);
				$wrap.after('<label class="cf7md-' + type + '-label" for="' + id + '">' + label + '</label>');
				// Instantiate mdc checkbox js
				// We're not doing this right now because it's harder to customize colours for
				// and doesn't add all that much pizazz
				//mdc.checkbox.MDCCheckbox.attachTo(mdcCheckbox);
			});
		});


		// === Prepare switches === //
		$('.cf7md-switch').each(function() {
			var $this = $(this),
				type = 'switch',
				$items = $this.find('.wpcf7-list-item'),
				tpl = $this.find('.cf7md-switch-html').html();

			$items.each(function(){
				var $item = $(this),
					$checkbox = $item.find('input'),
					$label = $item.find('.wpcf7-list-item-label'),
					$labelWrap = $label.parents('label'),
					label = $label.text(),
					$html = $(tpl).clone(),
					$switch_wrap = $html.find('.mdc-switch'),
					id = 'cf7md' + ++cf7mdId,
					$newlabel = $('<label for="' + id + '" class="cf7md-switch-label">' + label + '</label>');
				
				// Add classes and ID
				$checkbox.addClass('mdc-' + type + '__native-control').attr('id', id);
				$item.addClass('cf7md-' + type + '-item cf');
				// Rearrange markup
				$item.append($html);
				$checkbox.detach().prependTo($switch_wrap);
				$newlabel.appendTo($html);
				$label.remove();
			});
		});


		// === Prepare acceptance === //
		$('.cf7md-accept').each(function() {
			var $this = $(this),
				$form = $this.closest('#cf7md-form'),
				$span = $this.find('.wpcf7-form-control-wrap'),
				$checkbox = $this.find('input'),
				$tpl = $this.find('.cf7md-checkbox-html').find('> div'),
				$wrap = $('<div class="mdc-checkbox"></div>'),
				$label = $this.find('.cf7md-accept-label'),
				id = 'cf7md' + ++cf7mdId;

			// Add class to span
			$span.addClass('mdc-form-field');			
			// Update checkbox input
			$checkbox.addClass('mdc-checkbox__native-control').attr('id', id);
			// Insert tpl
			$span.append($wrap);
			// Move checkbox into wrap
			$checkbox.detach().appendTo($wrap);
			// Move tpl into wrap
			$wrap.append($tpl);
			// Add `for` to label
			$label.attr('for', id);
			// Move label
			$label.detach().insertAfter($wrap);

			// Watch and toggle submit enabled/disabled
			$checkbox.click(function(){
				toggleSubmit($form);
			});
		});

		// Acceptance toggle function
		function toggleSubmit($form) {
			var $acceptances = $form.find('input:checkbox.wpcf7-acceptance'),
				$submit = $form.find('.cf7md-submit-btn');

			// Logic taken from wpcf7
			$submit.removeAttr( 'disabled' );
			$acceptances.each(function(i, node) {
				$this = $(node);
				if ( $this.hasClass( 'wpcf7-invert' ) && $this.is( ':checked' )
					|| ! $this.hasClass( 'wpcf7-invert' ) && ! $this.is( ':checked' ) ) {
					$submit.attr( 'disabled', 'disabled' );
				}
			});
		}


		// === File fields === //
		$('.cf7md-file').each(function() {
			var $this = $(this),
				$file = $this.find('[type="file"]'),
				$value = $this.find('.cf7md-file--value'),
				$btn = $this.find('.cf7md-file--btn'),
				$label = $this.find('.cf7md-label--static'),
				$wrap = $this.find('.cf7md-file--label'),
				$error = $this.find('.wpcf7-not-valid-tip');

			// Move the error in the DOM
			$error.detach().insertAfter($wrap);
			// Position value
			$value.css({
				paddingLeft: $btn.outerWidth() + 12 + 'px',
				top: $btn.outerHeight() / 2 + 'px'
			});
			// Update the value on load
			if($file.val()) {
				fileName = $file.val().split('\\').pop();
				$value.text(fileName);
			}
			// Update the value on change
			$file.on('change', function(e) {
				if(e.target.value) {
					fileName = e.target.value.split('\\').pop();
					$value.text(fileName);
				}
			});
		});


		// === Prepare quiz === //
		// TODO: Inputs are being duplicated every refresh
		function cf7mdQuiz(refresh) {
			$('.cf7md-quiz').each(function(){
				var $this = $(this),
					$input = $this.find('.wpcf7-quiz'),
					$newInput = $input.clone(),
					$span = $this.find('.wpcf7-form-control-wrap'),
					$tpl = $this.find('.mdc-textfield'),
					$label = $tpl.find('label'),
					$question = $this.find('.wpcf7-quiz-label'),
					$cf7label = $span.find('> label');
				
				// Update label
				$label.attr('for', $input.attr('name'));
				$label.text($question.text());
				$question.hide();
				// Move input and question
				$input.detach().prependTo($tpl);
				$question.detach().prependTo($tpl);
				// Insert template
				$tpl.detach().appendTo($span);
				// Add md class to input
				$input.addClass('mdc-textfield__input');
				// Remove empty cf7 label
				$cf7label.hide();
			});
		}
		cf7mdQuiz(false);
		// Update the quiz label when the form refreshes
		$(window).on('wpcf7submit', function(e) {
			cf7mdQuiz(true);
		});


		// === Prepare submit buttons for MD Init === //
		$('.cf7md-submit').each(function() {
			var $this = $(this),
				$form = $this.closest('#cf7md-form'),
				$input = $this.find('input'),
				$val = $input.attr('value'),
				$svg = $this.find('svg'),
				$btn = $('<button>' + $val + '</button>');

			// Copy atts from input to button
			$btn.addClass($input[0].className);
			$btn.attr('id', $input.attr('id'));
			// Add data init for ripple
			$btn.attr('data-mdc-auto-init', 'MDCRipple');
			// Add md classes
			$btn.addClass('cf7md-submit-btn mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface');
			// Replace input with button
			$input.replaceWith($btn);
			// maybe disable
			toggleSubmit($form);

			// Add click handler to button
			$btn.click(function(){
				// Move svg into spinner
				var $spinner = $(this).parents('.cf7md-submit').find('.ajax-loader');
				$svg.detach().appendTo($spinner);
			});
		});


		// === Update textfields that loaded with a default value === //
		$('.mdc-textfield').each(function(){
			var $label = $(this).find('.mdc-textfield__label'),
				$field = $(this).find('.mdc-textfield__input'),
				val = $field.val();
			if(val){
				$label.addClass('mdc-textfield__label--float-above');
			}
		});


		// === Initialize components === //
		window.mdc.autoInit();
		
	});

}(jQuery));