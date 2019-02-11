$(document).ready(function(){

    updateNarrative("Hello");
    $("footer").html(createButton("option1", O1) + createButton("option2", O2));

    $("#option1").click(function(){
        updateNarrative(N2);
        $("footer").html(createButton("option3", O1) + createButton("option4", O2) + createButton("option5", O5));
    })
})

var N1 = "Once upon a time in the wild wild west there lived a ..."
var N2 = "this ranger was the most dnagerous gunslinger known to man. He loved to ..."
var O1 = "ranger."
var O2 = "robot."
var O3 = "kill robots."
var O4 = "cook pancakes."
var O5 = "arrest bad robots."

var updateNarrative = function(a){

    $("article").text(a);
}


var createButton = function(id, text){

    $("footer").html();
    return "<button type=button id=" + id + ">" + text + "</button>" ;
}
