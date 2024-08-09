let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;
const winpatters=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        console.log("Box was clicked");
        if(turno==true){
        box.innerText="O";
        box.style.color="red";
        turno=false;
        }
        else{
            box.innerText="X";
            box.style.color="blue";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    })
})
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is: ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
    for(pattern of winpatters){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;


        if(pos1Val !="" && pos2Val!="" && pos3Val!="" ){
            if(pos1Val=== pos2Val && pos2Val ==pos3Val){
                console.log("winner",pos1Val);

                showWinner(pos1Val);
            }
        }
    }

};
const resetGame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");

}
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);