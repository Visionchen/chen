//第一个轮播//
var cu = 0 ;
var firstUl = $('firstUl').getElementsByTagName('li');
var secondUl = $('secondUl').getElementsByTagName('li');
$('firstUl').appendChild(firstUl[0].cloneNode(true));
$('secondUl').appendChild(secondUl[0].cloneNode(true));
var sLen = firstUl.length;
var timer1=null;
timer1=setInterval(function(){
    left()
},3000);
$('firstUl').onmouseover=function(){
    clearInterval(timer1)
};
$('firstUl').onmouseout=function(){
    timer1=setInterval(function(){
        left()
    },3000);
};
$('secondUl').onmouseover=function(){
    clearInterval(timer1)
};
$('secondUl').onmouseout=function(){
    timer1=setInterval(function(){
        left()
    },3000);
};
$('firstRight').onmouseout=function(){
    timer1=setInterval(function(){
        left()
    },3000);
};
$('firstLeft').onmouseout=function(){
    timer1=setInterval(function(){
        left()
    },3000);
};
$('firstRight').onmouseover = function () {
    clearInterval(timer1)
};
$('firstLeft').onmouseover = function () {
    clearInterval(timer1)
};
$('firstRight').onclick = function () {
    right();
};
$('firstLeft').onclick = function () {
    left();
};
function right() {
    cu++;
    if(cu == sLen ){
        cu = 1;
        $('firstUl').style.left = 0;
        $('secondUl').style.top = 0;
    }
    animate($('firstUl'),{left:-1200*cu});
    animate($('secondUl'),{top:-477*cu});
}
function left() {
    cu--;
    if(cu == -1){
        cu = sLen - 2;
        $('firstUl').style.left = -(sLen-1)*1200+'px';
        $('secondUl').style.top = -(sLen-1)*477+'px';
    }
    animate($('firstUl'),{left:-1200*cu});
    animate($('secondUl'),{top:-477*cu});

}
//第二个轮播//
(function () {
    var cur =0;
var tUl = $('thirdUl');
var thirdUl = tUl.getElementsByTagName('li');
for(var i = 0; i < 4;i++){
    tUl.appendChild(thirdUl[i].cloneNode(true));
}

var len = thirdUl.length;
var timer = null;
 timer = setInterval(function () {
     right2()

 },1000);
tUl.onmousemove = function () {
    clearInterval(timer)
};
tUl.onmouseout = function () {
    timer = setInterval(function () {
        right2()
    },1000);
};
$('thirdRight').onmouseout = function () {
   timer = setInterval(function () {
        right2()
    },1000);
};
$('thirdLeft').onmouseout = function () {
    timer = setInterval(function () {
        right2()
    },1000);
};
$('thirdLeft').onmousemove = function () {
    clearInterval(timer)
};

$('thirdRight').onmousemove = function () {
    clearInterval(timer)
};
$('thirdLeft').onclick = function () {
    left2()
};
$('thirdRight').onclick = function () {
    right2()
};
function right2() {
    cur++;
    if(cur == len - 4){
        cur = 1;
        tUl.style.left = 0;
    }
    animate(tUl,{left:-305*cur})
}
function left2() {
    cur--;
    if(cur == -1){
        cur = len - 5;
        tUl.style.left = -(len-4)*305 + 'px';
    }
    animate(tUl,{left:-305*cur})
}
}());
