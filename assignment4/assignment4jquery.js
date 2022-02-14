let person = {image: "assignment4pics\\kirby.jpg", name: "kirby", age: "unknown", occupation: "fight king dedede"};

let text_block = 
`Name: ${person.name}<br>\
Occupation: ${person.occupation}<br>\
Birthday: ${person.age}<br>`;

let clicks = [1];

let img_loc = "assignment4pics\\";


const index = [0];

alert("hello");

let move_on = false;
while(move_on == false){
    move_on = confirm("will you give me an A on this assignment?")
}

$(document).ready(function(){

    $(".prev").click(function(){
        var images = ["dog.png", "pepper.png", "rex.jpg", "taco.jpg"];
        if(index > 0){
            index[0]--;
        }
        $("#array-pic").attr("src",`${img_loc}${images[index]}`);
    });

    $(".next").click(function(){
        var images = ["dog.png", "pepper.png", "rex.jpg", "taco.jpg"];
        if(index < images.length-1){
            index[0]++;
        }

        $("#array-pic").attr("src",`${img_loc}${images[index]}`);
    });
 

    $("#button-right").click(function(){
        $("#on-off").hide();
        $("#on-off-pic").css("background-color", "black");
    });

    $("#button-left").click(function(){
        $("#on-off").show();
        $("#on-off-pic").css("background-color", "yellow");
    });

    $("#fill-box").click(function(){
        let box = "box";
        box += clicks[0];

        if(clicks < 10){
            clicks[0] += 1;
        }
        $("#" + box).css("background-color", "purple");
    });

    $("#obj-button").click(function(){
        $("#object_img").attr("src", `${person.image}`).css("margin", "0 0 0 20%");
        $("#object-text").html(text_block);
        $("#obj-button").css("margin", "0 0 0 25%");
    });

    $("#click-me-pic").click(function(){
        let vid = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FiIn1_nGI1M?autoplay=1" allow="autoplay"; allowfullscreen></iframe>`;
        $("#surprise").remove();//remove p
        $("#click-me-pic").append(vid);//add video
    });

    $("#mad-button").click(function(){
        let adjective1 = $("#adjective1").val();
        let adjective2 = $("#adjective2").val();
        let noun1 = $("#noun1").val();
        let noun2 = $("#noun2").val();
        let pluralnoun1 = $("#pluralnoun1").val();
        let game = $("#game").val();
        let pluralnoun2 = $("#pluralnoun2").val();
        let verb1 = $("#verb1").val();
        let verb2 = $("#verb2").val();
        let pluralnoun3 = $("#pluralnoun3").val();
        let verb3 = $("#verb3").val();
        let noun3 = $("#noun3").val();
        let plant = $("#plant").val();
        let bodypart = $("#bodypart").val();
        let place = $("#place").val();
        let verb4 = $("#verb4").val();
        let adjective3 = $("#adjective3").val();
        let number = $("#number").value;
        let pluralnoun4 = $("#pluralnoun4").val();

        let game_output = `A vacation is when you take a trip to some ${adjective1} place with your ${adjective2} family. Usually you go to some place that is near a/an ${noun1} or up on a/an ${noun2}.\
      A good vacation place is one where you can ride ${pluralnoun1} or play ${game} or go hunting for ${pluralnoun2}. I like to spend my time ${verb1} or ${verb2}. When parents go on a vacation,\
       they spend their time eating three ${pluralnoun3} a day, and fathers play golf, and mothers sit around ${verb3}.Last summer, my little brother fell in a/an ${noun3} and got poison ${plant} \
       all over his ${bodypart} My family is going to go to (the) ${place} and I will practice ${verb4}.Parents need vacations more than kids because parents are always very ${adjective3}\
        and because they have to work ${number} hours every day all year making enough ${pluralnoun4} to pay for the vacation.`;

        $("#mad-lib-content").html(game_output);
    });

  
});

