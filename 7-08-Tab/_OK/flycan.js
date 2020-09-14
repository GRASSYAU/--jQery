$("#tabMenu li").mouseover(function() {

    //先把 4 個 .box 的 open 樣式都移除掉
    $(".box").removeClass("open");

    //先抓目前被滑鼠摸到的<li>按鈕的兄弟數字(索引數)
    var now = $(this).index();

    //再把相同的兄弟數字的那一個 .box 加上 open 樣式
    $(".box").eq(now).addClass("open");

})

