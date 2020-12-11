let button = document.getElementsByClassName("button");
let gridSize,gridArray = [0,0];
let container = document.getElementById("container");
let grid = document.getElementById("grid");
let gridContainner = document.getElementById("gridContainer");
let gridButton;
let countMine;
let buttonGrid = [""];
let nbMine = 0;
let nbMineFind = 0;
let j = 0;

gridContainner.style.display ="none";

for (let i = 0; i < button.length ; i++){
    button[i].addEventListener("click",function (){
        switch (i){
            case 0 :
               init(8,8,10);
        }
    })
}

/**
 *
 * @param x
 * @param y
 * @param nb
 */
function init(x,y,nb){
    gridSize = [x,y];
    nbMine = nb;
    container.style.display ="none";
    gridContainner.style.display ="flex";
    initGrid(gridSize);
    initGridArray();
    cartography();
}

for (let i = 0 ; i < gridButton.length ; i++){
    gridButton[i].addEventListener("click",function (){});
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
    gridButton = document.getElementsByClassName("gridButton");
}

/**
 * initialize the grid with the mines and the numerical values
 * corresponding to the mine around the box
 */
function initGridArray() {
    listInit();
    initMine();
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
    console.log(j);
    j++;
    if (gridArray[coord[0]][coord[1]] === val){
        coord[0] = Math.trunc(Math.random()*gridSize[0]);
        coord[1] = Math.trunc(Math.random()*gridSize[1]);
         return test(coord,val);
    }
    else {
        return coord;
    }
}

/*
function initMine () {
    let coord1 = Math.trunc (Math.random () * gridSize [0]);
    let coord2 = Math.trunc (Math.random () * gridSize [1]);
    laissez le jeton = faux;
    soit j = 0;
    pour (soit i = 0; i <nbMine; i ++) {
        console.log (coord1 + "" + coord2);
        gridArray [coord1] [coord2] = -1;
        jeton = vrai;
        while (jeton === true) {
            console.log (j);
            j ++
            coord1 = Math.trunc (Math.random () * gridSize [0]);
            coord2 = Math.trunc (Math.random () * gridSize [1]);
            token = gridArray [coord1] [coord2] === -1;
        }

    }
}*/


/**
 * allows to put the value of the number of mine around
 */
function cartography(){
    for (let i = 0 ; i < gridSize[0] ; i++){
        for (let j = 0 ; j < gridSize[1] ; j++){
            testAround(i,j);
        }
    }
}

/**
 * count the mines around a square
 * @param a
 * @param b
 */
function testAround(a,b){
    let nbMineAround = 0;
    if (a > 0 && b > 0 && gridArray[a-1][b-1] === -1){
        nbMineAround ++;
    }
    if (a > 0 && gridArray[a-1][b] === -1){
        nbMineAround ++;
    }
    if (a > 0 && gridArray[a-1][b+1] === -1){
        nbMineAround ++;
    }
    if (b > 0 && gridArray[a][b-1] === -1){
        nbMineAround ++;
    }
    if (gridArray[a][b+1] === -1){
        nbMineAround ++;
    }
    if (b > 0 && gridArray[a+1][b-1] === -1){
        nbMineAround ++;
    }
    if (gridArray[a+1][b] === -1){
        nbMineAround ++;
    }
    if (gridArray[a+1][b+1] === -1){
        nbMineAround ++;
    }
    gridArray[a][b] = nbMineAround;
}