let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let turnX=true;
 let p= document.querySelector("p");
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            box.classList.add("x-color");
            turnX=false;
        }
        else{
            box.innerText="O"; 
            box.classList.add("o-color");
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("x-color", "o-color");
    }
}
const checkWinner=()=>{
    for(let i of winpatterns){
      let pos0=boxes[i[0]].innerText;
      let pos1=boxes[i[1]].innerText;
      let pos2=boxes[i[2]].innerText;
      if(pos0 !="" && pos1 !="" && pos2 !=""){
        if(pos0===pos1 && pos1===pos2){
          
           p.append("Congratulations! Winner is ",pos0);
           disableboxes();
           return;
        }
      }
    }
};
const resetgame=()=>{
    turnx=true;
    enableboxes();
    p.innerText="";
}
resetbtn.addEventListener("click",resetgame);