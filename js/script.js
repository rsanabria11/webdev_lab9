function init(){
//add your javascrip between these two lines of code
	var button = document.getElemenetById('entrybutton');

	function showMeText(){
		var textbox = document.getElemenetById('entrybutton');
		document.getElementById('textoutput').innerHTML = textbox.value;
		alert("Rita Sanabria: " + textbox.value);
	}
	button.addEventListener('click',showMeText);
}

window.addEventListener('load', init);