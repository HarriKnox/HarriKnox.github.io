(function($)
{
	Menu = function(name, menu)
	{
		this.name = name;
		this.menu = menu;
	};
	
	Button = function(name, href)
	{
		this.name = name;
		this.href = href;
	};
	
	navbar = [
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
		new Menu('Test',
		[
			new Menu('Inside Test',
			[
				new Button('Button1', ''),
				new Button('Button2', ''),
				new Menu('Super Inside Test',
				[
					new Button('Button-of-a-life-time', ''),
				]),
				new Button('Button3', ''),
				new Button('Button4', ''),
			]),
			new Menu('Other-Inside-Test',
			[
				new Button('Button1', ''),
				new Button('Button2', ''),
				new Button('Button3', ''),
				new Button('Button4', ''),
			]),
		]),
		new Button('Java', 'programming/java.html'),
	];
	
	var getRoot = function(menuName)
	{
		var hasMenu = function(menuList, menuName)
		{
			for (thing of menuList)
			{
				var thing = menuList[m];
				
				if (thing.constructor === Menu && (thing.name === menuName || hasMenu(thing.menu, menuName))) return true;
			}
			return false;
		}
		
		navbar.forEach(function(thing)
		{
			if (navthing.constructor === Menu && hasMenu(navthing.menu, menuName)) return navthing.name;
		});
		
		return null;
	};
	
	var CLOSED_MENU = '&#9654;';
	var OPEN_MENU = '&#9660;';
	var SLIDE = 100;
	
	/*var positionMenu = function(menuName)
	{
		var $menuButton = $('#' + menuName + '');
		var pos = $menuButton.position();
		$('#' + menuName + '-menu').css({
			//top : pos.top + $menuButton.outerHeight(true),
			left : pos.left + 2,
		});
	};*/
	
	var $document = $(document);
	
	$document.ready(function()
	{
		var pageTitle = $('#page-title').text();
		
		$('#content-container').before('<div id="navbar-container"></div>');
		
		var makeButton = function(name, href, inMenu)
		{
			var buttonType = 'navbar' + (inMenu ? '-menu' : '') + '-button';
			var selected = (name === pageTitle);
			
			var inside = '<div ' + (selected ? 'id="' + buttonType + '-selected" ' : '') + 'class="' + buttonType + '">' + name + '</div>';
			if (!selected) inside = '<a href="' + href + '">' + inside + '</a>';
			
			return inside;
		}
		
		var buildMenu = function(name, menu, inMenu)
		{
			var html = '<div id="' + fixMenuName(name) + '-menu" class="navbar-menu' + (inMenu ? '-menu' : '') + '">';
			
			menu.forEach(function(thing)
			{
				var name = thing.name;
				
				html += ((thing.constructor === Menu) ? makeMenuMenu(name, thing.menu) + buildMenu(name, thing.menu, true) : makeMenuButton(name, thing.href));
			});
			
			html += '</div>';
			return html
		};
		
		var fixMenuName = function(name) { return name.replace(/\s/g, '-'); };
		
		var makeArrow = function(name) { return '<span id="' + fixMenuName(name) + '-arrow" class="navbar-button-arrow">' + CLOSED_MENU + '</span>'; };
		var makeNavbarMenu = function(name) { return '<div id="' + fixMenuName(name) + '" class="navbar-button">' + makeArrow(name) + name + '</div>'; };
		var makeMenuMenu = function(name, menu) { return '<div id="' + fixMenuName(name) + '" class="navbar-menu-button">' + makeArrow(name) + name + '</div>'; };
		var makeNavbarButton = function(name, href) { return makeButton(name, href, false); };
		var makeMenuButton = function(name, href) { return makeButton(name, href, true); };
		
		/** Build navbar **/
		var $navbar = $('#navbar-container');
		var buttons = '';
		var menus = '';
		navbar.forEach(function(thing)
		{
			var name = thing.name;
			var isMenu = (thing.constructor === Menu)
			
			buttons += (isMenu ? makeNavbarMenu(name) : makeNavbarButton(name, thing.href));
			menus += (isMenu ? buildMenu(name, thing.menu, false) : '');
		});
		
		$navbar.append('<div id="navbar">' + buttons + '</div>');
		$navbar.append('<div id="navbar-menus">' + menus + '</div>');
		
		var navbarThickness = $('#' + navbar[0].name).outerHeight(true);
		$navbar.css('min-height', navbarThickness);
		$('#navbar').css('min-height', navbarThickness);
		
		hideMenus = function(family)
		{
			var all = family.find('*').andSelf();
			all.filter('.navbar-button-arrow').html(CLOSED_MENU);
			all.filter('.navbar-menu-menu').slideUp(SLIDE);
			all.filter('.navbar-menu').slideUp(SLIDE);
		}
		
		showMenus = function(hide)
		{
			return function()
			{
				var $esto = $(this);
				var menuName = $esto.attr('id');
				
				var $menu = $('#' + menuName + '-menu');
				var hidden = $menu.is(':hidden');
				
				hide($esto);
				
				if (hidden)
				{
					$menu.slideDown(SLIDE);
					$('#' + menuName + '-arrow').html(OPEN_MENU);
				}
			};
		};
		
		/** Click navbar menu buttons to toggle menus **/
		$('.navbar-button').click(showMenus(function($esto) { hideMenus($('#navbar-container')); }));
		$('.navbar-menu-button').click(showMenus(function($esto) { hideMenus($esto.parent().children()); }));
	});
	
	/** Click off of a navbar item to close all menus **/
	$document.click(function(e)
	{
		$target = $(e.target);
		var clazz = $target.attr('class');
		if (typeof clazz === 'undefined' || !clazz.match(/^navbar-/))
			hideMenus($('#navbar-container'));
	});
})(jQuery);
