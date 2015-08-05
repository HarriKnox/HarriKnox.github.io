(function($)
{
	if (typeof $ !== 'undefined')
	{
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
		
		var DOWN_ARROW = '&#9660;'
		var UP_ARROW = '&#9650;'
		var LEFT_ARROW = '&#9664;'
		var LEFT_ARROW = '&#9654;'
		
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
		
		var $document = $(document);
		
		$document.ready(function()
		{
			var $content = $('#content-container');
			var pageTitle = $('#page-title').text();
			
			$content.before('<div id="navbar-container"><div id="navbar"></div></div>');
			
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
		});
		
		/** Click off of a navbar item to close all menus **/
		$document.click(function(e)
		{
			$target = $(e.target);
			var clazz = $target.attr('class');
			if (typeof clazz === 'undefined' || !clazz.match(/^navbar-/))
				hideAllMenus();
		});
	}
})(jQuery);
