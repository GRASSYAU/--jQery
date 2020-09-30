let bro = 0; //宣告變數
let box_li = $("#box li");

box_li.click(function () {
  box_li.fadeOut(); //先讓圖片消失

  if (bro < 5) {
    //if判斷
    bro++;
  } else {
    bro = 0;
  }
  box_li.eq(bro).fadeIn();
});
