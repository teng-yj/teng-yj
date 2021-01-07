var rota = document.getElementById("rotation");
var imgc = document.getElementsByClassName('img'); 
var ind = document.getElementsByClassName('bb'); 
var style = document.getElementById("dynamic");

function b1() { 
	var imgi = document.getElementById('img1');
	for(var i=0;i<imgc.length;i++){
		imgc[i].style.display = 'none';
	}
	imgi.style.display = 'block';
    style.innerHTML = '@-webkit-keyframes switch {0%, 20% {margin-top: 0px;}}\n'
             + '@keyframes switch {0%, 20% {margin-top: 0px;}}';
}

function bb1(){
	for(var i=0;i<imgc.length;i++){
		imgc[i].style.display = 'block';
		style.innerHTML = '';
	}
}

function b2() { 
	var imgi = document.getElementById('img2');
	for(var i=0;i<imgc.length;i++){
		imgc[i].style.display = 'none';
	}
	imgi.style.display = 'block';
    style.innerHTML = '@-webkit-keyframes switch {20%, 40% {margin-top: 0px;}}\n'
             + '@keyframes switch {20%, 40% {margin-top: 0px;}}'
}

function bb2(){
	for(var i=0;i<imgc.length;i++){
		imgc[i].style.display = 'block';
		style.innerHTML = '';
	}
}

function b3() { 
	var imgi = document.getElementById('img3');
	for(var i=0;i<imgc.length;i++){
		imgc[i].style.display = 'none';
	}
	imgi.style.display = 'block';
    style.innerHTML = '@-webkit-keyframes switch {40%, 60% {margin-top: 0px;}}\n'
             + '@keyframes switch {40%, 60% {margin-top: 0px;}}'
}

function bb3(){
	for(var i=0;i<imgc.length;i++){
		imgc[i].style.display = 'block';
		style.innerHTML = '';
	}
}

function b4() { 
	var imgi = document.getElementById('img4');
	for(var i=0;i<imgc.length;i++){
		imgc[i].style.display = 'none';
	}
	imgi.style.display = 'block';
    style.innerHTML = '@-webkit-keyframes switch {60%, 80% {margin-top: 0;}}\n'
             + '@keyframes switch {60%, 80% {margin-top: 0;}}'
}

function bb4(){
	for(var i=0;i<imgc.length;i++){
		imgc[i].style.display = 'block';
		style.innerHTML = '';
	}
}

function b5() { 
	var imgi = document.getElementById('img5');
	for(var i=0;i<imgc.length;i++){
		imgc[i].style.display = 'none';
	}
	imgi.style.display = 'block';
    style.innerHTML = '@-webkit-keyframes switch {80%, 99% {margin-top: 0;}}\n'
             + '@keyframes switch {80%, 99% {margin-top: 0;}}';
}

function bb5(){
	for(var i=0;i<imgc.length;i++){
		imgc[i].style.display = 'block';
		style.innerHTML = '';
	}
}

function button1(){
   rota.style.webkitAnimationDuration = '1s';
}

function button2(){
   rota.style.webkitAnimationDuration = '5s';
}

function button3(){
   rota.style.webkitAnimationDuration = '15s';
}


