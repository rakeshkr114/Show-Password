//Written By: @Rakqesh
//Created on: June 29th, 2018

//get all input tags
var inputs = document.getElementsByTagName("input");

var flag=0; // to count changes of type

// fn. called
changeToText();

// If input type=text already, change it back to password
if(flag==0)
	changeToPasswordAgain();


// Change type to text from password
function changeToText(){	
	for (var i=0; i<inputs.length; i++) {
		if (inputs[i].type.toLowerCase() === "password") {
			inputs[i].setAttribute('type','text');
			inputs[i].setAttribute('waspassword', 'Yes');
			flag++;
		}
	}
}


// Change type to password again
function changeToPasswordAgain(){	
	for (var i=0; i<inputs.length; i++) {
		if(inputs[i].getAttribute('waspassword') === "Yes"){
			inputs[i].setAttribute('type','password');
			
		}
	}
}