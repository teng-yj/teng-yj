
		var input = document.getElementById("text");
	input = input.value;
	input = '';


	function o0(){
		input += "0";
		input = document.getElementById("text").value = input;
	}
	function o1(){
		input += "1";
		input = document.getElementById("text").value = input;
	}
	function o2(){
		input += "2";
		input = document.getElementById("text").value = input;
	}
	function o3(){
		input += "3";
		input = document.getElementById("text").value = input;
	}
	function o4(){
		input += "4";
		input = document.getElementById("text").value = input;
	}
	function o5(){
		input += "5";
		input = document.getElementById("text").value = input;
	}
	function o6(){
		input += "6";
		input = document.getElementById("text").value = input;
	}
	function o7(){
		input += "7";
		input = document.getElementById("text").value = input;
	}
	function o8(){
		input += "8";
		input = document.getElementById("text").value = input;
	}
	function o9(){
		input += "9";
		input = document.getElementById("text").value = input;
	}
	function oj(){
		input += "-";
		input = document.getElementById("text").value = input;
	}
	function oi(){
		input += "+";
		input = document.getElementById("text").value = input;
	}
	function oc(){
		input += "*";
		input = document.getElementById("text").value = input;
	}
	function oh(){
		input += "/";
		input = document.getElementById("text").value = input;
	}
	function od(){
		input += ".";
		input = document.getElementById("text").value = input;
	}
	function ac(){
		location.reload();
	}
	function del(){
		var input = document.getElementById("text").value;
		input = input.substr(0, input.length - 1);
		input = document.getElementById("text").value = input;
	}

	

	
var tt;
function oe(){
	var input = document.getElementById("text").value;
	// input = Number(input);
		var reg = /\/|\+|\*|\-|\//;
		tt = input.match(reg)[0];
		console.log(tt);
		if(tt=='+'){
			function getCaption(obj,state) {
			    var index = obj.lastIndexOf("\+");
			    if(state==0){
			        obj=obj.substring(0,index);
			    }else {
			        obj=obj.substring(index+1,obj.length);
			    }
			    return obj;
			}
		}else if(tt=='-'){
			function getCaption(obj,state) {
			    var index=obj.lastIndexOf("\-");
			    if(state==0){
			        obj=obj.substring(0,index);
			        //console.log(obj);
			    }else {
			        obj=obj.substring(index+1,obj.length);
			        //console.log(obj);

			    }
			    return obj;
			}
		}else if(tt=='*'){
			function getCaption(obj,state) {
			    var index=obj.lastIndexOf("\*");
			    if(state==0){
			        obj=obj.substring(0,index);
			    }else {
			        obj=obj.substring(index+1,obj.length);
			    }
			    return obj;
			}
		}else if(tt=='/'){
			function getCaption(obj,state) {
			    var index=obj.lastIndexOf("\/");
			    if(state==0){
			        obj=obj.substring(0,index);
			    }else {
			        obj=obj.substring(index+1,obj.length);

			    }
			console.log(obj);

			    return obj;
			}
		}
	var a = Number(getCaption(input,0));
	var b = Number(getCaption(input,1));

	// console.log(getCaption(input,0));
	// console.log(getCaption(input,1));
	// console.log(a);
	// console.log(b);
	console.log(input.match(reg));

	switch(input.match(reg)[0]){
		case '+':
			input = document.getElementById("text").value = a + b;
			break;
		case '-':
			input = document.getElementById("text").value = a - b;
			break;
		case '*':
			input = document.getElementById("text").value = a * b;
			break;
		case '/':
			input = document.getElementById("text").value = a / b;
		}
	input = input.value;
	console.log(input);
	input = '';

}

function key(e){
    var keynum;
    keynum = window.event ? e.keyCode : e.which;
	if(keynum==13){
		oe();
	}
}

