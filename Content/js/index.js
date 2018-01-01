var btn = document.querySelector('.b').getElementsByTagName('a')[0];
var str = "";
str='<div class="yell"><div class="ip"><input type="text" placeholder="Find your school"><button class="bticonfont" type="">&#xe729;</button></div><span class="close iconfont">&#xe6ef;</span></div>';
// 点击
btn.onclick = function () {
    $('.mark').html(str);
    $('.mark').css('display','block');
}
