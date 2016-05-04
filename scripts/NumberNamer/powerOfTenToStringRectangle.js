(function()
{
	if (typeof power_of_ten_button_onclick === 'undefined')
	{
		power_of_ten_button_onclick = function()
		{
			var value = document.getElementsByClassName('power-of-ten-input')[0].value;
			var result = '<em>The number\'s name will appear here</em>';
			if (value !== '')
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
		
		var notLoaded = typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberNamer === 'undefined';
		
		var potInput = document.createElement('input');
		potInput.className = 'power-of-ten-input';
		potInput.pattern = '^\\d+$';
		potInput.value = 0;
		potInput.setAttribute('onkeydown', 'if (event.keyCode === 13) power_of_ten_button_onclick();');
		
		var potButton = document.createElement('input');
		potButton.type = 'button';
		potButton.className = 'power-of-ten-button';
		potButton.value = 'Submit';
		potButton.setAttribute('onclick', 'power_of_ten_button_onclick()');
		
		var potResult = document.createElement('div');
		potResult.className = 'power-of-ten-result';
		potResult.style = 'margin:0em 2em;';
		potResult.innerHTML = (notLoaded ? '<span style="color:red;font-weight:bold;">Error: Number-Namer could not be loaded</span>' : '<em>The number\'s name will appear here</em>');
		
		var parent = (function(coll) { return coll[coll.length - 1]; })(document.getElementsByTagName('script')).parentNode;
		
		parent.appendChild(potInput);
		parent.appendChild(potButton);
		parent.appendChild(potResult);
	}
})();
