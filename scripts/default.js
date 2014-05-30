// #############################################
// ## Designed and coded by Harvey Williams   ##
// #############################################
// ## Requires jQuery. Licensed under GPL v3. ##
// #############################################

// ######################
// ## Global Variables
// ######################

// Defaults (used for resetting)
var default_speed='10';
var default_number='1';
var default_type='linear';
var default_size_type='relative';
var default_width='100';
var default_height='100';
var default_offset_x='0';
var default_offset_y='0';
var default_primary_color='#ff0000';
var default_secondary_color='#ffff00';
var default_play_state='running';
var default_escaped='unchecked';

var speed=default_speed;
var number=default_number;
var type=default_type;
var size_type=default_size_type;
var width=default_width;
var height=default_height;
var offset_x=default_offset_x;
var offset_y=default_offset_y;
var primary_color=default_primary_color;
var secondary_color=default_secondary_color;
var play_state=default_play_state;
var escaped=default_escaped;

var sym;

// ######################
// ## Functions
// ######################

// Sets the animation up so all of the values are correct (and equal to the variables)
function set() {
	$('.twist')
		.css('background-color', primary_color)
		.css('animation-play-state', play_state)
		.css('width', width + '%')
		.css('height', height + '%')
		.css('margin-left', offset_x + 'px')
		.css('margin-top', offset_y + 'px');
	$('.alt').css('background-color', secondary_color);
}

function reset() {
	// Return the animation to only having one box
	$('#animation-container').empty();
    $('#animation-container').html('<div class="twist"></div>');
	
	// Reset the global variables
	speed=default_speed;
	number=default_number;
	type=default_type;
	size_type=default_size_type;
	width=default_width;
	height=default_height;
	offset_x=default_offset_x;
	offset_y=default_offset_y;
	primary_color=default_primary_color;
	secondary_color=default_secondary_color;
	play_state=default_play_state;
	escaped=default_escaped;
	
	// Reset the current box
	set();

	// The wrapper overflow is the only property which doesn't effect the animtion itself
	$('#animation-wrapper').css('overflow', 'hidden');

	// Reset all of the inputs
	$('input[name="speed"]').val(speed);
	$('select[name="type"]').val(type);
	$('input[name="number"]').val(number);
	$('input[name="size_type"][value="' + size_type + '"]').prop('checked', true);
	$('input[name="width"]').val(width);
	$('input[name="height"]').val(height);
	$('input[name="offset_x"]').val(offset_x);
	$('input[name="offset_y"]').val(offset_y);
	$('input[name="primary_color"]').val(primary_color);
	$('input[name="secondary_color"]').val(secondary_color);
	$('input[name="escape"]').prop('checked', false);
};

// Work out what symbol should be used
function sym(object) {
	if (object=='absolute') {
		return 'px';
	} else {
		return '%';
	}
};

// ######################
// ## Initilize
// ######################

$(document).ready(function() {
	// alert('Warning! Creating too complex animation with too many boxes can crash your browser! Make sure that you don\'t have anything important open!!');
});

// ######################
// ## Controls
// ######################

// Less control
$('.control-less, .control-more').click(function() {
	var target;
	var val=0;
	var step=0;

	target = $(this).parent().children('input');
	val = target.val();
	step = target.attr('step');
	if (step==null || step==0) {
		step = 1;
	}

	if($(this).hasClass('control-less')) {
		val = val - step;
	} else {
		// "+" tells us it's an integer, otherwise it adds each value as strings
		val = +val + +step;
	}

	target.val(val)
		.trigger('change');
});

// Number control
$('.control-number').change(function() {
	val = $(this).val();
	$(this).parent().children('input[type="range"]').val(val);
});

// Range control
$('input[type="range"]').change(function() {
	val = $(this).val();
	$(this).parent().children('input[type="number"]').val(val);
});

// Speed
$('input[name="speed"]').change(function() {
    speed = $(this).val();
    $('.twist').css('animation', 'spin ' + speed +'s ' + type + ' infinite');
});

// Animation type
$('select[name="type"]').change(function() {
	type = $(this).val();
	$('.twist').css('animation', 'anim ' + speed + 's ' + type + ' infinite');
});

// Number of objects
$('input[name="number"]').change(function() {
    $('#animation-container').empty();
    $('#animation-container').html('<div class="twist"></div>');
    number = $(this).val();
    for ($i=1; $i<number; $i++) {
        if ($i%2==0) {
            $('.twist:last').html('<div class="twist alt"></div>');
        } else {
            $('.twist:last').html('<div class="twist"></div>');            
        }
    }
	set();
});

// Size type
$('input[name="size_type"]').change(function() {
	size_type = $(this).val();
	sym(size_type);	
	$('.twist').css('width', width + symbol).css('height', height + symbol);
});

// Width
$('input[name="width"]').change(function() {
	symbol = sym(size_type);	
	width = $(this).val();
	$('.twist').css('width', width + symbol);
});

// Height
$('input[name="height"]').change(function() {
	symbol = sym(size_type);	
	height = $(this).val();
	$('.twist').css('height', height + symbol);
});

// Offset X
$('input[name="offset_x"]').change(function() {
	offset_x = $(this).val();
	$('.twist').css('margin-left', offset_x + 'px');
});

// Offset Y
$('input[name="offset_y"]').change(function() {
	offset_y = $(this).val();
	$('.twist').css('margin-top', offset_y + 'px');
});

// Primary color
$('input[name="primary_color"]').change(function() {
	primary_color = $(this).val();
	$('.twist').css('background-color', primary_color);
	$('.alt').css('background-color', secondary_color);
});

// Secondary color
$('input[name="secondary_color"]').change(function() {
	secondary_color = $(this).val();
	$('.alt').css('background-color', secondary_color);
});

// Allow escape
$('input[name="escape"]').change(function() {
	if ($(this).prop('checked')) {
		$('#animation-wrapper').css('overflow', 'visible');
	} else {
		$('#animation-wrapper').css('overflow', 'hidden');
	}
});

// ######################
// ## Master Controls
// ######################

// Play state
$('#play_state').click(function() {
	play_state = $('.twist').css('animation-play-state');
	if (play_state=='running') {
		play_state='paused';
		$(this).html('Play');
	} else {
		play_state='running';
		$(this).html('Pause');
	}
	$('.twist').css('animation-play-state', play_state);
});

// Reset
$('#reset').click(reset);
