$(function() {
    // sem budeme písať jQuery kód
});

//* 30. html DOM  
// TODO: $("ul").append
//?  prečítalo html potom js a zistilo že v ul má appendnúť čiže pridať ďalší element s textom Pridanie polžky....
//!   

$(function() {
    $("ul").append("<li>Pridanie položky li cez js v html nie je</li>");
    //! iný zápis rovnaký výsledok 
    $("<li>Pridanie položky li cez js v html nie je</li>").appendTo($("ul"));
});


