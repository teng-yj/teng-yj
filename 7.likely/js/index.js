
const sum = document.getElementById('sum').value;
let count = 0;
document.cookie = document.cookie;
// document.cookie = sum;
// var x = document.cookie;
// console.log(x);
let click_one = true;
// let cname = "count=";
// function like() {
// 	count++;
// 	console.log(count);
// 	sum.innerHTML = count;
// }


$('#rotation button').click(function(){
	if(click_one === true){
		count = $(this).next().text();
		document.cookie = 'count=' + count;
		var x = document.cookie.split('=')[1];
		console.log(x);
		count++;
		$(this).next().text(count);
		click_one = false;
		// let arr=[];
		// arr.push(count);
	}else{
		alert("点击过于频繁！！！");
		$(this).css('color','red');
	}
	function tt(){
		click_one = true;
	}
	setTimeout(tt,1000);
});
	
