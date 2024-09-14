let gameSeq=[];
let userSeq=[];

let isStarted = false;
let level = 0;


let h2 = document.querySelector("h2");

let btnArray = ["red","yellow","green","purple"];


document.addEventListener("keypress", function(){
    if(isStarted == false){
        //console.log("Game Started");
        isStarted = true; 
        levelUp();
    }
})

let gameFlash = function(btn){
    btn.classList.add("flash");
    setTimeout(function (){
       btn.classList.remove("flash");
    }, 250);
}

let userFlash = function(btn){
    btn.classList.add("black");
    setTimeout(() => {
       btn.classList.remove("black");
    }, 250);

}


let levelUp = function(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;

    let rndIndx = Math.floor(Math.random() * 3);
    let rndColor = btnArray[rndIndx];
    gameSeq.push(rndColor);
    console.log(gameSeq);
    let rndBtn = document.querySelector(`.${rndColor}`);
    //console.log(rndIndx);
    //console.log(rndColor);
    //console.log(rndBtn);
    gameFlash(rndBtn);
}

function checkSeq(idx){
    //console.log("user called");
    //let idx = level-1;
    if(gameSeq[idx]=== userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
            //console.log("Good play");
        }
    }else{
        h2.innerHTML = `Game Over!! your score was <b>${level}</b></br>please press any key to Restart!!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

let btnPress = function(){
    //console.log("Button was pressed");
    let btn = this;
    //console.dir(btn);
    userFlash(btn);
    let userBtnColor = btn.getAttribute("id");
    userSeq.push(userBtnColor);
    //console.log(userSeq);
    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset(){
    isStarted = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}