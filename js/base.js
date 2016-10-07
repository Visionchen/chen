/**
 * Created by Administrator on 2016/10/4.
 */
//侧边栏选项卡
window.onload = function() {
    function $(id) {
        return document.getElementById(id);
    }

    var pop_top = $('pop_top').getElementsByTagName('a');
var pop_com = $('pop_com').getElementsByTagName('li');
for (var i = 0; i < pop_top.length; i++) {
    pop_top[i].indexs= i;
    pop_top[i].onmouseover = function () {
        for (var j = 0; j < pop_top.length; j++) {
            if (j == this.indexs) {
                this.className = 'focus';
                pop_com[j].style.display = 'block';
            } else {
                pop_top[j].className = '';
                pop_com[j].style.display='none';
            }
        }
    }
}
    var cu = 0 ;
    var firstUl = $('firstUl').getElementsByTagName('li');
    $('firstUl').appendChild(firstUl[0].cloneNode(true));
    var sLen = firstUl.length;
    var timer1=null;
// timer1=setInterval(function(){
//     right()
// },1000);
// $('firstUl').onmouseover=function(){
//     clearInterval(timer1)
// };
// $('firstUl').onmouseout=function(){
//     timer1=setInterval(function(){
//         right()
//     },1000);
// };
// $('firstRight').onmouseover = function () {
//     clearInterval(timer1)
// };
// $('firstLeft').onmouseover = function () {
//     clearInterval(timer1)
// };
// $('firstRight').onclick = function () {
//     right();
// };
// $('firstLeft').onclick = function () {
//     left();
// };
// function right() {
//     cu++;
//     if(cu == sLen ){
//         cu = 1;
//         $('firstUl').style.left = 0;
//     }
//     animate($('firstUl'),{left:-1200*cu});
// }
// function left() {
//     cu--;
//     if(cu == -1){
//         cu = sLen - 2;
//         $('firstUl').style.left = -(sLen-1)*1200+'px';
//     }
//     animate($('firstUl'),{left:-1200*cu});
//
// }
};