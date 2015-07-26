(function($)
{
	var getSplash = function(pageTitle)
	{
		var today = (function()
		{
			var now = new Date();
			return (now.getMonth() + 1) * 100 + now.getDate();
		})();
		if (today === 111) return 'Happy Birthday Harri!';
		if (today === 1008) return 'Happy Birthday Courtney!';
		if (today === 1016) return 'Happy Anniversary Courtney!';
		if (today === 126) return '<div style="transform:rotate(180deg);">Happy Australia Day!</div>';
		if (today >= 1200) return 'Happy &lt;insert holiday here&gt;!';
		if (today === 101) return 'Happy New Year!';
		if (today === 704) return '<span style="color:#ff0000;">Happy</span> <span style="color:#ffffff;text-shadow:0px -1px 1px black,1px -1px 1px black,1px 1px 1px black,-1px 0px 1px black,0px 1px 1px black,1px 0px 1px black,-1px -1px 1px black,-1px 1px 1px black;">4th of</span> <span style="color:#0000ff">July!</span>';
		if (today === 1031) return '<span style="color:#ffa500;">BOO!</span>';
		var splashes = [
			'Now includes<br/>complementary splashes',
			'Now mobile friendly',
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
			'Fork me on <a href="https://github.com/HarriKnox">GitHub</a>',
			'Requires internet access',
			'Ad-free',
			'Open source',
			'Not lounging around',
		];
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
			new Button('CPE 102 Project', 'cpe102project.html'),
		]),
		new Menu('Programming',
		[
			new Button('Languages', 'languages.html'),
			new Button('Lua', 'lua.html'),
			new Button('Ruby', 'ruby.html'),
		]),
	];
	
	var getHome = function()
	{
		return location.href.match(/^file/) ? 'index.html' : '/';
	};
	
	var DOWN_ARROW = '&#9660;'
	var UP_ARROW = '&#9650;'
	
	if (typeof $ !== 'undefined')
	{
		var $document = $(document);
		var $window = $(window);
		
		var hideAllMenus = function()
		{
			$('.navbar-button-arrow').each(function()
			{
				$(this).html(DOWN_ARROW);
			});
			$('.navbar-menu').each(function()
			{
				$(this).slideUp(100);
			});
		};
		
		var positionMenu = function(menuName)
		{
			var $menuButton = $('#' + menuName + '');
			var pos = $menuButton.position();
			$('#' + menuName + '-menu').css({
				//top : pos.top + $menuButton.outerHeight(true),
				left : pos.left + 2,
			});
		};
		
		var setPreMaxWidth = function()
		{
			$('pre').css('max-width', $('#content-container').width());
		};
		
		$document.ready(function()
		{
			/** Get page title **/
			var $content = $('#content-container');
			var pageTitle = $('#page-title').text();
			
			/** Format content to group code blocks to surrounding punctuation marks **/
			var GROUPED = '<span class="grouped">$1</span>';
			var innards = $content.html();
			innards = innards.replace(/(([^\w\s>]|&.+?;)+<code>([^<]|<(?!\/code>))*?<\/code>([^<\w\s]|&.+?;)+)/g, GROUPED)
					.replace(/(([^\w\s>]|&.+?;)+<code>([^<]|<(?!\/code>))*?<\/code>)/g, GROUPED)
					.replace(/(<code>([^<]|<(?!\/code>))*?<\/code>([^<\w\s]|&.+?;)+)/g, GROUPED);
			$content.html(innards);
			
			/** Write page title in <head> and as a header **/
			$('head').append('<title>Coder by Nature: ' + pageTitle + '</title>');
			
			/** Build header **/
			var $body = $('body')
			$body.prepend('<div id="navbar-container"><div id="navbar"></div></div>');
			var title = '<h1 style="margin-bottom:0px;">Hello friends and family</h1>' +
				'<h3 style="margin-top:0px;">My name is Harrison and I\'m a programmer, not by trade but by nature</h3>';
			if (pageTitle !== 'Home')
				title = '<a href="' + getHome() + '" id="link-home" title="Home">' + title + '</a>';
			$body.prepend(
				'<table id="header-container">' +
					'<td id="title">' + title +
					'</td><td></td>' +
					'<td id="splash">' +
						getSplash(pageTitle) + 
					'</td>' +
				'</table>'
			);
			
			/** Function to get HTML code for button **/
			var makeButtonHTML = function(button, inMenu)
			{
				var name = button.name;
				var href = button.href;
				var clazz = 'navbar-' + (inMenu ? 'menu-' : '') + 'button';
				
				var selected = (name === pageTitle);
				
				var inside = '<div ' + (selected ? 'id="' + clazz + '-selected" ' : '') +
					'class="' + clazz + '">' + name + '</div>';
				if (!selected) inside = '<a href="' + href + '">' + inside + '</a>';
				
				return inside;
			};
			
			/** Build navbar **/
			$navbar = $('#navbar');
			for (var m = 0; m < navbar.length; m++)
			{
				var thing = navbar[m];
				
				if (thing.constructor === Menu)
				{
					var menuName = thing.name;
					var menu = thing.menu;
					
					$navbar.append(
						'<div id="' + menuName + '" class="navbar-button">' +
							'<span id="' + menuName + '-arrow" class="navbar-button-arrow">' + DOWN_ARROW + '</span>' +
							menuName +
						'</div>'
					);
					
					$navbar.append('<div id="' + menuName + '-menu" class="navbar-menu"></div>');
					
					var $menu = $('#' + menuName + '-menu');
					
					for (var b = 0; b < menu.length; b++)
					{
						$menu.append(makeButtonHTML(menu[b], true));
					}
				}
				else if (thing.constructor === Button)
				{
					$navbar.append(makeButtonHTML(thing, false));
				}
			}
			var navbarThickness = $('#' + navbar[0].name).outerHeight(true);
			$navbar.height(navbarThickness);
			$('#navbar-container').height(navbarThickness);
			
			/** Click navbar menu buttons to toggle menus **/
			$('.navbar-button').click(function()
			{
				var menuName = $(this).attr('id');
				
				var $menu = $('#' + menuName + '-menu');
				var hidden = $menu.is(':hidden');
				positionMenu(menuName);
				hideAllMenus();
				if (hidden) $menu.slideDown(100);
				else $menu.slideUp(100);
				
				var $arrow = $('#' + menuName + '-arrow');
				if (hidden) $arrow.html(UP_ARROW);
				else $arrow.html(DOWN_ARROW);
			});
			
			/** Make all external links open new tabs **/
			$('a').each(function()
			{
				$this = $(this);
				if ($this.attr('href').match(/^https?:\/\//))
					$this.attr('target', '_blank');
			});
			
			/** Make splash change message when clicked **/
			/*var $splash = $('#splash');
			$splash.click(function()
			{
				$splash.html(getSplash(pageTitle));
			});*/
			
			/** Show content when done **/
			$content.css('display', 'block');
			
			/** Make all pre blocks scroll horizontally when the content is too wide for the window **/
			setPreMaxWidth();
		});
		
		/** Click off of a navbar item to close all menus **/
		$document.click(function(e)
		{
			$target = $(e.target);
			var clazz = $target.attr('class');
			if (typeof clazz === 'undefined' || !clazz.match(/^navbar-/))
				hideAllMenus();
		});
		
		/** Adjust sizes of pre blocks when the window is resized **/
		$window.resize(setPreMaxWidth);
		
		/** Makes navbar stick to top of screen when scrolling past it **/
		/*$window.scroll(function()
		{
			var $navbar = $('#navbar');
			if ($window.scrollTop() > $('#header-container').height())
				$navbar.css('position', 'fixed');
			else
				$navbar.css('position', 'relative');
		});*/
	}
	else
	{
		document.writeln('jQuery was not found and is required to render this page');
	}
})(jQuery);
