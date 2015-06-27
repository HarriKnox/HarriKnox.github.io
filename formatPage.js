var NavbarButton = function(name, href)
{
	this.name = name;
	this.href = href;
};

var navbarButtons = [
	new NavbarButton("Home", "index.html"),
	new NavbarButton("Projects", "projects.html"),
];

var pageWidth = 1000;
var paddingAmount = 20;

$('document').ready(function()
{
	var pageTitle = $('#pageName').html();
	
	$('head').append('<title>Coder by Nature: ' + pageTitle + '</title><link type="text/css" rel="stylesheet" href="stylesheet.css" />');
	
	$content = $('#content-container');
	$content.css({
		width : pageWidth,
		padding : paddingAmount,
	});
	$content.prepend('<h2 style="margin:0px;">' + pageTitle + '</h2>');
	
	$('body').prepend('<div id="header-container"><div id="title"><h1 style="margin-bottom:0px;">Hello friends and family</h1><h3 style="margin-top:0px;">My name is Harrison and I\'m a programmer, not by trade but by nature</h3></div><div id="navbar"></div></div>');
	$('#header-container').width(pageWidth + (2 * paddingAmount) + 10);
	
	$navbar = $('#navbar');
	for (var i = 0; i < navbarButtons.length; i++)
	{
		var selected = (navbarButtons[i].name === pageTitle);
		
		var inside = '<div ' + (selected ? 'id="navbar-button-selected"' : '') + 'class="navbar-button">' + navbarButtons[i].name + '</div>';
		if (!selected) inside = '<a href="' + navbarButtons[i].href + '">' + inside + '</a>';
		
		$navbar.append(inside);
	}
});

