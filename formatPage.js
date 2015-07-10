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
		if (today === 126) return '<div style="transform:rotate(180deg);">Happy Australia Day!</div>';
		if (today >= 1200) return 'Happy &lt;insert holiday here&gt;!';
		if (today === 1031) return '<span style="color:#ffa500;">BOO!</span>';
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
			'Open source',
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
	//'<span style="font-size:0.8em;vertical-align:top;">' + DOWN_ARROW + '</span>'

	if (typeof $ !== 'undefined')
	{
		var $document = $(document);
		var $window = $(window);
		
		var hideAllMenus = function()
		{
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
				top : pos.top + $menuButton.outerHeight(true),
				left : pos.left + 2,
			});
		};
		
		$document.ready(function()
		{
			/// Get page title ///
			var $content = $('#content-container');
			var pageTitle = $content.attr('page');
			
			/// Write page title in <head> and as a header ///
			$('head').append('<title>Coder by Nature: ' + pageTitle + '</title>');
			
			/// Build header ///
			var $body = $('body')
			$body.prepend('<div id="navbar-container"><div id="navbar"></div></div>');
			var title = '<h1 style="margin-bottom:0px;">Hello friends and family</h1>' +
				'<h3 style="margin-top:0px;">My name is Harrison and I\'m a programmer, not by trade but by nature</h3>';
			if (pageTitle !== 'Home')
				title = '<a href="' + getHome() + '" id="link-home" title="Home">' + title + '</a>';
			$body.prepend(
				'<table id="header-container">' +
					'<td id="title" class="squish">' + title +
					'</td><td></td>' +
					'<td id="splash" class="squish">' +
						getSplash(pageTitle) + 
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
			var navbarThickness = $('#' + navbar[0].name).outerHeight(true);
			$navbar.height(navbarThickness);
			$('#navbar-container').height(navbarThickness);
			
			/// Click navbar menu buttons to toggle menus ///
			$('.navbar-menu-button').click(function()
			{
				var menuName = $(this).attr('id');
				var $menu = $('#' + menuName + '-menu');
				var hidden = $menu.is(':hidden');
				positionMenu(menuName);
				hideAllMenus();
				if (hidden) $menu.slideDown(100);
				else $menu.slideUp(100);
			});
			
			/// Make all external links open new tabs ///
			$('a').each(function()
			{
				$this = $(this);
				if ($this.attr('href').match(/^https?:\/\//))
					$this.attr('target', '_blank');
			});
			
			$('#loading').hide();
			$content.css('display', 'block');
		});

		$document.click(function(e){
			$target = $(e.target);
			var clazz = $target.attr('class');
			if (typeof clazz === 'undefined' || !clazz.match(/^navbar-/))
				hideAllMenus();
		});
		
		$window.scroll(function()
		{
			var $navbar = $('#navbar');
			if ($window.scrollTop() > $('#header-container').height())
				$navbar.css('position', 'fixed');
			else
				$navbar.css('position', 'relative');
		});
	}
})(jQuery);
