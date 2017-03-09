(function($)
{
   var Menu = function(name, menu)
   {
      this.name = name;
      this.menu = menu;
   };
   
   var Button = function(href)
   {
      this.href = href;
   };
   
   var pages = {
      'index.html'                       : 'Home',
      ''                                 : 'Home',
      'projects/projects.html'           : 'Projects',
      'projects/cpe102project.html'      : 'CPE 102 Project',
      'projects/bignumbers.html'         : 'Big Numbers',
      'projects/numbernamer.html'        : 'Number Namer',
      'projects/ttrscorecalculator.html' : 'Ticket to Ride Score Calculator',
      'programming/languages.html'       : 'Languages',
      'programming/clojure.html'         : 'Clojure',
      'programming/lua.html'             : 'Lua',
      'programming/javascript.html'      : 'JavaScript',
      'programming/java.html'            : 'Java',
      'programming/ruby.html'            : 'Ruby',
      
      'https://github.com/HarriKnox' : 'GitHub',
      'http://cchu1008.github.io'    : 'Bytes and Bits',
   };
   
   var navbar = [
      new Menu('Projects',
      [
         new Button('projects/projects.html'),
         new Button('projects/cpe102project.html'),
         new Button('projects/bignumbers.html'),
         new Button('projects/numbernamer.html'),
         new Button('projects/ttrscorecalculator.html'),
      ]),
      new Menu('Programming',
      [
         new Button('programming/languages.html'),
      //    new Button('programming/clojure.html'),
         new Button('programming/lua.html'),
         new Button('programming/javascript.html'),
         new Button('programming/java.html'),
         new Button('programming/ruby.html'),
      ]),
      new Button('https://github.com/HarriKnox'),
      new Button('http://cchu1008.github.io'),
   ];
   
   var CLOSED_MENU_ARROW = '&#9656;';
   var OPEN_MENU_ARROW = '&#9662;';
   var SLIDE = 'fast';
   
   /*var positionMenu = function(menuName)
   {
      var $menuButton = $('.' + menuName + '');
      var pos = $menuButton.position();
      $('.' + menuName + '-menu').css({
         //top : pos.top + $menuButton.outerHeight(true),
         left : pos.left + 2,
      });
   };*/
   
   var $document = $(document);
   
   $document.ready(function()
   {
      /*
      var base = $('base').attr('href') || '';
      var matches = base.match(/\.\./g) || [];
      var reps = matches.length;
      
      var patt = ''
      for (var i = 0; i < reps; i++) patt += '[^\/]+\/';
      patt += '[^\/]+$';
      
      var urlSansQuery = local.href.match(/^[^?]+/);
      var urlMatch = urlSansQuery[0].match(new RegExp(patt)) || [''];
      var pageUrl = urlMatch[0];
      */
      
      var pageUrl = (location.href.match(/^[^?]+/)[0].match(new RegExp('[^\/]+\/'.repeat((($('base').attr('href') || '').match(/\.\./g) || []).length) + '[^\/?]+$')) || [''])[0];
      
      var $content = $('.content-container')
      
      $content.before('<div class="navbar-container"></div>');
      
      var makeButton = function(name, href, inMenu)
      {
         var buttonType = 'navbar' + (inMenu ? '-menu' : '') + '-button';
         var selected = (href === pageUrl);
         
         var inside = '<div class="' + buttonType + ' ' + (selected ? buttonType + '-selected ' : '') + fixMenuName(name) + '">' + name + '</div>';
         if (!selected) inside = '<a href="' + href + '">' + inside + '</a>';
         
         return inside;
      };
      
      $content.prepend('<h1 class="page-title">' + pages[pageUrl] + '</h1>');
      
      var buildMenu = function(name, menu, inMenu)
      {
         var html = '<div class="navbar-menu' + (inMenu ? '-menu' : '') + ' ' + fixMenuName(name) + '-menu">';
         
         menu.forEach(function(thing)
         {
            var name = getName(thing);
            
            html += ((thing.constructor === Menu) ? makeMenuMenu(name, thing.menu) + buildMenu(name, thing.menu, true) : makeMenuButton(name, thing.href));
         });
         
         html += '</div>';
         return html
      };
      
      var getName = function(thing) { return thing.constructor === Menu ? thing.name : pages[thing.href]; }
      var fixMenuName = function(name) { return name.replace(/\s/g, '-'); };
      
      var makeArrow = function(name) { return '<span class="navbar-button-arrow ' + fixMenuName(name) + '-arrow">' + CLOSED_MENU_ARROW + '</span>'; };
      var makeNavbarMenu = function(name) { return '<div class="navbar-button ' + fixMenuName(name) + '">' + makeArrow(name) + name + '</div>'; };
      var makeMenuMenu = function(name, menu) { return '<div class="navbar-menu-button ' + fixMenuName(name) + '">' + makeArrow(name) + name + '</div>'; };
      var makeNavbarButton = function(name, href) { return makeButton(name, href, false); };
      var makeMenuButton = function(name, href) { return makeButton(name, href, true); };
      
      /** Build navbar **/
      var $navbar = $('.navbar-container');
      var buttons = '';
      var menus = '';
      navbar.forEach(function(thing)
      {
         var isMenu = (thing.constructor === Menu)
         var name = getName(thing);
         
         buttons += (isMenu ? makeNavbarMenu(name) : makeNavbarButton(name, thing.href));
         menus += (isMenu ? buildMenu(name, thing.menu, false) : '');
      });
      
      $navbar.append('<div class="navbar">' + buttons + '</div>');
      $navbar.append('<div class="navbar-menus">' + menus + '</div>');
      
      var navbarThickness = Math.max.apply(null, navbar.map(function(thing) { return $('.' + getName(thing)).outerHeight(); }));
      $('.navbar-button').outerHeight(navbarThickness);
      
      hideMenus = function(family)
      {
         var all = family.find('*').andSelf();
         all.filter('.navbar-button-arrow').html(CLOSED_MENU_ARROW);
         all.filter('.navbar-menu-menu').slideUp(SLIDE);
         all.filter('.navbar-menu').slideUp(SLIDE);
      };
      
      showMenus = function(hide)
      {
         return function()
         {
            var $esto = $(this);
            var menuName = $esto.attr('class').toString().split(/\s+/)[1];
            
            var $menu = $('.' + menuName + '-menu');
            var hidden = $menu.is(':hidden');
            
            hide($esto);
            
            if (hidden)
            {
               $menu.slideDown(SLIDE);
               $('.' + menuName + '-arrow').html(OPEN_MENU_ARROW);
            }
         };
      };
      
      /** Click navbar menu buttons to toggle menus **/
      $('.navbar-button').click(showMenus(function($esto) { hideMenus($('.navbar-container')); }));
      $('.navbar-menu-button').click(showMenus(function($esto) { hideMenus($esto.parent().children()); }));
   });
   
   /** Click off of a navbar item to close all menus **/
   $document.click(function(e)
   {
      var clazz = $(e.target).attr('class');
      if (typeof clazz === 'undefined' || !clazz.match(/^navbar-/))
         hideMenus($('.navbar-container'));
   });
   
   /** Makes navbar stick to top of screen when scrolling past it **/
   /*$window.scroll(function()
   {
      var $navbar = $('.navbar');
      if ($window.scrollTop() > $('.header-container').height())
         $navbar.css('position', 'fixed');
      else
         $navbar.css('position', 'relative');
   });*/
})(jQuery);
