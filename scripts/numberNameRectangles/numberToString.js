(function($)
{
	$(document).ready(function()
	{
		var $groupNumberElement = $('div.number-to-string-div');
		$groupNumberElement.html('<input class="number-to-string-number" onkeydown="if (event.keyCode === 13) $(\'.number-to-string-button\').click();"/>' +
			'<button class="number-to-string-button" type="button" onclick="number_to_string_button_onclick()">Get Name</button>' +
			'<div class="number-to-string-result" style="margin:0em 2em;"><em>The group name will appear here</em></div>');
		
		var notLoaded = typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberName === 'undefined';
		if (notLoaded)
		{
			$('.number-to-string-result').html('<span style="color:red;font-weight:bold;">Error: Number-Name could not be loaded</span>');
		}
		
		number_to_string_button_onclick = notLoaded ? function(){} : function()
		{
			var value = $('.number-to-string-number').val();
			var result;
			if (value === "")
			{
				result = "<em>The number name will appear here</em>";
			}
			else
			{
				try
				{
					result = '<span style="word-wrap:break-word;">' + io.harriknox.NumberName.number_to_string(value) + '</span>';
				}
				catch (e)
				{
					result = '<span style="color:red;font-weight:bold;">Error: ';
					if (typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberName === 'undefined') result += 'Number-Name could not be loaded';
					else if (value.match(/[^\d\.\-]/)) result += 'Value contains non-numerals';
					else if (!value.match(/^-?\d+(\.\d+)?$/)) result += 'Value not in number format';
					else if (value.match(/^-/)) result += 'Value is negative';
					else if (value.match(/\./)) result += 'Value is not an integer';
					else result += e.message;
					result += '</span>';
				}
			}
			$('.number-to-string-result').html(result);
		};
	});
})(jQuery);