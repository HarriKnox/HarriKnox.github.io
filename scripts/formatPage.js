(function($)
{
	if (typeof $ !== 'undefined')
	{
		var $document = $(document);
		var $window = $(window);
		
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
			
			/** Make all external links open new tabs **/
			$('a').each(function()
			{
				$this = $(this);
				if ($this.attr('href').match(/^https?:\/\//))
					$this.attr('target', '_blank');
			});
			
			console.log('Ignore these net::ERR_FILE_NOT_FOUND messages. They\'re caused by the page trying to load before the <base> tag as an effect.');
			
			/** Show content when done **/
			$content.css('display', 'block');
			
			/** Make all pre blocks scroll horizontally when the content is too wide for the window **/
			setPreMaxWidth();
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
