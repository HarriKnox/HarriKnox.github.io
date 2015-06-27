var NavbarButton = function(name, target)
{
	this.name = name;
	this.target = target;
};

var navbar = [
	new NavbarButton("Home", "index.html"),
	new NavbarButton("Projects", "projects.html"),
];

var pageWidth = 1000;
var paddingAmount = 20;

$(document).ready(function()
{
	$('#content-container').css({"width" : pageWidth, "padding" : paddingAmount});
	$('#header-container').width(pageWidth + (2 * paddingAmount) + 10);
	$('#title').html('<h1 style="margin-bottom:0px;">Hello friends and family!</h1><h3 style="margin-top:0px;">My name is Harrison and I\'m a programmer, not by trade but by nature.</h3>');
	$('#navbar');
});