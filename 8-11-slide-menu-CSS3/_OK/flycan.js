function openMenu() {
    $("#main-page").addClass("move-left"); //主畫面加上往左移的樣式
    $("#btn").hide(); //上面的按鈕消失
    $("#main-page").on("click", closeMenu); //主畫面加上滑鼠事件可以關掉選單
}

function closeMenu() {
    $("#main-page").removeClass("move-left"); //主畫面移除往左移的樣式
    $("#btn").show(); //上面的按鈕出現
    $("#main-page").off("click", closeMenu); //主畫面解除滑鼠事件
}

$("#btn").on("click", openMenu);

