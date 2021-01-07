var divs = document.getElementsByClassName('ss');
var tod = document.getElementById('today');


    var toDay = new Date;
    var year = toDay.getFullYear();
    var mon = toDay.getMonth()+1;
    var date = toDay.getDate();
    var week = toDay.getDay();
    var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    tod.innerHTML = "TODAY IS "+year+"年"+mon+"月"+date+"日"+weeks[week];

for(var i=0;i<12;i++)
{
    var div = divs[i];
    console.log(div.onmouseenter);
    
    div.onmouseenter = function() {
        div.style.backgroundColor = "lightgray";
    }
}
