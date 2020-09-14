$(function(){

    function changeDog1(){
       $(this).attr("src", "images/001.jpg"); 
    }

    function changeDog2(){
        $(this).attr("src", "images/002.jpg");
    }

    function changeDog3(){
        $(this).attr("src", "images/003.jpg");
    }

    $("#myDog").on("mouseover", changeDog2);

    $("#myDog").on("mouseout", changeDog1);
    
    $("#myDog").on("click", changeDog3);

})