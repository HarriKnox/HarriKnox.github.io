(function($)
{
	$(document).ready(function()
	{
		var $groupNumberElement = $('script[src="scripts/numberNameRectangles.js"]');
		$groupNumberElement.after('<input class="group-number" onkeydown="if (event.keyCode === 13) $(\'.group-number-button\').click();"/>' +
			'<button class="group-number-button" type="button" onclick="group_number_button_onclick()">Get Name</button>' +
			'<div style="word-break:break-all;" class="group-number-result"><em>The group name will appear here</em></div>');
		
		var notLoaded = typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberName === 'undefined';
		if (notLoaded)
		{
			$('.group-number-result').html('<span style="color:red;font-weight:bold;">Error: Number-Name could not be loaded</span>');
		}
		
		group_number_button_onclick = notLoaded ? function(){} : function()
		{
			var value = $('.group-number').val();
			var result;
			if (value === "")
			{
				result = "<em>The group name will appear here</em>";
			}
			else
			{
				try
				{
					result = io.harriknox.NumberName.illion_group_name(value);
				}
				catch (e)
				{
					result = '<span style="color:red;font-weight:bold;">Error: ';
					if (typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberName === 'undefined') result += 'Number-Name could not be loaded';
					else if (value.match(/[^\d\.\-]/)) result += 'Value contains non-numerals';
					else if (!value.match(/^-?\d+(\.\d+)?$/)) result += 'Value not in number format';
					else if (value.match(/^-/) || value.match(/^0+$/)) result += 'Value is not positive';
					else if (value.match(/\./)) result += 'Value is not an integer';
					else result += e.message;
					result += '</span>';
				}
			}
			$('.group-number-result').html(result);
		};
	});
})(jQuery);
