$(function() {
    // sem budeme písať jQuery kód
});

//* 25. Výběr elementů: Potomci a rodiče
//?  .find("li") = z #list nájdi všetky li a zmeň im farbu
//?  miesto .find vieme použiť .children .parent . parents (obalí všetkých rodičov)
//!  $("li:first").parent("") zafarbí li 1 a . parent zoberie celé ul a zafarbí ho 

$(function() {
    $("li:first").parent("").css("background-color","rgba(150,150,40,0.8");
});
