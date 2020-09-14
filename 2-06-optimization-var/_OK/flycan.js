$(function() {

    function changeDog1() {
        $(this).attr("src", "images/001.jpg");
    }

    function changeDog2() {
        $(this).attr("src", "images/002.jpg");
    }

    function changeDog3() {
        $(this).attr("src", "images/003.jpg");
    }

    //var宣告變數
    //將 JQ 抓取的資料存放變數內（使用者的暫存記憶體內）
    //變數可重覆被使用，提高程式的執行效率

    var $DOG = $("#myDog");

    $DOG.on("mouseover", changeDog2);

    $DOG.on("mouseout", changeDog1);

    $DOG.on("click", changeDog3);

})