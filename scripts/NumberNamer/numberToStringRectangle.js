var number_to_string_button_onclick = function()
{
	var value = document.getElementsByClassName('number-to-string-input')[0].value;
	var result = '<em>The number\'s name will appear here</em>';
	if (value !== '')
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

(function()
{
	var notLoaded = typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberNamer === 'undefined';
	
	var ntsInput = document.createElement('input');
	ntsInput.className = 'number-to-string-input';
	ntsInput.setAttribute('onkeydown', 'if (event.keyCode === 13) number_to_string_button_onclick();');
	
	var ntsButton = document.createElement('input');
	ntsButton.type = 'button';
	ntsButton.className = 'number-to-string-button';
	ntsButton.value = 'Submit';
	ntsButton.setAttribute('onclick', 'number_to_string_button_onclick()');
	
	var ntsResult = document.createElement('div');
	ntsResult.className = 'number-to-string-result';
	ntsResult.style = 'margin:0em 2em;';
	ntsResult.innerHTML = (notLoaded ? '<span style="color:red;font-weight:bold;">Error: Number-Namer could not be loaded</span>' : '<em>The number\'s name will appear here</em>');
	
	var parent = (function(coll) { return coll[coll.length - 1]; })(document.getElementsByTagName('script')).parentNode;
	
	parent.appendChild(ntsInput);
	parent.appendChild(ntsButton);
	parent.appendChild(ntsResult);
})();
