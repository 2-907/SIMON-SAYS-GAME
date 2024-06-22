let gamSeq = [];
let userSeq= [];
let gameStart = false;
let level =0;
let h2 = document.querySelector("h2");
let btns = ["red", "green", "yellow", "purple"];
let HighestScore =0;



document.addEventListener("keypress", function(){
    
    if (gameStart == false){

   console.log("game is started")     ;
   gameStart = true;
   levelup();
    }
})
function levelup(){
    userSeq= [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gamSeq.push(randomColor);
    console.log(gamSeq);
    // console.log(randomIdx); console.log(randomColor); console.log(randombtn);
    gameFlash(randombtn);
}
function gameFlash (btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);

}

function userFlash (btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);

}
let allbtns =document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click", btnPress);
}
function btnPress(){
   
    let btn = this;
   userFlash(btn);

   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}
function checkAns(idx){
    
    if (gamSeq[idx]=== userSeq[idx]){
        if (userSeq.length === gamSeq.length){
            setTimeout(levelup, 1000);
        }
    }else {
        h2.innerHTML =`Game Over! Your score was <b> ${level}  </b> <br> Press any key to start`;
        HighestScore = Math.max(HighestScore, level);
        
        document.querySelector("body").style.backgroundColor= "red";
        let p = document.createElement("p");
       
    document.querySelector("body").append(p);
    p.innerText =   `Your Highest Score was ${HighestScore}`;
    document.querySelector("body").addEventListener("keypress", function(){
        p.innerText = "";
    })
       

        setTimeout(function(){
          document.querySelector("body").style.backgroundColor= "white"; 
          
 
        }, 500);
        
       
      
        reset();
        
    }

}

function reset(){
 gamSeq= [];
 userSeq = [];
 gameStart = false;
 level = 0;


 
}








