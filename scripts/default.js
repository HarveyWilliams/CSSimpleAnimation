// #############################################
// ## Designed and coded by Harvey Williams   ##
// #############################################
// ## Requires jQuery. Licensed under GPL v3. ##
// #############################################

// ######################
// ## Global Variables
// ######################

// Defaults (used for resetting)
var default_time = '10';
var default_number = '1';
var default_type = 'linear';
var default_size_type = 'relative';
var default_width = '100';
var default_height = '100';
var default_offset_x = '0';
var default_offset_y = '0';
var default_primary_color = '#ff0000';
var default_secondary_color = '#ffff00';
var default_play_state = 'running';
var default_escaped = 'unchecked';
var default_border_width = '1';
var default_border_style = 'solid';
var default_border_color = 'black';

var time = default_time;
var number = default_number;
var type = default_type;
var size_type = default_size_type;
var width = default_width;
var height = default_height;
var offset_x = default_offset_x;
var offset_y = default_offset_y;
var primary_color = default_primary_color;
var secondary_color = default_secondary_color;
var play_state = default_play_state;
var escaped = default_escaped;
var border_width = default_border_width;
var border_style = default_border_style;
var border_color = default_border_color;

// ######################
// ## Functions
// ######################

// Changes color names to the hex value
// http://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes
function colorNameToHex(color) {
    var colors = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

    if (typeof colors[color.toLowerCase()] != 'undefined')
        return colors[color.toLowerCase()];

    return false;
}

// Sets the animation up so all of the values are correct (and equal to the variables)
function set() {
	$('.twist')
		.css('background-color', primary_color)
		.css('animation', time + 's ' + type + ' 0s normal none infinite spin')
		.css('animation-play-state', play_state)
		.css('width', width + '%')
		.css('height', height + '%')
		.css('margin-left', offset_x + 'px')
		.css('margin-top', offset_y + 'px')
		.css('border_width', border_width + 'px')
		.css('border_style', border_style)
		.css('border_color', border_color);
	$('.alt').css('background-color', secondary_color);
}

function reset() {
	// Return the animation to only having one box
	$('#animation-container').empty();
    $('#animation-container').html('<div class="twist"></div>');
	
	// Reset the global variables
	time=default_time;
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
	$('input[name="time"]').val(time);
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
	

	reset();
});

// ######################
// ## Show
// ######################

$('.toggle_switch').change(function() {
	var val=$(this).val();
	var name=$(this).attr('name');

	$('.show.' + name).hide();
	$('.' + name + '[type="' + val + '"]').show();
});

// ######################
// ## Controls
// ######################

// Speed
$('input[name="time"]').change(function() {
    time = $(this).val();
    $('.twist').css('animation', time + 's ' + type + ' 0s normal none infinite spin');
});

// Animation type
$('select[name="type"]').change(function() {
	type = $(this).val();
    $('.twist').css('animation', time + 's ' + type + '0s normal none infinite spin');
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
		$('.wrapper').css('overflow', 'visible');
	} else {
		$('#animation-wrapper').css('overflow', 'hidden');
		$('.wrapper').css('overflow', 'hidden');
	}
});

// Border Width
$('input[name="border_width"]').change(function() {
	border_width = $(this).val();

	$('.twist').css('border-width', border_width + 'px');
});

// Border Style
$('select[name="border_style"]').change(function() {
	border_style = $(this).val();

	$('.twist').css('border-style', border_style);
});

// Border Color
$('input[name="border_color"]').change(function() {
	border_color = $(this).val();

	$('.twist').css('border-color', border_color);
});

// ######################
// ## Inputs
// ######################

// Color
// Change the accompanying fields value
// Requires that the accompanying field is in the same parent element
$('input[type="color"]').change(function() {
	var val = $(this).val();

	$(this).parent().children('.color').val(val);
});

$('.color').change(function() {
	var val = $(this).val();
	
	if (val == 'null' || val == '') {
		val = 'transparent';
	} else if (val = 'a color') {
		val = colorNameToHex(val);
	}

	$(this).parent().children('input[type="color"]').val(val);
});

// ----------------------
// -- Ranges
// ----------------------

// Less/More control
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
