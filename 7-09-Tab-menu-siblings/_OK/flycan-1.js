//養成一開就把會使用到的物件宣告到變數之內的習慣
//可以提昇程式的效能
var $_btn = $("#tabMenu li");

var $_box = $(".box");

$_btn.find("a").eq(0).addClass("nowTab");

$_btn.mouseover(function() {

    //先把 4 個 .box 的 open 樣式都移除掉
    $_box.removeClass("open");

    //先抓目前被滑鼠摸到的<li>按鈕的兄弟數字(索引數)
    var now = $(this).index();

    //再把相同的兄弟數字的那一個 .box 加上 open 樣式
    $_box.eq(now).addClass("open");

    //先把 4 個 <li> 內超連結的 nowTab 白色樣式都移除掉
    $_btn.find("a").removeClass("nowTab");

    //再把相同的兄弟數字的那一個按鈕加上白色樣式
    $_btn.find("a").eq(now).addClass("nowTab");

})

