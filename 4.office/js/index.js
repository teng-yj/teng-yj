var counts = 0;
var wrong=0;
var para=document.createElement("p");
var node=document.createTextNode("");

function func(a)
{
	var arr = a.split("");
	arr.splice(0,1);
	var str = arr.join("");
	var id = "square" + str;
	var id2 = document.getElementById(id);
	var radios = document.getElementsByName(a);
	var b=0;     //设定一个初始值
	var rights = 0;
	var check = 0;
	id2.style.border = "none";
	for(var i=0;i<radios.length;i++)
	{
	 var right = radios[i].className;
		// console.log(right);
		if(radios[i].checked==true)
		{	
			var tt = (function(){
					for(var i=0;i<radios.length;i++){
						var right = radios[i].className;
						if (right == "right") {
							rights ++;
						}
					}
					return rights;
				})();
			id2.style.border = "#fff";
			// children(id2,"p").style.color = #fff;
				if(tt == 1){
						if(right == "right"){
							counts += 3;
						}
						rights = 0;
				}else{
				var tt2 = (function(){
					for (var i = 0; i <radios.length; i++) {
						if(radios[i].checked==true){
							var right = radios[i].className;
							console.log(right);
							if(right == "right"){
								check ++;
							}else{
								check = 0;
								break;
							}
						}
					}
					return check;
				})();
				// console.log(tt);
				// console.log(check);
						if(check==tt){
							counts += 4;
							break;
						}      
					
				}
				rights = 0;
				check = 0;
				tt2 = 0;
				
		}
		else{
			if(radios[i].checked==false)
			{
				b++;    //如果方框没选中，该值会累加
			} 
			if(b==radios.length)   //如果该值和方框的个数相同，那么就会报错
			{
				id2.style.border = "1px solid red";
				window.location.hash = id;

				para=document.createElement("p");
				node=document.createTextNode("请选择答案！！！");
				para.appendChild(node);	
				id2.appendChild(para);
				wrong = 1;
			}
		}
		
	}
	// console.log(counts);

	
}
		
function xun(){
	for (var i = 0; i < 1; i++) {
		var tt = 'o';
			for (var j = 30; j >= 1; j--) {
				var nv = tt + j;
				func(nv);
				// console.log(nv);
			}
	}
}

function fun(){
	if(confirm("请确认是否提交：")){

		xun();
		var namet = document.getElementById("name").value;
		var classt = document.getElementById("class").value;
		if(namet==""||classt==""){
			infor.style.border = "1px solid red";
			window.location.hash = "infor";
			para=document.createElement("p");
			node=document.createTextNode("此题为必答题，请先答小题。");
			para.appendChild(node);	
			infor.appendChild(para);
			wrong = 1;
		}else{
			infor.style.border = "none";
			// infor.removeChild(para);
		}
		if(wrong){
			alert("请确保所有内容填写正确，页面将自动定位到第一个不符合要求的题目，请检查！！！");
		}else{
			document.getElementById("count").innerHTML =classt+ "班" + namet + "得分" + counts + "分 (总成绩100分)";
			alert(classt+ "班" + namet + "得分" + counts + "分 (总成绩100分)");
		}
		wrong = 0;
		
		counts = 0;
		var ri = document.getElementsByClassName('right');
		for(var i=0;i<ri.length;i++){
			var red = document.getElementById(ri[i].parentNode.id);
			red.style.border = '1px solid #6abd79';
		}
	}
	

}
