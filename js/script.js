$(function() {
    // sem budeme písať jQuery kód
});

//* 31.  DOM a HTML: Append a prepend
// TODO: $("ul").prepend     $("ul").append
//?  
//!   
/* append = pridaj za */
/* prepend = pridaj pred */

$(function() {
    $("ul").prepend("<li>Ja som tu prvý</li>");
    $("ul").append("<li>Ja som tu posledný</li>");
});


