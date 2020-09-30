let bro = 0;
let box_li = $("#box li");

function gogo() {
  box_li.fadeOut();

  if (bro < 5) {
    bro++;
  } else {
    bro = 0;
  }

  box_li.eq(bro).fadeIn();
}

setInterval(gogo, 2000); //計時器 每兩秒執行一次這個函示
