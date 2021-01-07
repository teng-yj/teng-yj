var btns = $('.ss');
var con = $('#container');
var tod = $('#today');

$(function() {
    var toDay = new Date;
    var year = toDay.getFullYear();
    var mon = toDay.getMonth()+1;
    var date = toDay.getDate();
    var week = toDay.getDay();
    var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    tod.html("TODAY IS "+year+"年"+mon+"月"+date+"日"+weeks[week]);
});


btns.mouseenter(function () { 
    $(this).css('background','lightgray');   
    var bt = $(this).siblings('.ss');
    bt.css('background','lightblue');
    con.text("");
    var i = $(this).index()-1;
    laydate.render({
        elem: this
      });
    switch(i){
        case 0:
            con.text('一月份：本月有元旦节，腊八节，春节三大节日，祝我们新春快乐');
            break;
        case 1:
            con.text('二月份:2月2日是世界湿地日。这个节日倡导我们保护自然环境，生态环境，尤其是湿地环境，保护动植物生存的栖息地，号召大家爱护自然；我们应该行动起来，用实际行动来保护自然和地球。');
            break;
        case 2:
            con.text('三月份:1.3月3日是全国爱耳日，我们一定要合理使用的自己的耳朵，远离噪音污染，这样才能保障耳朵的健康哦！2.3月5日是学雷锋日。雷锋一个响亮的名字，让我们都拥有一副热心肠，从小事做起，帮助身边的人。');
            break;
        case 3:
            con.text('四月份:1.4月1日愚人节。用来整蛊搞怪的节日，这一天别人说的话，你千万不要相信，很可能是被别人愚弄了哦！2.4月4日清明节。这既是节日又是节气，是我国传统的节日，清明节是祭祀扫墓的日子，怀念故人，希望大家文明祭祀。不烧纸，不乱刻乱画。');
            break;
        case 4:
            con.text('五月份:1.5月1日国际劳动节。这一天是属于劳动者的节日，三天小长假，可以聚餐，可以春游，可以购物。2.5月4日青年节。这个节日是为了纪念五四运动，纪念勇敢的青年。这个节日告诉我们要爱国。');
            break;
        case 5:
            con.text('六月份:1.6月1日儿童节！国际儿童节，属于小朋友的节日。如果你是爸爸或者妈妈，可以带孩子出去玩耍。或者带孩子去购物！2.6月5日，世界环境日！这个节日呼吁我们保护我们赖以生存的地球环境，关注环境的变化，保护我们周围的自然环境，生态环境。');
            break;
        case 6:
            con.text('七月份:1.7月1日建党节。这一天是党的生日，是非常值得纪念的日子，没有党，就没有我们今天的幸福生活。这一天，学校，单位都可以举办庆祝活动。2.7月份很多学校放暑假。有很多学校在7月份纷纷放暑假，每个地区不太一样，放暑假后，同学们可以享受美好的假期了。');
            break;
        case 7:
            con.text('八月份:1.8月8日是二十四节气中的立秋。当然，天气短时间内变化并不是很大，仍然要做好防暑工作哦！2.8月6日是国际电影节，喜欢电影的朋友们，一定记得关注这个节日哦！');
            break;
        case 8:
            con.text('九月份:1.9月1日全国中小学正式开学的日子。9月一日开学了，同学们又都投入到了新的学习当中，有的同学去了新学校，有的同学去了新的班集体，大家要认真地学习。2.农历7月15中元节。今年的9月2日是农历的七月十五，也就是鬼节，这一天，我们要对逝去的亲人表达我们的思念之情，很多人在路边烧纸，大家要采取正确的方式怀念亲人，最好不要烧纸，会污染环境。');
            break;
        case 9:
            con.text('十月份:1.农历八月十五中秋节。今年的八月十五和国庆节赶到了一起，恰好是一天，中秋节是我国的传统节日，这一天中国的百姓是怎么过的呢？全家团圆坐在一起比较团圆饭，晚上赏月亮，看花灯！2.十月一日国庆节。10月1日是党的生日，我们国家今年建国71周年，国庆节我们可以做什么？可以观看关于国庆节的电影，对孩子进行爱国主义教育！');
            break;
        case 10:
            con.text('十一月份:1.在秋天的最后一个节气霜降节气之后，人们就要迎来更加寒冷的节气立冬节气，而每个节气的意义也有所不同，');
            break;
        case 11:
            con.text('十二月份:1.冬至是太阳南行的极致，这天北半球的太阳高度最小。冬至这天太阳光直射南回归线，太阳光对北半球最为倾斜。');
            break;

    }
    $(this).click(function () { 
        var i = $(this).index()-1;
        switch(i){
            case 0:
                con.text('click');
                break;
            case 1:
                con.text('二月份');
                break;
            case 2:
                con.text('三月份');
                break;
            case 3:
                con.text('四月份');
                break;
            case 4:
                con.text('五月份');
                break;
            case 5:
                con.text('六月份');
                break;
            case 6:
                con.text('七月份');
                break;
            case 7:
                con.text('八月份');
                break;
            case 8:
                con.text('九月份');
                break;
            case 9:
                con.text('十月份');
                break;
            case 10:
                con.text('十一月份');
                break;
            case 11:
                con.text('十二月份');
                break;
    
        }
    });
});

btns.mouseleave(function () { 
    $(this).css('background','lightgray');   
    var bt = $(this).siblings('.ss');
    bt.css('background','lightblue');
});


