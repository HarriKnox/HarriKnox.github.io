(function()
{
	var notLoaded = typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberNamer === 'undefined';
	
	var PLACEHOLDER = '<em>The number\'s name will appear here</em>';
	
	document.write('<input class="power-of-ten-input" onkeydown="if (event.keyCode === 13) $(\'.power-of-ten-button\').click();"/><button class="power-of-ten-button" type="button" onclick="power_of_ten_button_onclick()">Submit</button><div class="power-of-ten-result" style="margin:0em 2em;">' + (notLoaded ? '<span style="color:red;font-weight:bold;">Error: Number-Namer could not be loaded</span>' : PLACEHOLDER) + '</div>');
	
	power_of_ten_button_onclick = notLoaded ? function(){} : function()
	{
		var value = document.getElementsByClassName('power-of-ten-input')[0].value;
		var result;
		if (value === '')
		{
			result = PLACEHOLDER;
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
				if (value.match(/[^\d\.\-]/)) result += 'Value contains non-numerals';
				else if (!value.match(/^-?\d+(\.\d+)?$/)) result += 'Value not in number format';
				else if (value.match(/^-/)) result += 'Value is negative';
				else if (value.match(/\./)) result += 'Value is not an integer';
				else result += e.message;
				result += '</span>';
			}
		}
		document.getElementsByClassName('power-of-ten-result')[0].innerHTML = result;
	};
})();
