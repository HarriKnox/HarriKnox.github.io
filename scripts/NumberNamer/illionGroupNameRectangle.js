(function()
{
	if (typeof illion_group_number_button_onclick === 'undefined')
	{
		illion_group_number_button_onclick = function()
		{
			var value = document.getElementsByClassName('illion-group-name-input')[0].value;
			var result = '<em>The group name will appear here</em>';
			if (value !== '')
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
		
		var notLoaded = typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberNamer === 'undefined';
		
		var ignInput = document.createElement('input');
		ignInput.className = 'illion-group-name-input';
		ignInput.setAttribute('onkeydown', 'if (event.keyCode === 13) illion_group_number_button_onclick();');
		
		var ignButton = document.createElement('input');
		ignButton.type = 'button';
		ignButton.className = 'illion-group-name-button';
		ignButton.value = 'Submit';
		ignButton.setAttribute('onclick', 'illion_group_number_button_onclick()');
		
		var ignResult = document.createElement('div');
		ignResult.className = 'illion-group-name-result';
		ignResult.style = 'margin:0em 2em;';
		ignResult.innerHTML = (notLoaded ? '<span style="color:red;font-weight:bold;">Error: Number-Namer could not be loaded</span>' : '<em>The group name will appear here</em>');
		
		var parent = (function(coll) { return coll[coll.length - 1]; })(document.getElementsByTagName('script')).parentNode;
		
		parent.appendChild(ignInput);
		parent.appendChild(ignButton);
		parent.appendChild(ignResult);
	}
})();
