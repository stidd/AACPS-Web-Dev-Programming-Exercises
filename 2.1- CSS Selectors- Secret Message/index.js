
// set background color to black
$('body').css({'background': 'black', 'text-align': 'center'});
$('body').css({'user-select': 'none'});

// make text inline and increase font size
$('p, h2, h3, h4, h5').css({'display': 'inline', 'line-height': '200%', 'font-size': '400%'});

// if conditionals below are really wonky. check with your computers before using.
if ( !$('h1').css('color') ){
    $('h1').css('color','black');
}

if ( !$('p').css('color') ){
    $('p').css('color','black');
}

$('h2').text('have hid');
$('h2').css('background', 'yellow');
if ( !$('h2').css('color') || $('h2').css('color') === 'rgb(0, 0, 0)' || $('h2').css('color') === '#000000' ) {
    $('h2').css('color', 'yellow');
}

$('h3').text('ize beh');
$('h3').css('background', 'red');
if ( !$('h3').css('color') || $('h3').css('color') === 'rgb(0, 0, 0)' || $('h3').css('color') === '#000000' ) {
    $('h3').css('color', 'red');
}

$('h4').text('teacher desk');
$('h4').css('background', 'white');
if ( !$('h4').css('color') || $('h4').css('color') === 'rgb(0, 0, 0)' || $('h4').css('color') === '#000000' ) {
    $('h4').css('color', 'white');
}

$('h5').text('front of ');
$('h5').css('background', 'blue');
if ( !$('h5').css('color') || $('h5').css('color') === 'rgb(0, 0, 0)' || $('h5').css('color') === '#000000' ) {
    $('h5').css('color', 'blue');
}