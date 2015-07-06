var splashes = [
	'Now includes<br/>complementary splashes',
	'Work in progress',
	'Check out the navbar',
	'Made by Harrison Knox',
	'Made from scratch',
	'Made in California',
	'Call me Harri',
	'Powered by jQuery',
	'Powered by electrons',
	'Now available in English',
	'<span style="color:#FF7F50;">Coral</span> <span style="color:#DC143C;">Crimson</span> <span style="color:#FF8C00;">DarkOrange</span><br />' +
	'<span style="color:#FFA500;">Orange</span> <span style="color:#FF4500;">OrangeRed</span> <span style="color:#FF0000;">Red</span>',
	'<a href="https://github.com/HarriKnox">Fork me on GitHub</a>',
	'Requires internet access',
	'Ad-free',
];

var getSplash = function()
{
	return splashes[Math.floor(Math.random() * splashes.length)];
};

var Menu = function(name, menu)
{
	this.name = name;
	this.menu = menu;
};

var Button = function(name, href)
{
	this.name = name;
	this.href = href;
};

var navbar = [
	new Menu('Projects',
	[
		new Button('Projects', 'projects.html'),
	]),
	new Menu('Programming',
	[
		new Button('Languages', 'languages.html'),
	]),
];

var positionMenu = function(menuName)
{
	var $menuButton = $('#' + menuName + '');
	var pos = $menuButton.position();
	$('#' + menuName + '-menu').css({
		top : pos.top + $menuButton.outerHeight(true),
		left : pos.left + 2,
	});
}

var hideAllMenus = function()
{
	$('.navbar-menu').hide();
};

var getHome = function()
{
	return location.href.match(/^file/) ? 'index.html' : '/';
};

var DOWN_ARROW = '&#9660;'
var UP_ARROW = '&#9650;'
//'<span style="font-size:0.8em;vertical-align:top;">' + DOWN_ARROW + '</span>'

$('document').ready(function()
{
	/// Get page title ///
	var $content = $('#content-container');
	var pageTitle = $content.attr('page');
	
	/// Write page title in <head> and as a header ///
	$('head').append('<title>Coder by Nature: ' + pageTitle + '</title>');
	$content.prepend('<h1 style="margin:0px;">' + pageTitle + '</h1>');
	
	/// Build header ///
	var $body = $('body')
	$body.prepend('<div id="navbar"></div>');
	var title = '<h1 style="margin-bottom:0px;">Hello friends and family</h1>' +
		'<h3 style="margin-top:0px;">My name is Harrison and I\'m a programmer, not by trade but by nature</h3>';
	if (pageTitle !== 'Home')
		title = '<a href="' + getHome() + '" id="link-home">' + title + '</a>';
	$body.prepend(
		'<table id="header-container">' +
			'<td id="title" class="squish">' + title +
			'</td><td></td>' +
			'<td id="splash" class="squish">' +
				getSplash() + 
			'</td>' +
		'</table>'
	);
	
	/// Build navbar ///
	$navbar = $('#navbar');
	for (var m = 0; m < navbar.length; m++)
	{
		var menuName = navbar[m].name;
		var menu = navbar[m].menu;
		
		$navbar.append('<div id="' + menuName + '" class="navbar-menu-button">' + menuName + '</div>');
		$navbar.append('<div id="' + menuName + '-menu" class="navbar-menu"></div>');
		
		var $menu = $('#' + menuName + '-menu');
		
		for (var b = 0; b < menu.length; b++)
		{
			var linkName = menu[b].name;
			var href = menu[b].href;
			
			var selected = (linkName === pageTitle);
			
			var inside = '<div ' + (selected ? 'id="navbar-button-selected" ' : '') +
				'class="navbar-button">' + linkName + '</div>';
			if (!selected) inside = '<a href="' + href + '">' + inside + '</a>';
			
			$menu.append(inside);
		}
	}
	
	/// Click navbar menu buttons to toggle menus ///
	$('.navbar-menu-button').click(function()
	{
		var menuName = $(this).attr('id');
		var $menu = $('#' + menuName + '-menu');
		var hidden = $menu.is(':hidden');
		positionMenu(menuName);
		hideAllMenus();
		$menu.toggle(hidden);
	});
	
	/// Make all external links open new tabs ///
	$('a').each(function()
	{
		$this = $(this);
		if ($this.attr('href').match(/^https?:\/\//))
			$this.attr('target', '_blank');
	});
});

$(document).click(function(e){
	$target = $(e.target);
	var clazz = $target.attr('class');
	if (typeof clazz === 'undefined' || !clazz.match(/^navbar-/))
		hideAllMenus();
});