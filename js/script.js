$(function() {
    // sem budeme písať jQuery kód
});

//* 14. Začínáme s animacemi
$(function() {
    $(".red-box").animate({});
});

$(function() {
    $(".red-box").animate({
        "margin-left":"250px", // posunie z default na 250px 
        "margin-left":"+=400px" // default je 50 vďaka += posunie z 50 na 450px 
        
    },4000); //? čas sa nastavuje medzi zátvorkami 
});