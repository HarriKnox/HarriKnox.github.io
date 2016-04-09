(function()
{
	var notLoaded = typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberNamer === 'undefined';
	
	var PLACEHOLDER = '<em>The group name will appear here</em>';
	
	document.write('<input class="illion-group-input" onkeydown="if (event.keyCode === 13) document.getElementsByClassName(\'illion-group-number-button\')[0].click();"/><button class="illion-group-number-button" type="button" onclick="illion_group_number_button_onclick()">Submit</button><div class="illion-group-name-result" style="margin:0em 2em;">' + (notLoaded ? '<span style="color:red;font-weight:bold;">Error: Number-Namer could not be loaded</span>' : PLACEHOLDER) + '</div>');
	
	illion_group_number_button_onclick = notLoaded ? function(){} : function()
	{
		var value = document.getElementsByClassName('illion-group-input')[0].value;
		var result;
		if (value === '')
		{
			result = PLACEHOLDER;
		}
		else
		{
			try
			{
				result = '<span style="word-wrap:break-word;">' + io.harriknox.NumberNamer.illion_group_name(value) + '</span>';
			}
			catch (e)
			{
				result = '<span style="color:red;font-weight:bold;">Error: ';
				if (value.match(/[^\d\.\-]/)) result += 'Value contains non-numerals';
				else if (!value.match(/^-?\d+(\.\d+)?$/)) result += 'Value not in number format';
				else if (value.match(/^-/) || value.match(/^0+$/)) result += 'Value is not positive';
				else if (value.match(/\./)) result += 'Value is not an integer';
				else result += e.message;
				result += '</span>';
			}
		}
		document.getElementsByClassName('illion-group-name-result')[0].innerHTML = result;
	};
})();
