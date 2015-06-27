var NavbarButton = function(name, target)
{
	this.name = name;
	this.target = target;
};

var navbarButtons = [
	new NavbarButton("Home", "index.html"),
	new NavbarButton("Projects", "projects.html"),
];

var pageWidth = 1000;
var paddingAmount = 20;

$('document').ready(function()
{
	var pageName = window.location.href;
	$('head').append('<title>Coder by Nature: ' + pageName + '</title><link type="text/css" rel="stylesheet" href="stylesheet.css" />');
	
	$content = $('#content-container');
	$content.css({
		width : pageWidth,
		padding : paddingAmount,
	});
	$content.prepend('<h2>' + pageName + '</h2>');
	
	$('body').prepend('<div id="header-container"><div id="title"><h1 style="margin-bottom:0px;">Hello friends and family</h1><h3 style="margin-top:0px;">My name is Harrison and I\'m a programmer, not by trade but by nature</h3></div><div id="navbar"></div></div>');
	$('#header-container').width(pageWidth + (2 * paddingAmount) + 10);
	$navbar = $('#navbar');
	for (var i = 0; i < navbarButtons.length; i++)
	{
		$navbar.append('<div class="navbar-button">' + navbarButtons[i].name + '</div>');
	}
});