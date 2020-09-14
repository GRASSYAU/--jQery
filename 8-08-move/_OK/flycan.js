var BRO = 0; //兄弟
var POS = 0; //座標
var PIC_W = 256; //一張小圖的寬度 

$("#LEFT").click(function() {
    if (BRO < 20) {
        BRO += 1;
        POS = BRO * PIC_W * -1;
        $("#PIC ul").stop(true, false).animate({ left: POS }, 300);
    }
});

$("#RIGHT").click(function() {
    if (BRO > 0) {
        BRO -= 1;
        POS = BRO * PIC_W * -1;
        $("#PIC ul").stop(true, false).animate({ left: POS }, 300);
    }
});

