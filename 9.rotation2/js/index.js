
var mov = document.getElementById('move');
let speed2 = document.getElementById('speed2');
let index2 = speed2.selectedIndex;
let speed_value2 = speed2.options[index2].value;
// var check = document.getElementsByTagName('input')[0];
let seting;
let mov_num = 0;
let tt;

function change(check){
	if(check.checked==true){
			tt = true;
		}else{
			tt = false;
		}
}
function mo(){	
	var speed = document.getElementById('speed');
	let index = speed.selectedIndex;
	var speed_value = speed.options[index].value;
	function change_val(){
		speed = document.getElementById('speed');
		index = speed.selectedIndex;
		speed_value = speed.options[index].value;
	}
	
	if(mov_num==-546){
		mov_num = 0;
	}else{
		mov_num += -1;
	}
	mov.style.marginLeft = mov_num + "px";
	btn_left1 = function(){
		console.log(mov_num);
		if(mov_num<0 && mov_num>-180){
			mov_num = -180;
		}else if(mov_num<-180 && mov_num>-360){
			mov_num = -360;
		}else if(mov_num<-360 && mov_num>-540){
			mov_num = -540;
		}else if(mov_num<-540 && mov_num>-720){
			mov_num = 0;
		}else if(mov_num<-720 && mov_num>-900){
			mov_num = -360;
		}else if(mov_num<-900 && mov_num>-1080){
			mov_num = -180;
		}
	}
	btn_right1 = function(){
		console.log(mov_num);
		if(mov_num<0 && mov_num>-180){
			mov_num = 0;
		}else if(mov_num<-180 && mov_num>-360){
			mov_num = -180;
		}else if(mov_num<-360 && mov_num>-540){
			mov_num = -360;
		}else if(mov_num<-540 && mov_num>-720){
			mov_num = 0;
		}else if(mov_num<-720 && mov_num>-900){
			mov_num = -360;
		}else if(mov_num<-900 && mov_num>-1080){
			mov_num = -180;
		}
	}
	if(speed_value=='low'){
			if(tt==true){
			// console.log(typeof(mov_num));
				// console.log('low');
				if(s=='100'){
					function set(){
						seting = setInterval(mo,100);
					}
				}else if(s=='50'){
					function set(){
						seting = setInterval(mo,50);
					}
				}else if(s=='10'){
					function set(){
						seting = setInterval(mo,10);
					}
				}
				if(mov_num==-180){
					// alert('123');
					function stop(){
						clearInterval(seting);
					}
					setTimeout(stop,1);
					setTimeout(set,1000);
				}else if(mov_num==-360){
					// alert('123');
					function stop(){
						clearInterval(seting);
					}
					setTimeout(stop,1);
					setTimeout(set,1000);
				}else if(mov_num==-540){
					// alert('123');
					function stop(){
						clearInterval(seting);
					}
					setTimeout(stop,1);
					setTimeout(set,1000);
				}
			}
		}else if(speed_value=='mid'){
		
			if(tt==true){
				if(s=='100'){
				function set(){
						seting = setInterval(mo,100);
					}
				}else if(s=='50'){
					function set(){
						seting = setInterval(mo,50);
					}
				}else if(s=='10'){
					function set(){
						seting = setInterval(mo,10);
					}
				}
				if(mov_num==-180){
					// alert('123');
					function stop(){
						clearInterval(seting);
					}
					setTimeout(stop,1);
					setTimeout(set,500);
				}else if(mov_num==-360){
					// alert('123');
					function stop(){
						clearInterval(seting);
					}
					setTimeout(stop,1);
					setTimeout(set,500);
				}else if(mov_num==-540){
					// alert('123');
					function stop(){
						clearInterval(seting);
					}
					setTimeout(stop,1);
					setTimeout(set,500);
				}
			}
		}else if(speed_value=='fast'){
			
			if(tt==true){
			if(s=='100'){
			function set(){
					seting = setInterval(mo,100);
				}
			}else if(s=='50'){
				function set(){
					seting = setInterval(mo,50);
				}
			}else if(s=='10'){
				function set(){
					seting = setInterval(mo,10);
				}
			}
				if(mov_num==-180){
					// alert('123');
					function stop(){
						clearInterval(seting);
					}
					setTimeout(stop,1);
					setTimeout(set,100);
				}else if(mov_num==-360){
					// alert('123');
					function stop(){
						clearInterval(seting);
					}
					setTimeout(stop,1);
					setTimeout(set,100);
				}else if(mov_num==-540){
					// alert('123');
					function stop(){
						clearInterval(seting);
					}
					setTimeout(stop,1);
					setTimeout(set,100);
				}
			}
	}
	
}
let num=0;

function changeBoos(){
	if(speed_value2=="low2"){
		num++;
		if(num>0){
			for(let i=0;i<=num;i++){
				clearInterval(seting);
				// seting = null;
			}
			num = 1;
		}
		function set(){
			seting = setInterval(mo,100);
			s = '100';
			return s;
		}
		return set();
	}else if(speed_value2=="mid2"){
		num++;
		if(num>0){
			for(let i=0;i<=num;i++){
				clearInterval(seting);
			}
			num = 1;
		}
		function set(){
			seting = setInterval(mo,50);
			s = '50';
			return s;	
		}
		return set();
		
	}else if(speed_value2=="fast2"){
		num++;
		if(num>1){
			for(let i=0;i<num;i++){
				clearInterval(seting);
				seting = null;

			}
			num = 1;
		}
		function set(){
			seting = setInterval(mo,10);	
			s = '10';
			return s;
		}
		return set();
	}
}
changeBoos();
function change_value(){
	// num++;
	index2 = speed2.selectedIndex;
	speed_value2 = speed2.options[index2].value;
	changeBoos();
	console.log(changeBoos());
	console.log(num);

}





