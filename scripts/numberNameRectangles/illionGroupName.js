(function($)
{
	$(document).ready(function()
	{
		var $groupNumberElement = $('div.illion-group-name-div');
		$groupNumberElement.html('<input class="illion-group-number" onkeydown="if (event.keyCode === 13) $(\'.illion-group-number-button\').click();"/>' +
			'<button class="illion-group-number-button" type="button" onclick="illion_group_number_button_onclick()">Get Name</button>' +
			'<div class="illion-group-name-result" style="margin:0em 2em;"><em>The group name will appear here</em></div>');
		
		var notLoaded = typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberName === 'undefined';
		if (notLoaded)
		{
			$('.illion-group-name-result').html('<span style="color:red;font-weight:bold;">Error: Number-Name could not be loaded</span>');
		}
		
		illion_group_number_button_onclick = notLoaded ? function(){} : function()
		{
			var value = $('.illion-group-number').val();
			var result;
			if (value === "")
			{
				result = "<em>The group name will appear here</em>";
			}
			else
			{
				try
				{
					result = '<span style="word-wrap:break-word;">' + io.harriknox.NumberName.illion_group_name(value) + '</span>';
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
			$('.illion-group-name-result').html(result);
		};
	});
})(jQuery);