//第一个轮播//
// window.onload = function () {
//
//     (function () {
//
//
// var cu = 0 ;
// var firstUl = $('firstUl').getElementsByTagName('li');
// var secondUl = $('secondUl').getElementsByTagName('li');
// $('firstUl').appendChild(firstUl[0].cloneNode(true));
// $('secondUl').appendChild(secondUl[0].cloneNode(true));
// var sLen = firstUl.length;
// var timer1=null;
// timer1=setInterval(function(){
//     left()
// },3000);
// $('firstUl').onmouseover=function(){
//     clearInterval(timer1)
// };
// $('firstUl').onmouseout=function(){
//     timer1=setInterval(function(){
//         left()
//     },3000);
// };
// $('secondUl').onmouseover=function(){
//     clearInterval(timer1)
// };
// $('secondUl').onmouseout=function(){
//     timer1=setInterval(function(){
//         left()
//     },3000);
// };
// $('firstRight').onmouseout=function(){
//     timer1=setInterval(function(){
//         left()
//     },3000);
// };
// $('firstLeft').onmouseout=function(){
//     timer1=setInterval(function(){
//         left()
//     },3000);
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
//         $('secondUl').style.top = 0;
//     }
//     animate($('firstUl'),{left:-1200*cu});
//     animate($('secondUl'),{top:-477*cu});
// }
// function left() {
//     cu--;
//     if(cu == -1){
//         cu = sLen - 2;
//         $('firstUl').style.left = -(sLen-1)*1200+'px';
//         $('secondUl').style.top = -(sLen-1)*477+'px';
//     }
//     animate($('firstUl'),{left:-1200*cu});
//     animate($('secondUl'),{top:-477*cu});
// }
//     })();
//第二个轮播//
// (function () {
//     var cur =0;
// var tUl = $('thirdUl');
// var thirdUl = tUl.getElementsByTagName('li');
// for(var i = 0; i < 4;i++){
//     tUl.appendChild(thirdUl[i].cloneNode(true));
// }
//
// var len = thirdUl.length;
// var timer = null;
//  timer = setInterval(function () {
//      right2()
//
//  },1000);
// tUl.onmousemove = function () {
//     clearInterval(timer)
// };
// tUl.onmouseout = function () {
//     timer = setInterval(function () {
//         right2()
//     },1000);
// };
// $('thirdRight').onmouseout = function () {
//    timer = setInterval(function () {
//         right2()
//     },1000);
// };
// $('thirdLeft').onmouseout = function () {
//     timer = setInterval(function () {
//         right2()
//     },1000);
// };
// $('thirdLeft').onmousemove = function () {
//     clearInterval(timer)
// };
//
// $('thirdRight').onmousemove = function () {
//     clearInterval(timer)
// };
// $('thirdLeft').onclick = function () {
//     left2()
// };
// $('thirdRight').onclick = function () {
//     right2()
// };
// function right2() {
//     cur++;
//     if(cur == len - 3){
//         cur = 1;
//         tUl.style.left = 0;
//     }
//     animate(tUl,{left:-305*cur})
// }
// function left2() {
//     cur--;
//     if(cur == -1){
//         cur = len - 5;
//         tUl.style.left = -(len-4)*305 + 'px';
//     }
//     animate(tUl,{left:-305*cur})
// }
// })();
// };
(function ($) {
    $(function () {
        $('.black_img').click(function () {
            $(this).siblings('.b_left').find('span').hide(600);
        });
        $('.black_a').hover(function () {
            $(this).siblings('span').show({opacity:.8});
        });

        $('.fli1_con').hover(function () {
            $(this).stop().animate({top:'0'},300)
        },function () {
            $(this).stop().animate({top:'170'},300)
        });


        /////第一个轮播
        $('#firstUl').append($('#firstUl li').first().clone(true));
        $('#secondUl').append($('#secondUl li').first().clone(true));
        var len_1 =$('#firstUl>li').length;
        var cur =0;
        var timer1;
        timer1 = setInterval(left,2000);
        $('#firstLeft').click(function () {
            left()
        });
        $('#firstRight').click(function () {
            right()
        });
        $('#firstUl,#firstLeft,#secondUl,#firstRight').hover(function () {
            clearInterval(timer1)
        },function () {
            timer1 = setInterval(left,2000);
        });
    
        function right() {
            cur++;
            if(cur == len_1){
                cur = 1;
                $('#firstUl').css({left:0}).stop().animate({left:-cur*1200},400);
                $('#secondUl').css({top:0}).stop().animate({top:-cur*477},400)
            }else{
                $('#firstUl').stop().animate({left:-cur*1200},400);
                $('#secondUl').stop().animate({top:-cur*477},400)
            }
        }
        function left() {
            cur--;
            if(cur == -1){
                cur = len_1 -2;
                $('#firstUl').css({left:-(len_1-1)*1200}).stop().animate({left:-cur*1200},400);
                $('#secondUl').css({top:-(len_1-1)*477}).stop().animate({top:-cur*477},400)

            }else{
                $('#firstUl').stop().animate({left:-cur*1200},400);
                $('#secondUl').stop().animate({top:-cur*477},400)
            }
        }




        /////四个排列的轮播
        var index_2 = 0;
        $('#thirdUl').append($('#thirdUl li:lt(4)').clone(true));
        var len2 =$('#thirdUl >li').length;
        console.log(len2)
        var timer_2;
        timer_2 = setInterval(right_2,2000);
        $('#thirdLeft ').click(function () {
            left_2()
        });
        $('#thirdRight').click(function () {
            right_2()
        });
        $('#thirdUl,#thirdLeft,#thirdRight').hover(function () {
            clearInterval(timer_2)
        },function () {
            timer_2 = setInterval(right_2,2000);
        });
        function right_2() {
            index_2++;
            if(index_2 == len2 - 3){
                index_2 = 1;
                $('#thirdUl').css({left:0}).stop().animate({left:-index_2*305},400)
            }else{
                $('#thirdUl').stop().animate({left:-index_2*305},400)
            }
        }
        function left_2() {
            index_2--;
            if(index_2 == -1){
                index_2 = len2 -5;
                $('#thirdUl').css({left:-(len2-4)*305}).stop().animate({left:-index_2*305},400)
            }else{
                $('#thirdUl').stop().animate({left:-index_2*305},400)
            }
        }





        ////最后一个轮播
        var index = 0;
        $('.fif_sec').append($('.fif_sec li').first().clone(true));
        var len =$('.fif_sec>li').length;
        var timer_1;
        timer_1 = setInterval(right_1,2000);
        $('.fif_fir').click(function () {
            left_1()
        });
        $('.fif_thi').click(function () {
            right_1()
        });
        $('.fif_sec,.fif_fir,.fif_thi').hover(function () {
            clearInterval(timer_1)
        },function () {
            timer_1 = setInterval(right_1,2000);
        });
        function right_1() {
            index++;
            if(index == len){
                index = 1;
                $('.fif_sec').css({left:0}).stop().animate({left:-index*1120},400)
            }else{
                $('.fif_sec').stop().animate({left:-index*1120},400)
            }
        }
        function left_1() {
            index--;
            if(index == -1){
                index = len -2;
                $('.fif_sec').css({left:-(len-1)*1120}).stop().animate({left:-index*1120},400)
            }else{
                $('.fif_sec').stop().animate({left:-index*1120},400)
            }
        }



    });
}(jQuery));

