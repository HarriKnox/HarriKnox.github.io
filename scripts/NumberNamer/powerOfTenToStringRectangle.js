(function($)
{
	$(document).ready(function()
	{
		$('div.power-of-ten-div').html('<input class="power-of-ten-number" onkeydown="if (event.keyCode === 13) $(\'.power-of-ten-button\').click();"/>' +
			'<button class="power-of-ten-button" type="button" onclick="power_of_ten_button_onclick()">Submit</button>' +
			'<div class="power-of-ten-result" style="margin:0em 2em;"><em>The number\'s name will appear here</em></div>');
		
		var notLoaded = typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberNamer === 'undefined';
		if (notLoaded)
		{
			$('.power-of-ten-result').html('<span style="color:red;font-weight:bold;">Error: Number-Namer could not be loaded</span>');
		}
		
		power_of_ten_button_onclick = notLoaded ? function(){} : function()
		{
			var value = $('.power-of-ten-number').val();
			var result;
			if (value === "")
			{
				result = "<em>The number's name will appear here</em>";
			}
			else
			{
				try
				{
					result = '<span style="word-wrap:break-word;">' + io.harriknox.NumberNamer.power_of_10_to_string(value) + '</span>';
				}
				catch (e)
				{
					result = '<span style="color:red;font-weight:bold;">Error: ';
					if (typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberNamer === 'undefined') result += 'Number-Namer could not be loaded';
					else if (value.match(/[^\d\.\-]/)) result += 'Value contains non-numerals';
					else if (!value.match(/^-?\d+(\.\d+)?$/)) result += 'Value not in number format';
					else if (value.match(/^-/)) result += 'Value is negative';
					else if (value.match(/\./)) result += 'Value is not an integer';
					else result += e.message;
					result += '</span>';
				}
			}
			$('.power-of-ten-result').html(result);
		};
	});
})(jQuery);