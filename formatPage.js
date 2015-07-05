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
];

var getSplash = function()
{
	return splashes[Math.floor(Math.random() * splashes.length)];
};

var Menu = function(name, list)
{
	this.name = name;
	this.list = list;
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

$('document').ready(function()
{
	/// Get page title ///
	var $content = $('#content-container');
	var pageTitle = $content.attr('page');
	
	/// Write page title ///
	$('head').append('<title>Coder by Nature: ' + pageTitle + '</title>');
	$content.prepend('<h1 style="margin:0px;">' + pageTitle + '</h1>');
	
	/// Build header ///
	var $body = $('body')
	$body.prepend('<div id="navbar"></div>');
	$body.prepend(
		'<table id="header-container">' +
			'<td id="title">' +
				'<a href="index.html" id="link-home">' +
					'<h1 style="margin-bottom:0px;">Hello friends and family</h1>' +
					'<h3 style="margin-top:0px;">My name is Harrison and I\'m a programmer, not by trade but by nature</h3>' +
				'</a>' +
			'</td><td></td>' +
			'<td id="splash">' +
				getSplash() + 
			'</td>' +
		'</table>'
	);
	
	/// Build navbar ///
	$navbar = $('#navbar');
	for (var j = 0; j < navbar.length; j++)
	{
		for (var i = 0; i < navbar[j].list.length; i++)
		{
			var current = navbar[j].list[i];
			var selected = (current.name === pageTitle);
			
			var inside = '<div ' + (selected ? 'id="navbar-button-selected"' : '') + 'class="navbar-button">' + current.name + '</div>';
			if (!selected) inside = '<a href="' + current.href + '">' + inside + '</a>';
			
			$navbar.append(inside);
		}
	}
	
	/// Make all external links open new tabs ///
	$('a').each(function()
	{
		$this = $(this);
		if ($this.attr('href').match(/^https?:\/\//))
			$this.attr('target', '_blank');
	});
});

