(function()
{
	var file = location.href.match(/^file/) !== null;
	
	document.write(
		'<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">'
	);
	
	[
		(file ? 'scripts/' : 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/') + 'jquery.min.js',
		'scripts/header.js',
		'scripts/navbar.js',
		'scripts/formatPage.js',
	].forEach(function(script)
	{
		document.write('<script src="' + script + '"></script>');
	});
	
	
	[
		'header.css',
		'content.css',
		'navbar.css',
		'stylesheet.css',
	].forEach(function(sheet)
	{
		document.write('<link type="text/css" rel="stylesheet" href="stylesheets/' + sheet + '">');
	});
})()
