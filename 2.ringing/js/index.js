	var number = 0;
	var maximum = document.getElementById('txt'); 
	var time = document.getElementById('time3'); 
	var t,h2,m2,s2,k2;
	var reg = /[^0-9]/;
	var kk = new Array;
	var hh = new Array;
	var mm = new Array;
	var ss = new Array;
	function add(){
		k2 = document.getElementById("in0").value;
		h2 = document.getElementById("in1").value;
		m2 = document.getElementById("in2").value;
		s2 = document.getElementById("in3").value;
		var newly = document.createElement('p');
		if(k2==''||h2==''||m2==''||s2==''){
			alert("请输入内容！！！");
		}else{
			if(h2.match(reg) != null || m2.match(reg) != null || s2.match(reg) != null){
				alert("输入错误，请检查输入内容(只能输入数字)！！！")
			}else{
				if(h2<24&&m2<60&&s2<60){
					kk.push(k2);
					hh.push(h2);
					mm.push(m2);
					ss.push(s2);
					// console.log(hh);
					// console.log(mm);
					// console.log(ss);
					maximum.innerHTML += "<br/>"+"课程:" + k2 + "	" + "|||||" + "		" + h2 +"时"+ m2 +"分"+ s2 + "秒";
					// newly.innerHTML = "<table>" + "<tr>" + "<td>" + "课程:" + "</td>" + "</tr>" + "<tr>" + "<td>" + k2 + "</td>" + "</tr>" + "<tr>" + "<td>" +h2 +"时"+ m2 +"分"+ s2 + "秒" + "</td>" + "</tr>" +"</table>";
					//maximum.appendChild(newly);

					number++;
					return h2;
					return m2;
					return s2;
				}else{
					alert("输入错误，请检查输入内容(输入准确时间)！！！")
				}
				
			}
		}
		
		
	}
	function del() {
		var last = maximum.lastElementChild;
		maximum.removeChild(last); 
		number--;
		kk.pop();
		hh.pop();
		mm.pop();
		ss.pop();
	}

	var arr = new Array;
	var img1 = ['0.png','1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png'];
	var img2 = ['one.png','two.png','three.png','four.png','five.png','six.png','seven.png'];
	var img3 = ["year.png",'month.png','day.png','week'];                       
	function time1(){
		var newTime = new Date();
		var year = newTime.getFullYear();
		var month = newTime.getMonth()+1;
		var day = newTime.getDate();
		var hour = newTime.getHours();
		var miu = newTime.getMinutes();
		var sec = newTime.getSeconds();
		var wek = newTime.getDay();
		year = String(year).split("");
		month = String(month).split("");
		day = String(day).split("");
		hour = String(hour).split("");
		miu = String(miu).split("");
		sec = String(sec).split("");
		wek = String(wek).split("");
		// console.log(sec);

		for (var i = 0; i < year.length; i++) {
			var imgtt = "img" + (i+1);
			switch(year[i]){
				case '0':
					document.getElementById(imgtt).src = "img/" + img1[0];
					break;
				case '1':
					document.getElementById(imgtt).src = "img/" + img1[1];
					break;
				case '2':
					document.getElementById(imgtt).src = "img/" + img1[2];
					break;
				case '3':
					document.getElementById(imgtt).src = "img/" + img1[3];
					break;
				case '4':
					document.getElementById(imgtt).src = "img/" + img1[4];
					break;
				case '5':
					document.getElementById(imgtt).src = "img/" + img1[5];
					break;
				case '6':
					document.getElementById(imgtt).src = "img/" + img1[6];
					break;
				case '7':
					document.getElementById(imgtt).src = "img/" + img1[7];
					break;
				case '8':
					document.getElementById(imgtt).src = "img/" + img1[8];
					break;
				case '9':
					document.getElementById(imgtt).src = "img/" + img1[9];
					break;

			}	
		}
		for (var i = 0; i < month.length; i++) {
				if(month.length<2){
					switch(month[0]){
					case '0':
						document.getElementById("img7").src = "img/" + img1[0];
						break;
					case '1':
						document.getElementById("img7").src = "img/" + img1[1];
						break;``
					case '2':
						document.getElementById("img7").src = "img/" + img1[2];
						break;
					case '3':
						document.getElementById("img7").src = "img/" + img1[3];
						break;
					case '4':
						document.getElementById("img7").src = "img/" + img1[4];
						break;
					case '5':
						document.getElementById("img7").src = "img/" + img1[5];
						break;
					case '6':
						document.getElementById("img7").src = "img/" + img1[6];
						break;
					case '7':
						document.getElementById("img7").src = "img/" + img1[7];
						break;
					case '8':
						document.getElementById("img7").src = "img/" + img1[8];
						break;
					case '9':
						document.getElementById("img7").src = "img/" + img1[9];
						break;

				}
						document.getElementById("img6").src = "img/" + img1[0];
							
				}else{
					switch(month[1]){
					case '0':
						document.getElementById("img7").src = "img/" + img1[0];
						break;
					case '1':
						document.getElementById("img7").src = "img/" + img1[1];
						break;``
					case '2':
						document.getElementById("img7").src = "img/" + img1[2];
						break;
					case '3':
						document.getElementById("img7").src = "img/" + img1[3];
						break;
					case '4':
						document.getElementById("img7").src = "img/" + img1[4];
						break;
					case '5':
						document.getElementById("img7").src = "img/" + img1[5];
						break;
					case '6':
						document.getElementById("img7").src = "img/" + img1[6];
						break;
					case '7':
						document.getElementById("img7").src = "img/" + img1[7];
						break;
					case '8':
						document.getElementById("img7").src = "img/" + img1[8];
						break;
					case '9':
						document.getElementById("img7").src = "img/" + img1[9];
						break;

					}
					switch(month[0]){
						case '0':
							document.getElementById("img6").src = "img/" + img1[0];
							break;
						case '1':
							document.getElementById("img6").src = "img/" + img1[1];
							break;
						case '2':
							document.getElementById("img6").src = "img/" + img1[2];
							break;
						case '3':
							document.getElementById("img6").src = "img/" + img1[3];
							break;
						case '4':
							document.getElementById("img6").src = "img/" + img1[4];
							break;
						case '5':
							document.getElementById("img6").src = "img/" + img1[5];
							break;
						case '6':
							document.getElementById("img6").src = "img/" + img1[6];
							break;
						case '7':
							document.getElementById("img6").src = "img/" + img1[7];
							break;
						case '8':
							document.getElementById("img6").src = "img/" + img1[8];
							break;
						case '9':
							document.getElementById("img6").src = "img/" + img1[9];
							break;
						}
				}
		}
		for (var i = 0; i < day.length; i++) {
				if(day.length<2){
					switch(day[0]){
					case '0':
						document.getElementById("img10").src = "img/" + img1[0];
						break;
					case '1':
						document.getElementById("img10").src = "img/" + img1[1];
						break;``
					case '2':
						document.getElementById("img10").src = "img/" + img1[2];
						break;
					case '3':
						document.getElementById("img10").src = "img/" + img1[3];
						break;
					case '4':
						document.getElementById("img10").src = "img/" + img1[4];
						break;
					case '5':
						document.getElementById("img10").src = "img/" + img1[5];
						break;
					case '6':
						document.getElementById("img10").src = "img/" + img1[6];
						break;
					case '7':
						document.getElementById("img10").src = "img/" + img1[7];
						break;
					case '8':
						document.getElementById("img10").src = "img/" + img1[8];
						break;
					case '9':
						document.getElementById("img10").src = "img/" + img1[9];
						break;

				}
						document.getElementById("img9").src = "img/" + img1[0];
							
				}else{
					switch(day[1]){
					case '0':
						document.getElementById("img10").src = "img/" + img1[0];
						break;
					case '1':
						document.getElementById("img10").src = "img/" + img1[1];
						break;``
					case '2':
						document.getElementById("img10").src = "img/" + img1[2];
						break;
					case '3':
						document.getElementById("img10").src = "img/" + img1[3];
						break;
					case '4':
						document.getElementById("img10").src = "img/" + img1[4];
						break;
					case '5':
						document.getElementById("img10").src = "img/" + img1[5];
						break;
					case '6':
						document.getElementById("img10").src = "img/" + img1[6];
						break;
					case '7':
						document.getElementById("img10").src = "img/" + img1[7];
						break;
					case '8':
						document.getElementById("img10").src = "img/" + img1[8];
						break;
					case '9':
						document.getElementById("img10").src = "img/" + img1[9];
						break;

					}
					switch(day[0]){
						case '0':
							document.getElementById("img9").src = "img/" + img1[0];
							break;
						case '1':
							document.getElementById("img9").src = "img/" + img1[1];
							break;
						case '2':
							document.getElementById("img9").src = "img/" + img1[2];
							break;
						case '3':
							document.getElementById("img9").src = "img/" + img1[3];
							break;
						case '4':
							document.getElementById("img9").src = "img/" + img1[4];
							break;
						case '5':
							document.getElementById("img9").src = "img/" + img1[5];
							break;
						case '6':
							document.getElementById("img9").src = "img/" + img1[6];
							break;
						case '7':
							document.getElementById("img9").src = "img/" + img1[7];
							break;
						case '8':
							document.getElementById("img9").src = "img/" + img1[8];
							break;
						case '9':
							document.getElementById("img9").src = "img/" + img1[9];
							break;
						}
				}
		}
		for (var i = 0; i < wek.length; i++) {
				switch(wek[0]){
					case '0':
						document.getElementById("img13").src = "img/" + img2[6];
						break;
					case '1':
						document.getElementById("img13").src = "img/" + img2[0];
						break;
					case '2':
						document.getElementById("img13").src = "img/" + img2[1];
						break;
					case '3':
						document.getElementById("img13").src = "img/" + img2[2];
						break;
					case '4':
						document.getElementById("img13").src = "img/" + img2[3];
						break;
					case '5':
						document.getElementById("img13").src = "img/" + img2[4];
						break;
					case '6':
						document.getElementById("img13").src = "img/" + img2[5];
						break;

				}
		}
		for (var i = 0; i < hour.length; i++) {
				if(hour.length<2){
					switch(hour[0]){
					case '0':
						document.getElementById("img15").src = "img/" + img1[0];
						break;
					case '1':
						document.getElementById("img15").src = "img/" + img1[1];
						break;``
					case '2':
						document.getElementById("img15").src = "img/" + img1[2];
						break;
					case '3':
						document.getElementById("img15").src = "img/" + img1[3];
						break;
					case '4':
						document.getElementById("img15").src = "img/" + img1[4];
						break;
					case '5':
						document.getElementById("img15").src = "img/" + img1[5];
						break;
					case '6':
						document.getElementById("img15").src = "img/" + img1[6];
						break;
					case '7':
						document.getElementById("img15").src = "img/" + img1[7];
						break;
					case '8':
						document.getElementById("img15").src = "img/" + img1[8];
						break;
					case '9':
						document.getElementById("img15").src = "img/" + img1[9];
						break;

				}
						document.getElementById("img14").src = "img/" + img1[0];
							
				}else{
					switch(hour[1]){
					case '0':
						document.getElementById("img15").src = "img/" + img1[0];
						break;
					case '1':
						document.getElementById("img15").src = "img/" + img1[1];
						break;``
					case '2':
						document.getElementById("img15").src = "img/" + img1[2];
						break;
					case '3':
						document.getElementById("img15").src = "img/" + img1[3];
						break;
					case '4':
						document.getElementById("img15").src = "img/" + img1[4];
						break;
					case '5':
						document.getElementById("img15").src = "img/" + img1[5];
						break;
					case '6':
						document.getElementById("img15").src = "img/" + img1[6];
						break;
					case '7':
						document.getElementById("img15").src = "img/" + img1[7];
						break;
					case '8':
						document.getElementById("img15").src = "img/" + img1[8];
						break;
					case '9':
						document.getElementById("img15").src = "img/" + img1[9];
						break;

					}
					switch(hour[0]){
						case '0':
							document.getElementById("img14").src = "img/" + img1[0];
							break;
						case '1':
							document.getElementById("img14").src = "img/" + img1[1];
							break;
						case '2':
							document.getElementById("img14").src = "img/" + img1[2];
							break;
						case '3':
							document.getElementById("img14").src = "img/" + img1[3];
							break;
						case '4':
							document.getElementById("img14").src = "img/" + img1[4];
							break;
						case '5':
							document.getElementById("img14").src = "img/" + img1[5];
							break;
						case '6':
							document.getElementById("img14").src = "img/" + img1[6];
							break;
						case '7':
							document.getElementById("img14").src = "img/" + img1[7];
							break;
						case '8':
							document.getElementById("img14").src = "img/" + img1[8];
							break;
						case '9':
							document.getElementById("img14").src = "img/" + img1[9];
							break;
						}
				}
		}
		for (var i = 0; i < miu.length; i++) {
				if(miu.length<2){
					switch(miu[0]){
					case '0':
						document.getElementById("img18").src = "img/" + img1[0];
						break;
					case '1':
						document.getElementById("img18").src = "img/" + img1[1];
						break;``
					case '2':
						document.getElementById("img18").src = "img/" + img1[2];
						break;
					case '3':
						document.getElementById("img18").src = "img/" + img1[3];
						break;
					case '4':
						document.getElementById("img18").src = "img/" + img1[4];
						break;
					case '5':
						document.getElementById("img18").src = "img/" + img1[5];
						break;
					case '6':
						document.getElementById("img18").src = "img/" + img1[6];
						break;
					case '7':
						document.getElementById("img18").src = "img/" + img1[7];
						break;
					case '8':
						document.getElementById("img18").src = "img/" + img1[8];
						break;
					case '9':
						document.getElementById("img18").src = "img/" + img1[9];
						break;

				}
						document.getElementById("img17").src = "img/" + img1[0];
							
				}else{
					switch(miu[1]){
					case '0':
						document.getElementById("img18").src = "img/" + img1[0];
						break;
					case '1':
						document.getElementById("img18").src = "img/" + img1[1];
						break;``
					case '2':
						document.getElementById("img18").src = "img/" + img1[2];
						break;
					case '3':
						document.getElementById("img18").src = "img/" + img1[3];
						break;
					case '4':
						document.getElementById("img18").src = "img/" + img1[4];
						break;
					case '5':
						document.getElementById("img18").src = "img/" + img1[5];
						break;
					case '6':
						document.getElementById("img18").src = "img/" + img1[6];
						break;
					case '7':
						document.getElementById("img18").src = "img/" + img1[7];
						break;
					case '8':
						document.getElementById("img18").src = "img/" + img1[8];
						break;
					case '9':
						document.getElementById("img18").src = "img/" + img1[9];
						break;

					}
					switch(miu[0]){
						case '0':
							document.getElementById("img17").src = "img/" + img1[0];
							break;
						case '1':
							document.getElementById("img17").src = "img/" + img1[1];
							break;
						case '2':
							document.getElementById("img17").src = "img/" + img1[2];
							break;
						case '3':
							document.getElementById("img17").src = "img/" + img1[3];
							break;
						case '4':
							document.getElementById("img17").src = "img/" + img1[4];
							break;
						case '5':
							document.getElementById("img17").src = "img/" + img1[5];
							break;
						case '6':
							document.getElementById("img17").src = "img/" + img1[6];
							break;
						case '7':
							document.getElementById("img17").src = "img/" + img1[7];
							break;
						case '8':
							document.getElementById("img17").src = "img/" + img1[8];
							break;
						case '9':
							document.getElementById("img17").src = "img/" + img1[9];
							break;
						}
				}
		}
		for (var i = 0; i < sec.length; i++) {
				if(sec.length<2){
					switch(sec[0]){
					case '0':
						document.getElementById("img21").src = "img/" + img1[0];
						break;
					case '1':
						document.getElementById("img21").src = "img/" + img1[1];
						break;``
					case '2':
						document.getElementById("img21").src = "img/" + img1[2];
						break;
					case '3':
						document.getElementById("img21").src = "img/" + img1[3];
						break;
					case '4':
						document.getElementById("img21").src = "img/" + img1[4];
						break;
					case '5':
						document.getElementById("img21").src = "img/" + img1[5];
						break;
					case '6':
						document.getElementById("img21").src = "img/" + img1[6];
						break;
					case '7':
						document.getElementById("img21").src = "img/" + img1[7];
						break;
					case '8':
						document.getElementById("img21").src = "img/" + img1[8];
						break;
					case '9':
						document.getElementById("img21").src = "img/" + img1[9];
						break;

				}
						document.getElementById("img20").src = "img/" + img1[0];
							
				}else{
					switch(sec[1]){
					case '0':
						document.getElementById("img21").src = "img/" + img1[0];
						break;
					case '1':
						document.getElementById("img21").src = "img/" + img1[1];
						break;``
					case '2':
						document.getElementById("img21").src = "img/" + img1[2];
						break;
					case '3':
						document.getElementById("img21").src = "img/" + img1[3];
						break;
					case '4':
						document.getElementById("img21").src = "img/" + img1[4];
						break;
					case '5':
						document.getElementById("img21").src = "img/" + img1[5];
						break;
					case '6':
						document.getElementById("img21").src = "img/" + img1[6];
						break;
					case '7':
						document.getElementById("img21").src = "img/" + img1[7];
						break;
					case '8':
						document.getElementById("img21").src = "img/" + img1[8];
						break;
					case '9':
						document.getElementById("img21").src = "img/" + img1[9];
						break;

					}
					switch(sec[0]){
						case '0':
							document.getElementById("img20").src = "img/" + img1[0];
							break;
						case '1':
							document.getElementById("img20").src = "img/" + img1[1];
							break;
						case '2':
							document.getElementById("img20").src = "img/" + img1[2];
							break;
						case '3':
							document.getElementById("img20").src = "img/" + img1[3];
							break;
						case '4':
							document.getElementById("img20").src = "img/" + img1[4];
							break;
						case '5':
							document.getElementById("img20").src = "img/" + img1[5];
							break;
						case '6':
							document.getElementById("img20").src = "img/" + img1[6];
							break;
					}
				}
		}
		if(month<10){
			month = "0" + month;
		}
		if(day<10){
			day = "0" + day;
		}
		if(hour<10){
			hour = "0" + hour;
		}
		if(miu<10){
			miu = "0" + miu;
		}
		if(sec<10){
			sec = "0" + sec;
		}
		for(var i=0;i<number;i++){
			var newTime = new Date();
			var year = newTime.getFullYear();
			var month = newTime.getMonth()+1;
			var day = newTime.getDate();
			var hour = newTime.getHours();
			var miu = newTime.getMinutes();
			var sec = newTime.getSeconds();
			var wek = newTime.getDay();

			if(hour == hh[i] && miu == mm[i] && sec == ss[i]){

				var star = document.getElementById('miu');
				star.currenTime = 10;
				star.play();

				function stop(){
					var star = document.getElementById('miu');
					star.pause();
				}

				t = setTimeout(stop, 10000);
				function ting(){
					clearTimeout(t);
				}
				setTimeout(ting, 10000);
			}
		}
	}
	
	setInterval(time1,1000);

	