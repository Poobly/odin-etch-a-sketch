const container = document.getElementById("container");
const resetGrid = document.getElementById("reset-grid");
const gridAmount = document.getElementById("grid-amount");


//document.body.onload = 
drawGrid();

function drawGrid(gridNum = 16) {
    for (let i = 0; i < gridNum; i++) {
        const drawingDivsCon = document.createElement("div");
        drawingDivsCon.setAttribute("style", "display: flex;")
        container.appendChild(drawingDivsCon);
    
        for (let i = 0; i < gridNum; i++) {
            const drawingDivs = document.createElement("div");
            drawingDivs.addEventListener("mouseover", () => {
                drawingDivs.setAttribute("class", "blue");
            })
            
            drawingDivsCon.appendChild(drawingDivs);
        }
    }
}

function reset() {
    const drawingDivs = document.getElementsByClassName("blue");
    for (let i = drawingDivs.length - 1; i >= 0; i--) {
        drawingDivs[i].removeAttribute("class");
    }
}
resetGrid.addEventListener("click", reset);

gridAmount.addEventListener("click", () => {
    let gridNum = parseInt(prompt("How many squares per side? (Under 100)"));
    console.log(gridNum);
    if (gridNum > 100 || !(Number.isInteger(gridNum))) {
        alert("You entered an invalid value");
        gridNum = 16;
    }
    else {
        delGrid()
        drawGrid(gridNum);

    }
})

function delGrid() {
    container.innerHTML = "";
}
