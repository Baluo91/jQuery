$(function() {
    // sem budeme písať jQuery kód
});

//* 14. Začínáme s animacemi
$(function() {
    $(".red-box").animate({});
});

$(function() {
    $(".blue-box").animate({
        "margin-left":"+=400px" // posunie z default na 400px 
    },4000);
    
    $(".blue-box").animate({
        "margin-left":"-=400px" // vďaka -= posunie zo 400 na default
    },4000);
});