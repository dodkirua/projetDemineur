let button = document.getElementsByClassName("button");
let gridSize,gridArray = [0,0];
let container = document.getElementById("container");
let grid = document.getElementById("grid");
let gridContainner = document.getElementById("gridContainer");
let countMine;
let buttonGrid;
let nbMine = 0;
let nbMineFind = 0;


gridContainner.style.display ="none";

for (let i = 0; i < button.length ; i++){
    button[i].addEventListener("click",function (){
        switch (i){
            case 0 :
                gridSize = [8,8];
                nbMine = 10;
                container.style.display ="none";
                gridContainner.style.display ="flex";
                nbMine = 10;
                initGrid(gridSize);
                initGridArray();
        }
    })
}

function initGrid(gridInit){
   let  box;
   for (let i = 0 ; i < gridInit[0]*gridInit[1] ; i++){
       box = document.createElement("div");
       box.className = "gridButton";
       box.style.width = Math.trunc(100/gridInit[1])+"%";
       box.style.height = Math.trunc(100/gridInit[0])+"%";
       grid.append(box);

   }
    buttonGrid = gridContainner.getElementsByTagName("button");
    countMine = gridContainner.getElementsByTagName("span");
    countMine[0].innerHTML = nbMineFind+"";
    countMine[1].innerHTML = nbMine;
}

/**
 * initialize the grid with the mines and the numerical values
 * corresponding to the mine around the box
 */
function initGridArray() {
    listInit();
    initMine();
    console.log(gridArray);

}
/**
 * Array initialise
 */
function listInit() {
    let i;
    let list = [];
    let list2 = [];

    for (i = 0 ; i < gridSize[1] ; i++){
        list.push("0");
    }
    for (i = 0 ; i < gridSize[0]; i++){
        list2.push(list);
    }
    gridArray = list2;
}

function initMine(){
    let coord = [Math.trunc(Math.random()*gridSize[0]),Math.trunc(Math.random()*gridSize[1])];

    for (let i = 0 ; i < nbMine ; i++){
        console.log(coord[0]+" "+coord[1]);
        gridArray[coord[0]][coord[1]] = -1;
        coord = test(coord,-1);

    }
}

/**
 * returns coordinates where there is no value of parameter 3
 * @param coord
 * @param val
 * @returns {*}
 */
function test(coord, val){
    if (gridArray[coord[0]][coord[1]] === val){
        coord[0] = Math.trunc(Math.random()*gridSize[0]);
        coord[1] = Math.trunc(Math.random()*gridSize[1]);
         return test(coord,val);
    }
    else {
        return coord;
    }
}