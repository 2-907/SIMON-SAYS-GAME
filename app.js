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


// let h2= document.querySelector("h2");
// let started= false;
// let level =0;
// let gameSeq=[];
// let userSeq=[];
// let btns = ["yellow","green","red","blue"];
// let HighestScore=0;


// document.addEventListener("keypress", function(){
//     if(started==false){
//         console.log("game is started");
//        started=true;
       
//         levelUp();
//     }


// });
// function gameFlash(btn){
//     btn.classList.add("gameflash");
//     setTimeout(()=>{
//         btn.classList.remove("gameflash");
//     },250);
// }
// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(()=>{
//         btn.classList.remove("userflash");
//     },250);
// }
// function levelUp(){
//     userSeq=[];
//     level++;
//     h2.innerText= `Level ${level}`;
//     let randomIdx= Math.floor(Math.random()*4);
//     let color= btns[randomIdx];
//     gameSeq.push(color);
//     console.log("game seq",gameSeq);
//     let randomBtn= document.querySelector(`.${color}`);
//     gameFlash(randomBtn);

// }
// function checkAns(idx){
//     if(userSeq[idx]==gameSeq[idx]){
//         if(userSeq.length== gameSeq.length){
//             setTimeout(levelUp,1000);
//         }
//     }else{
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start the game`;
//         HighestScore = Math.max(HighestScore,level);
//         let p = document.createElement("p");
//         (document.querySelector("body")).append(p);
//         p.innerText= `Your highest score was ${HighestScore}`;
//         setTimeout(function(){
//             p.innerText="";
//         },1000);
//         (document.querySelector("body")).classList.add("wrong");
//         setTimeout(()=>{
//             (document.querySelector("body")).classList.remove("wrong");
//         },1000)
//         reset();
//     }
// }
// function btnPress(){
//     let btn= this;
//     let color = btn.getAttribute("id");
//     userSeq.push(color);
//     console.log("user sq",userSeq )
//     userFlash(btn);
//     checkAns(userSeq.length-1);

// }
// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns){
//     btn.addEventListener("click", btnPress);
// }
// function reset(){
//     started= false;
//     gameSeq=[];
//     userSeq=[];
//     level=0;
// }









