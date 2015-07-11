document.write(
	'<script src="' + (location.href.match(/^file/) ? '' : 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/') + 'jquery.min.js"></script>' +
	'<script src="formatPage.js"></script>' +
	'<link type="text/css" rel="stylesheet" href="stylesheet.css" />'
);
