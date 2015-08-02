var file = location.href.match(/^file/) !== null;

document.write(
	'<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">'
);

var scripts = [
	(file ? 'scripts/' : 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/') + 'jquery.min.js',
	'scripts/formatPage.js',
];
scripts.forEach(function(script)
{
	document.write('<script src="' + script + '<"></script>');
});


var stylesheets = [
	'header.css',
	'content.css',
	'stylesheet.css',
];
stylesheets.forEach(function(sheet)
{
	document.write('<link type="text/css" rel="stylesheet" href="stylesheets/' + sheet + '">');
});
