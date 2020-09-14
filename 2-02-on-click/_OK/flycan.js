$(function(){

    function doOne(){
        alert("我是拖鞋");
    }

    function doTwo(){
        alert("我是包包");
    }

    function doThree(){
        alert("我是蛋糕");
    }

    $("#picA").on("click", doOne);

    $("#picB").on("click", doTwo);

    $("#picC").on("click", doThree);

})


