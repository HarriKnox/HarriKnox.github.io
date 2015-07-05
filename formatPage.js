var splashes = [
	"Now includes<br/>complementary splashes",
	"Work in progress",
	"Check out the navbar",
	"Made by Harrison Knox",
	"Made from scratch",
	"Made in California",
	"Call me Harri",
	"Powered by jQuery",
	"Powered by electrons",
	"Now available in English",
	'<span style="color:#FF7F50;">Coral</span> <span style="color:#DC143C;">Crimson</span> <span style="color:#FF8C00;">DarkOrange</span><br />' +
	'<span style="color:#FFA500;">Orange</span> <span style="color:#FF4500;">OrangeRed</span> <span style="color:#FF0000;">Red</span>',
	'<a href="https://github.com/HarriKnox">Fork me on GitHub</a>',
];

var getSplash = function()
{
	return splashes[Math.floor(Math.random() * splashes.length)];
};

var NavbarButton = function(name, href)
{
	this.name = name;
	this.href = href;
};

var navbarButtons = [
	new NavbarButton('Home', 'index.html'),
	new NavbarButton('Projects', 'projects.html'),
	new NavbarButton('Programming', 'languages.html'),
];

$('document').ready(function()
{
	var $content = $('#content-container');
	var pageTitle = $content.attr('page');
	
	$('head').append('<title>Coder by Nature: ' + pageTitle + '</title>')
			.append('<link type="text/css" rel="stylesheet" href="stylesheet.css" />');
	$content.prepend('<h1 style="margin:0px;">' + pageTitle + '</h1>');
	
	var $body = $('body')
	$body.prepend('<div id="navbar"></div>');
	$body.prepend(
		'<table id="header-container">' +
			'<td id="title">' +
				'<h1 style="margin-bottom:0px;">Hello friends and family</h1>' +
				'<h3 style="margin-top:0px;">My name is Harrison and I\'m a programmer, not by trade but by nature</h3>' +
			'</td>' +
			'<td id="splash">' +
				getSplash() + 
			'</td>' +
		'</table>'
	);
	
	$navbar = $('#navbar');
	for (var i = 0; i < navbarButtons.length; i++)
	{
		var current = navbarButtons[i];
		var selected = (current.name === pageTitle);
		
		var inside = '<div ' + (selected ? 'id="navbar-button-selected"' : '') + 'class="navbar-button">' + current.name + '</div>';
		if (!selected) inside = '<a href="' + current.href + '">' + inside + '</a>';
		
		$navbar.append(inside);
	}
});

