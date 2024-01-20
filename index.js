const boxes=document.querySelectorAll(".grid-item")

const newbtn=document.getElementsByClassName(".btn")

let currentplayer;
let gamegrid;

function init(){

     currentplayer="X";
     gamegrid=["","","","","","","","",""];

    boxes.forEach((box,index)=>{
        box.textContent="";
        box.classList = `box box${index+1} grid-item`;
        box.style.pointerEvents = "all";
    });



  
}

init();


const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// Handle Click Game 
function handleclick(index) {
    if (gamegrid[index] === "") {
        boxes[index].style.pointerEvents = "none";
        boxes[index].textContent = currentplayer;
        gamegrid[index] = currentplayer;
        swap();
      
        checkgameover();
    }
}




function checkgameover()
{

    winningPositions.forEach((position)=>{
        if((gamegrid[position[0]]!=="" || gamegrid[position[1]]!=="" || gamegrid[position[2]]!=="")&&(gamegrid[position[0]]===gamegrid[position[1]])&&(gamegrid[position[1]]===gamegrid[position[2]]) )
        {
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });


            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    })



}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleclick(index);
    });
});



function swap() {
    if(currentplayer==="X")
    {
        currentplayer="O";
    }
    else{
        currentplayer="X"
    }
};











