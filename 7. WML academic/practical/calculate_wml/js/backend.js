function add(){
	var num1 = parseInt(document.getElementById('num1').value);
	var num2 = parseInt(document.getElementById('num2').value);

	var total = parseInt(num1 + num2);
	document.getElementById('output').innerHTML = "Output: "+total;
}

function subtract(){
	var num1 = parseInt(document.getElementById('num1').value);
	var num2 = parseInt(document.getElementById('num2').value);

	var total = parseInt(num1 - num2);
	document.getElementById('output').innerHTML = "Output: "+total;
}

function multiply(){
	var num1 = parseInt(document.getElementById('num1').value);
	var num2 = parseInt(document.getElementById('num2').value);

	var total = parseInt(num1 * num2);
	document.getElementById('output').innerHTML = "Output: "+total;
}

function divide(){
	var num1 = parseInt(document.getElementById('num1').value);
	var num2 = parseInt(document.getElementById('num2').value);

	var total = parseInt(num1 / num2);
	document.getElementById('output').innerHTML = "Output: "+total;
}