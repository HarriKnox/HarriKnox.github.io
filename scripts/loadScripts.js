var file = location.href.match(/^file/) !== null;

document.write(
	'<script src="' + (file ? 'scripts/' : 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/') + 'jquery.min.js"></script>' +
	'<script src="scripts/formatPage.js"></script>' +
	'<link type="text/css" rel="stylesheet" href="stylesheets/stylesheet.css" />' +
	'<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />'
);
