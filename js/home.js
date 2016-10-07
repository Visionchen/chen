//第一个轮播//
var cur =0;
var tUl = $('thirdUl');
var thirdUl = tUl.getElementsByTagName('li');
for(var i = 0; i < 4;i++){
    tUl.appendChild(thirdUl[i].cloneNode(true));
}

var len = thirdUl.length;
var timer = null;
 timer = setInterval(function () {
     left2()

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