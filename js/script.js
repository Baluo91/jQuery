$(function() {
    // sem budeme písať jQuery kód
});

//* 23. Výběr elementů: běžný tagu, class a id - prvý a posledný element - párne a nepárne
//? ako vybrať z li elementov napr. ten nepárny?
//! $("li:even") alebo párny $("li:odd")

$(function() {
    $("li:odd").css("background-color","rgba(150,150,40,0.8)");
    
});
