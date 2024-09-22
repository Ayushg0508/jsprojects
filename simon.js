let gameseq=[]; //intially empty , used to store the random color flessed
let userseq=[]; //used to store the clor clicked and flessed by user
let highestscore=[0];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");


//step1

//here when any key is prssed from keyboard , our game will start and we will go to level 1

document.addEventListener("keypress",function(){   // whenever any key is pressed(while cursor is on our webpage(document)) ,game will satrt
    
    if(started==false){
        console.log("game started");   //will be printed in console
        started=true;

        levelUp();     //after pressing any key from keyboard, suddenly level 1 will be started(levelup)
    }
})


//step2 

//here in this step we are writing the code to generate random color by own for level 1 and flash the random button when in step 1(user press any key from keyboard ) or any particular button when after level 1 user press any particular button

function btnFlash(btn){             //this function is used to flash button
    btn.classList.add("flash");     //for flashing the button,we will change the color of the button to white for some seconds using flash class(defined in css file) and timeout function
    setTimeout(function(){ btn.classList.remove("flash");},250);
}

function levelUp(){
    userseq=[]; //whenever level is upped , user have to click the buttons from starting hencce user seq must be cleared
    level++;
    h2.innerText= `Level ${level}`; // displaying on webpage that on which level we are currently in

    // now we will genrate any random btn(color) which will flash
 
    let randomindex=Math.floor(Math.random()*3);  // generating random integer
    let randomColor=btns[randomindex];       // generating random color among elements of btns array
    let randombutton=document.querySelector(`.${randomColor}`); //selecting button associated with random color generated in previous line
    gameseq.push(randomColor); //pushing random color into gameseq array
    btnFlash(randombutton); //function is called to flash the random button
}

//step3

//now user will press any button that will be also flessed and match the game sequence and the user sequence

let allBtns=document.querySelectorAll(".btn");  //collection of all the buttons
for(btn of allBtns){
    btn.addEventListener("click",btnPress);  //whenever any button was clicked btnPess function will be called
}

function btnPress(){    // used to flash the pressed button
    let btn=this; //"this" is used to point the button which calss the function
    btnFlash(btn);

    usercolor=btn.getAttribute("id"); //accesing the color of the button which is pressed by user
    userseq.push(usercolor);

    check(userseq.length-1); //used to match last index of userseq
}

function check(index){

    if(userseq[index]==gameseq[index]){
        //console.log("same value");
        if(userseq.length==gameseq.length) //means if we are at last (we are clicking the last button and matching its color with game sequence last index)
        {
            setTimeout(levelUp,1000); //if whole sequence matched simply move to next level(after 1 sec) and generate a new random color
        }
//      else{
            //if we matching any midlle color than simply continue
//       }
    }
    else{
        //game over
        highestscore.push(level);
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> press any key to start <br> your hishest score is ${Math.max(...highestscore)}`; //gamescore will be same as level no
        document.querySelector("body").style.backgroundColor="red";  // set bg clor og webpage to red for minor seconds when game gets over
        setTimeout(function(){document.querySelector("body").style.backgroundColor="white";},150);
        reset(); // if game over we have to start from starting for that we have to reset all
    }
}


function reset(){
    gameseq=[]; 
    userseq=[]; 
    started=false;
    level=0;
}






