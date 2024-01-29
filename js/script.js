$(function() {
    // sem budeme písať jQuery kód
});

//* 28. Výběr elementů: filter - modulo 
// TODO: zbytok po celočíselnom delení 
/*
5 modulo 2 = 1 (2 sa zmestí do 5 2x a ostane 1)
6 modulo 2 = 2 (2 sa zmestí do 6 3x a ostane 0)
12 modulo 5 = 2 (5 sa zmestí do 12 2x a ostane 2)
14 modulo 5 = 4 (5 sa zmestí do 14 2x a ostane 4)
*/
//?   modulo sa označuje znakom % 6 % 2 = 0
//?   
//!   

$(function() {
    $("li").filter(function(index){
        return index % 2 === 0;
    }).css("background-color","rgba(150,150,40,0.8");
});


