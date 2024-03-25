let boxes=document.querySelectorAll(".sai");
let rstbtn=document.querySelector("#sa");
let nexbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
let winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    msg.innerText="winner is"+winner;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkwinner=()=>{
    for( let pattern of winpatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!=""&&val2!="",val3!=""){
            if(val1===val2&&val2===val3){
                console.log("winner",val1);
                showwinner(val1);
            }
        }
    }
}
nexbtn.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);