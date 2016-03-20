(function($)
{
	if (typeof $ === 'undefined')
	{
		document.writeln('jQuery was not found and is required to render this page');
		return;
	}
	
	var $document = $(document);
	var $window = $(window);
	
	/** Sets the max-width for <pre> blocks so they aren't wider than the content-container **/
	var setPreMaxWidth = function()
	{
		var $pre = $('pre');
		var padding = parseInt($pre.css('padding-left')) + parseInt($pre.css('padding-right'));
		var width = $('.content-container').width();
		$pre.css('max-width', width - padding);
	};
	
	$document.ready(function()
	{
		var $content = $('.content-container');
		
		/** Format content to group code blocks to surrounding punctuation marks **/
		var GROUPED = '<span class="grouped">$1</span>';
		var innards = $content.html();
		innards = innards.replace(                      /((?:[^\w\s>]|&.+?;)+<code>(?:[^<]|<(?!\/code>))*?<\/code>)/g, GROUPED)
		                 .replace(                                         /(<code>(?:[^<]|<(?!\/code>))*?<\/code>(?:[^<\w\s]|&.+?;)+)/g, GROUPED)
		                 .replace(/<span class="grouped">((?:[^\w\s>]|&.+?;)+<code>(?:[^<]|<(?!\/code>))*?<\/code>)<\/span>([^<\w\s]|&.+?;)+/g, GROUPED.replace(/\$1/, '$$1$$2'));
		$content.html(innards);
		
		/** Make all external links open new tabs **/
		$('a').each(function()
		{
			var $this = $(this);
			if ($this.attr('href').match(/^https?:\/\//))
				$this.attr('target', '_blank');
		});
		
		/** Show content when done **/
		$('noscript').remove();
		$content.css('display', 'block');
		
		/** Make all pre blocks scroll horizontally when the content is too wide for the window **/
		setPreMaxWidth();
		
		/** Adjust sizes of pre blocks when the window is resized **/
		$window.resize(setPreMaxWidth);
	});
})(jQuery);
