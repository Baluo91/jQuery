$(function() {
    // sem budeme písať jQuery kód
});

//* 20. Callback funkce 
// volá sa , keď animácie skončia

// $(function() {
//     $(".red-box").fadeTo(2000,0,function(){
//         alert("Toto sa stane po animácii");
//     });
// });

//? tento zápis - najprv red box fadeTo a po ňom blue box
//* používame call back funkciu aj miesto delay. 
//* pred poslednou  zátvorkou ) pridáme ,function(){ a sem píšeme ďalšiu --- $(".red-box").fadeTo(2000,0,function(){}  */
$(function() {
    $(".red-box").fadeTo(2000,0,function(){
        $(".blue-box").fadeTo(2000,0,function(){
            $(".green-box").fadeTo(2000,0);
        });
    });
});

//! všetky 3 boxy postupne zmiznú - fadeTo 
