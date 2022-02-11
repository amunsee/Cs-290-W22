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

//changes pic in array showing to next index
function pic_scroll_next(index, img_loc){
//tried to make the array global and use as a parameter for both pic_scroll_next/prev and 
//it was having issues passing this is the only work around i could get to work
    var images = ["dog.png", "pepper.png", "rex.jpg", "taco.jpg"];
    if(index < images.length-1){
        index[0]++;
    }

    document.getElementById("array-pic").src = `${img_loc}${images[index[0]]}`;
}

//changes pic in array showing to previous index
function pic_scroll_prev(index, img_loc){
    var images = ["dog.png", "pepper.png", "rex.jpg", "taco.jpg"];
    if(index > 0){
        index[0]--;
    }
    document.getElementById("array-pic").src = `${img_loc}${images[index]}`;
}


//populates object info in the box
function change_img(){
    document.getElementById("object_img").src = `${person.image}`;
    document.getElementById("object_img").style.margin = "0 0 0 20%";
    document.getElementById("object-text").innerHTML = text_block;
    document.getElementById("obj-button").style.margin = "0 0 0 25%"; 
}


//fills the empty box 1/10th on each click
function fill_box(clicks){
    let box = "box";
    box += clicks[0];

    if(clicks < 10){
        clicks[0] += 1;
    }
    
    console.log(box);
    document.getElementById(box).style.backgroundColor = "purple";
}

//shows picture when clicked
function lights_on(){
    document.getElementById("on-off").style.zIndex = "1";
    document.getElementById("on-off-pic").style.backgroundColor = "yellow";
}

//hides picture when clicked
function lights_off(){
    document.getElementById("on-off").style.zIndex = "-1";
    document.getElementById("on-off-pic").style.backgroundColor = "black";

}

//when box is clicked the surprised is shown (video)
function surprise(){
    console.log("hi");
    let vid = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FiIn1_nGI1M?autoplay=1" allow="autoplay"; allowfullscreen></iframe>`;
    console.log(vid);
    document.getElementById("surprise").style.margin = 0;
    document.getElementById("surprise").innerHTML = vid;
}

//onclick grabs input and creates your mad lib story
function generate_mad_libs(){
    let adjective1 = document.getElementById("adjective1").value;
    let adjective2 = document.getElementById("adjective2").value;
    let noun1 = document.getElementById("noun1").value;
    let noun2 = document.getElementById("noun2").value;
    let pluralnoun1 = document.getElementById("pluralnoun1").value;
    let game = document.getElementById("game").value;
    let pluralnoun2 = document.getElementById("pluralnoun2").value;
    let verb1 = document.getElementById("verb1").value;
    let verb2 = document.getElementById("verb2").value;
    let pluralnoun3 = document.getElementById("pluralnoun3").value;
    let verb3 = document.getElementById("verb3").value;
    let noun3 = document.getElementById("noun3").value;
    let plant = document.getElementById("plant").value;
    let bodypart = document.getElementById("bodypart").value;
    let place = document.getElementById("place").value;
    let verb4 = document.getElementById("verb4").value;
    let adjective3 = document.getElementById("adjective3").value;
    let number = document.getElementById("number").value;
    let pluralnoun4 = document.getElementById("pluralnoun4").value;

    let game_output = `A vacation is when you take a trip to some ${adjective1} place with your ${adjective2} family. Usually you go to some place that is near a/an ${noun1} or up on a/an ${noun2}.\
      A good vacation place is one where you can ride ${pluralnoun1} or play ${game} or go hunting for ${pluralnoun2}. I like to spend my time ${verb1} or ${verb2}. When parents go on a vacation,\
       they spend their time eating three ${pluralnoun3} a day, and fathers play golf, and mothers sit around ${verb3}.Last summer, my little brother fell in a/an ${noun3} and got poison ${plant} \
       all over his ${bodypart} My family is going to go to (the) ${place} and I will practice ${verb4}.Parents need vacations more than kids because parents are always very ${adjective3}\
        and because they have to work ${number} hours every day all year making enough ${pluralnoun4} to pay for the vacation.`;

    document.getElementById("mad-lib-content").innerHTML = game_output;

}
