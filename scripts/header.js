(function($)
{
	var pickRandom = function(things)
	{
		return things[Math.floor(Math.random() * things.length)];
	};
	
	var getSplash = function(pageTitle)
	{
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
			'Ask about the<br />color ' + (function(color) { return '<span style="color:' + color + ';">' + color + '</span>'; })(pickRandom(['Green', 'Goldenrod', 'Blue', 'Purple', 'Brown', 'Orange', 'Black',])),
			'Today is ' + ['January', 'February', 'March', 'April' , 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][Math.floor(today / 100) - 1] + " " + (today % 100),
		];
		
		if (now.getDay() === 3) splashes.push('It\'s Tuesday');
		
		var hour = now.getHours();
		if (hour >= 5 && hour <= 10) splashes.push('Good Morning');
		
		return pickRandom(splashes);
	};
	
	var getHome = function()
	{
		return location.href.match(/^file/) ? 'index.html' : '/';
	};
	
	var setSplashVisibility = function()
	{
		var $splash = $('#splash');
		if ($('#header-container').width() <= 480)
			$splash.hide();
		else
			$splash.show();
	};
	
	$(document).ready(function()
	{
		/** Get page title **/
		var pageTitle = $('#page-title').text();
		
		/** Write page title in <head> and as a header **/
		$('head').append('<title>Coder by Nature: ' + pageTitle + '</title>');
		
		var title = '<h1>I\'m a Programmer</h1>' +
			'<h3>not by trade but by nature</h3>';
		if (pageTitle !== 'Home') title = '<a href="' + getHome() + '" id="link-home" title="Home">' + title + '</a>';
		$('body').prepend(
			'<div id="header-container">' +
				'<div id="splash">' + getSplash(pageTitle) + '</div>' +
				'<div id="title">' + title + '</div>'+
			'</div>'
		);
		
		/** Position the splash in middle of header **/
		var $splash = $('#splash');
		var headerHeight = $('#header-container').height();
		var splashHeight = $splash.height();
		var top = (headerHeight - splashHeight) / 2;
		$splash.css('top', top);
		
		setSplashVisibility()
		
		$(window).resize(setSplashVisibility);
		
		/** Make splash change message when clicked **/
		/*var $splash = $('#splash');
		$splash.click(function()
		{
			$splash.html(getSplash(pageTitle));
		});*/
	});
})(jQuery);
