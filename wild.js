var hasBow = false;
var hasPhaser = false;

// code starts here
$(document).ready(function(){

    updateNarrative(N1);
    $("footer").html(createButton("button1", O1) + createButton("button2", O2)+ createButton("button3", "not used"));
    $("#button3").hide();

    $("#button1").click(function(){

        if($("#button1").text() === O1){
            updateNarrative(N2)
            $("#button1").text(O3);
            $("#button2").text(O4);
            $("#button3").text(O5);
            $("#button3").show();
        }
        else if ($("#button1").text()=== O3){
            updateNarrative(N5);
            $("#button1").text(O81);
        }
    })

    $("#button2").click(function(){
        if($("#button2").text()===O2){
            updateNarrative(N3);
            $("#button1").text(O6);
            $("#button2").text(O7);
        }
        else if($("#button2").text()=== O7){
            updateNarrative(N6);
            $("#button2").text(O82);
            $("#button1").hide();
        }


    })

    $("#button3").click(function(){
        if($("#button3").text()===O5){
            updateNarrative(N6);
            $("#button1").text(O81);
            $("#button2").text(O82);
            $("#button3").hide();
        }
        else if($("#button2").text()=== O7){
            updateNarrative(N6);
            $("#button2").text(O82);
            $("#button1").text(O81);
        }
    })

})


var N1 = "Once upon a time in the wild wild west there lived a ..."
var N2 = "This ranger was the most dnagerous archer known to man. He loved to ..."
var N3 = "This robot had killer instincts. Purge the Wild West of all evil-doers. Armed with a phaser, he ..."
var N5 = "The ranger approaches the insidious Mr. Pig. He raises his bow and ..."
var N6 = "The robot approaches the insidious Mr. Pig. He raises his phaser and ..."
var O1 = "ranger."
var O2 = "robot."
var O3 = "chase tumbleweeds4."
var O4 = "cook pancakes."
var O5 = "arrest bad robots."
var O6 = "heats his pork and beans"
var O7 = "purges the Wild West of all evil-doers."
var O81 = "shoots the arrow through Mr. Pig."
var O82 = "fires, vaporizing Mr. Pig."

var updateNarrative = function(a){

    $("article").text(a);
}


var createButton = function(id, text){

    $("footer").html();
    return "<button type=button id=" + id + ">" + text + "</button>" ;
}
