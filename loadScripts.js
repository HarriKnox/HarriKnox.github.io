document.write(
	'<script src="' + (location.href.match(/^file/) ? '' : 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/') + 'jquery.min.js"></script>' +
	'<script src="formatPage.js"></script>' +
	'<link type="text/css" rel="stylesheet" href="stylesheet.css" />' +
	'<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />'
);
