$(function() {
    // sem budeme písať jQuery kód
});

//* 26. Výběr elementů: siblings & nadpisy
//?  .siblings("") vyberie siblings na rovnakej úrovni (všetky div, p, ul ...)
//?  .siblings("p") vyberie siblings p
//!   .siblings(":header") vyberie všetky nadpisy h1 h2 ...

$(function() {
    $("#list").siblings(":header").css("background-color","rgba(150,150,40,0.8");
});
