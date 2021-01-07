let mar = document.getElementById("mar");
let box = 0;
let arr = ['赵晨辉','滕杨静','杨金辉','陈二哈','张元春','曹佳伟','韩鑫','徐浩'];
let arr2 = new Array();


function qq(){
	const add = document.createElement('div');
		if(box<arr.length){
			add.innerHTML = arr[box];
			mar.appendChild(add);
			// let add2 += arr[i];
			// console.log(add2[i]);
		}else{
			alert("人数已满");
			// break;
		}
	box++;
	arr2 += add;
	// console.log(arr2);
}
let set,sett,cle,arrr=new Array,winer,winers=new Array,count=0;
const winerss = document.getElementById('winers');
function start(){
	const child = document.getElementById('mar').getElementsByTagName("div");
		count++;
		function suiji(){
			let sui = parseInt(Math.random() * arr.length);
			for(let i=0;i<arr.length;i++){
				if(arr[i]==arr[sui]){
					child[i].style.backgroundColor = 'red';
					arrr.push(i);
					// console.log(arrr);
				}
			}
		}
		function clear(){
			for(let i=0;i<arr.length;i++){
					child[i].style.backgroundColor = 'white';
			}
		}


	
		function set1(){
			set = setInterval(suiji,1000);
		}
		function set2(){
			set = setInterval(suiji,100);
		}
		set1();
		function cle(){
			clearInterval(set,10);
		}
		setTimeout(cle,5000);
		setTimeout(set2,5000);
		setTimeout(cle,10000);
		setTimeout(set1,10000);
		setTimeout(cle,15000);
		function setc1(){
			sett = setInterval(clear,1010);
		}
		function setc2(){
			sett = setInterval(clear,101);
		}
		function cle2(){
			clearInterval(sett,10);
		}
		// setInterval(clear,1010);
		setc1();
		setTimeout(cle2,5000);
		setTimeout(setc2,5000);
		setTimeout(cle2,10000);
		setTimeout(setc1,10000);
		setTimeout(cle,15000);

		function win(){
			winer = arrr.pop()+1;
			console.log(winer);
			clearInterval(sett,10);
	
			child[winer].style.backgroundColor = 'red';
			alert("恭喜"+arr[winer]+"获奖");
			winers.push(arr[winer]);
			const oner = document.getElementById('oner').value;
			const twor = document.getElementById('twor').value;
			const threer = document.getElementById('threer').value;
			console.log(oner);
			if(count<=oner){
				document.getElementById('one').innerHTML += arr[winer]+',';
			}else{
				// count = count - oner;
				if(count-oner<=twor){
					document.getElementById('two').innerHTML += arr[winer]+',';
				}else{
					if(count-oner-twor<=threer){
						document.getElementById('three').innerHTML += arr[winer]+',';
						if(count-oner-twor==threer){
							alert("抽奖完毕");
							document.getElementById('winers').style.display = 'block';
							//break;
						}
					}
				}
			}
			arrr.length = 0;
			// arr.splice(winer,1);
			// arr.length = arr.length-1;
		}
		setTimeout(win,15100);
		
		// let st = setInterval(fun,2000);
		// clearInterval(st,10000);

		// setInterval(setTimeout(fun2,2000),10000);
		
	// console.log(arr2[0]);
}
// function spp(){
// 			clearInterval(set);
// 			clearInterval(cle);

// 			// console.log('212');
// 		}


