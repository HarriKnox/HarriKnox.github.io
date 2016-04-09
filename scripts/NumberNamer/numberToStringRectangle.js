(function()
{
	var notLoaded = typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberNamer === 'undefined';
	
	var PLACEHOLDER = '<em>The number\'s name will appear here</em>'
	
	document.write('<input class="number-to-string-input" onkeydown="if (event.keyCode === 13) $(\'.number-to-string-button\').click();"/><button class="number-to-string-button" type="button" onclick="number_to_string_button_onclick()">Submit</button><div class="number-to-string-result" style="margin:0em 2em;">' + (notLoaded ? '<span style="color:red;font-weight:bold;">Error: Number-Namer could not be loaded</span>' : PLACEHOLDER) + '</div>');
	
	number_to_string_button_onclick = notLoaded ? function(){} : function()
	{
		var value = document.getElementsByClassName('number-to-string-input')[0].value;
		var result;
		if (value === '')
		{
			result = PLACEHOLDER;
		}
		else
		{
			try
			{
				result = '<span style="word-wrap:break-word;">' + io.harriknox.NumberNamer.number_to_string(value) + '</span>';
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
		document.getElementsByClassName('number-to-string-result')[0].innerHTML = result;
	};
})();
