/**
 * Created by Administrator on 2016/10/4.
 */
////第一个轮播
var cur2 =0;
var allLi = $('firstUl').getElementsByTagName('li');

for(var i = 0;i < 3;i++){
    $('firstUl').appendChild(allLi[i].cloneNode(true));

}
var len = allLi.length;
$('firstLeft').onclick = function () {
    cur2--;
    if(cur2 == -1){
        cur2 = len - 4;
        $('firstUl').style.left = -(len-3)*407+'px';
    }
  animate($('firstUl'),{left:-407*cur2});
};
$('firstRight').onclick = function () {
    cur2++;
    if(cur2 == len -2){
        cur2 = 1;
        $('firstUl').style.left = 0;
    }
    animate($('firstUl'),{left:-407*cur2});
};
var allImg = document.querySelectorAll('.all_img');
for (var i = 0; i < allLi.length; i++) {
    allLi[i].indexs = i;
    allLi[i].onmouseover = function () {
        for (var j = 0; j < allLi.length; j++) {
            if (j == this.indexs) {
                allImg[j].style.display = 'block';
            }else{
                allImg[j].style.display = 'none';
            }
        }
    };
    allLi[i].onmouseout = function () {
        for (var j = 0; j < allLi.length; j++) {
                allImg[j].style.display = 'none';

        }
    }
}
////第二个轮播
var cu = 0 ;
var secondUl = $('secondUl').getElementsByTagName('li');
var secUl = $('secUl').getElementsByTagName('li');
    $('secondUl').appendChild(secondUl[0].cloneNode(true));
    $('secUl').appendChild(secUl[0].cloneNode(true));
var sLen = secondUl.length;

var timer1=null;
timer1=setInterval(function(){
    right()
},3000);
$('secondUl').onmouseover=function(){
    clearInterval(timer1)
};
$('secUl').onmouseover=function(){
    clearInterval(timer1)
};
$('secondUl').onmouseout=function(){
    timer1=setInterval(function(){
        right()
    },3000);
};
$('secUl').onmouseout=function(){
    timer1=setInterval(function(){
        right()
    },3000);
};

$('secondRight').onmouseover = function () {
    clearInterval(timer1)
};
$('secondLeft').onmouseover = function () {
    clearInterval(timer1)
};

$('secondRight').onclick = function () {
        right();
};
$('secondLeft').onclick = function () {
        left();
};
function right() {
    cu++;
    if(cu == sLen ){
        cu = 1;
        $('secondUl').style.left = 0;
        $('secUl').style.top = 0;
    }
    animate($('secondUl'),{left:-880*cu});
    animate($('secUl'),{top:-120*cu});
}
function left() {
    cu--;
    if(cu == -1){
        cu = sLen - 2;
        $('secondUl').style.left = -(sLen-1)*880+'px';
        $('secUl').style.top = -(sLen-1)*120+'px';
    }
    animate($('secondUl'),{left:-880*cu});
    animate($('secUl'),{top:-120*cu});
}




////第三个轮播
var cur = 0 ;
var thirdUl = $('thirdUl').getElementsByTagName('li');
var tUl = $('tUl').getElementsByTagName('li');
$('thirdUl').appendChild(thirdUl[0].cloneNode(true));
$('tUl').appendChild(tUl[0].cloneNode(true));
var sLeng = thirdUl.length;
var timer2=null;
timer2=setInterval(function(){
    right1();
},3000);
$('thirdUl').onmouseover=function(){
    clearInterval(timer2)
};
$('thirdUl').onmouseout=function(){
    timer2=setInterval(function(){
        right1();
    },3000);
};
$('thirdLeft').onmouseout=function(){
    timer2=setInterval(function(){
        right1();
    },3000);
};
$('thirdRight').onmouseout=function(){
    timer2=setInterval(function(){
        right1();
    },3000);
};
$('tUl').onmouseout=function(){
    timer2=setInterval(function(){
        right1();
    },3000);
};

$('thirdRight').onmouseover = function () {
    clearInterval(timer2)
};

$('thirdLeft').onmouseover = function () {
    clearInterval(timer2)
};
$('tUl').onmouseover = function () {
    clearInterval(timer2)
};
$('thirdRight').onclick = function () {
    right1();
};
$('thirdLeft').onclick = function () {
    left1();
};
function right1() {
    cur++;
    if(cur == sLeng ){
        cur = 1;
        $('thirdUl').style.left = 0;
        $('tUl').style.top = 0;
    }
    animate($('thirdUl'),{left:-880*cur});
    animate($('tUl'),{top:-200*cur});
}
function left1() {
    cur--;
    if(cur == -1){
        cur = sLeng - 2;
        $('thirdUl').style.left = -(sLeng-1)*880+'px';
        $('tUl').style.top = -(sLeng-1)*200+'px';
    }
    animate($('thirdUl'),{left:-880*cur});
    animate($('tUl'),{top:-200*cur});
}





