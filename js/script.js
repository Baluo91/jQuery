$(function() {
    // sem budeme písať jQuery kód
});

//* 11. Nauč se jQuery a rozpohybuj webové stránky - FadeTo a průhlednost, rozdíl FadeTo a FadeOut

$(function() {
    // $(".red-box").fadeTo(2000, 0.0) // zmizne ale na pozadí akoby je

    // $(".red-box").fadeOut(2000) // zmizne (aj na pozadí) a posunie ostatné.
    // $(".red-box").fadeIn(2000) // objaví sa a posunie ostatné.

    // $(".red-box").fadeOut(2000), fadeIn(2000); // kratší zápis

    // $(".red-box").fadeToggle(2000), fadeToggle(2000); // toggle - prepínač - východzí stav toggle prepne a ďalší toggle ho prepne tiež.

    // $(".red-box").hide(2000); //box sa skríva po dobu 2 sekúnd
    // $(".red-box").show(2000); //box sa zobrazuje po dobu 2 sekúnd
    //? to isté, ako hide a show spraví nasledujúci zápis : 
    // $(".red-box").toggle(2000)
    // $(".red-box").toggle(2000)

    //* 13. - SlideUp, slideDown a slideToggle
    $(".red-box").slideUp(2000);
    $(".red-box").slideDown(2000);
    $(".blue-box").slideUp(3000);
    $(".blue-box").slideDown(3000);
    $(".green-box").slideUp(4000);
    $(".green-box").slideDown(4000);

    $(".green-box").slideToggle(4000); //? toggle to isté ako up down

    $("p").hide();
    $("p").slideDown(1000);
});
