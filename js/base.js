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
};