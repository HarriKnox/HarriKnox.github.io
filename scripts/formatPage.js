(function($)
{
	var pickRandom = function(things)
	{
		return things[Math.floor(Math.random() * things.length)];
	};
	
	var getSplash = function(pageTitle)
	{ return 'Get well soon, Courtney!';
		var now = new Date();
		var today = (now.getMonth() + 1) * 100 + now.getDate();
		
		if (today === 111) return 'Happy Birthday Harri!';
		if (today === 1008) return 'Happy Birthday Courtney!';
		if (today === 1016) return 'Happy Anniversary Courtney!';
		if (today === 126) return '<div style="transform:rotate(180deg);">Happy Australia Day!</div>';
		if (today >= 1200) return 'Happy &lt;insert holiday here&gt;!';
		if (today === 101) return 'Happy New Year!';
		if (today === 704) return '<span style="color:red;">Happy</span> <span style="color:white;text-shadow:0px -1px 1px black,1px -1px 1px black,1px 1px 1px black,-1px 0px 1px black,0px 1px 1px black,1px 0px 1px black,-1px -1px 1px black,-1px 1px 1px black;">4th of</span> <span style="color:blue">July!</span>';
		if (today === 1031) return '<span style="color:orange;">BOO!</span>';
		
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
			'<span style="color:coral;">Coral</span> <span style="color:crimson;">Crimson</span> <span style="color:darkorange;">DarkOrange</span><br />' +
			'<span style="color:orange;">Orange</span> <span style="color:orangered;">OrangeRed</span> <span style="color:red;">Red</span>',
			'Fork me on <a href="https://github.com/HarriKnox">GitHub</a>',
			'Requires internet access',
			'Ad-free',
			'Open source',
			'Not lounging around',
			'Contains long-winded essays',
			'Don\'t deny it,<br />you were reading this',
			'Ask about the color ' + (function(color) { return '<span style="color:' + color + ';">' + color + '</span>'; })(pickRandom(['Green', 'Goldenrod', 'Blue', 'Purple', 'Brown', 'Orange', 'Black',])),
			'Today is ' + ['January', 'February', 'March', 'April' , 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][Math.floor(today / 100) - 1] + " " + (today % 100),
		];
		
		if (now.getDay() === 3) splashes.push('It\'s Tuesday');
		
		var hour = now.getHours();
		if (hour >= 5 && hour <= 10) splashes.push('Good Morning');
		
		return pickRandom(splashes);
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
			new Button('Projects', 'projects/projects.html'),
			new Button('CPE 102 Project', 'projects/cpe102project.html'),
		]),
		new Menu('Programming',
		[
			new Button('Languages', 'programming/languages.html'),
			new Button('Lua', 'programming/lua.html'),
			new Button('Ruby', 'programming/ruby.html'),
			new Button('Java', 'programming/java.html'),
		]),
	];
	
	var getHome = function()
	{
		return location.href.match(/^file/) ? 'index.html' : '/';
	};
	
	var DOWN_ARROW = '&#9660;'
	var UP_ARROW = '&#9650;'
	var LEFT_ARROW = '&#9664;'
	var LEFT_ARROW = '&#9654;'
	
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
			$pre = $('pre');
			var padding = parseInt($pre.css('padding-left')) + parseInt($pre.css('padding-right'));
			var width = $('#content-container').width();
			$pre.css('max-width', width - padding);
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
			$navbar.css('min-height', navbarThickness);
			$('#navbar-container').css('min-height', navbarThickness);
			
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
		
		console.log('Ignore these net::ERR_FILE_NOT_FOUND messages. They\'re caused by the page trying to load before the <base> tag as an effect.');
	}
	else
	{
		document.writeln('jQuery was not found and is required to render this page');
	}
})(jQuery);
