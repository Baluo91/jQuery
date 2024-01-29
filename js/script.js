$(function() {
    // sem budeme písať jQuery kód
});

//* 26. Výběr elementů: next a preview 
//?   $("li:first").next() - vyberie druhý li element
//?   $("li:last").prev() - vyberie predposledný li element
//!   

$(function() {
    // $("li:last").prev().css("background-color","rgba(150,150,40,0.8");
    $("li:last").prev().next().css("background-color","rgba(150,150,40,0.8"); // dá sa to aj reťaziť = .prev().next()
});
