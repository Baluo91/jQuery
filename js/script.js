$(function() {
    // sem budeme písať jQuery kód
});

//* 18. Časování animací pomocí delay

$(function() {
    $(".red-box").fadeTo(1000,0.2); // 80% priehľadnosť
    $(".blue-box").delay(1000).fadeTo(1000,0.5); // .delay(1000) bude čakať 1 sekundu a potom sa prevedie animácia
    $(".green-box").delay(2000).fadeTo(1000,0.6); //.delay(2000) bude čakať 2 sekundy a potom sa prevedie animácia
});
/*opacity = nepriehľadnosť*/
