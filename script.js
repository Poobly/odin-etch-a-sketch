const container = document.getElementById("container");
const resetGrid = document.getElementById("reset-grid");
const gridAmount = document.getElementById("grid-amount");


drawGrid();


function drawGrid(gridNum = 16) {
    for (let i = 0; i < gridNum; i++) {
        const drawingDivsCon = document.createElement("div");
        drawingDivsCon.setAttribute("style", "display: flex")
        container.appendChild(drawingDivsCon);
    
        for (let i = 0; i < gridNum; i++) {
            const drawingDivs = document.createElement("div");
            drawingDivs.addEventListener("mouseover", (e) => {
                drawingDivs.setAttribute("class", "blue");
                darkness(e);
            })
            
            drawingDivsCon.appendChild(drawingDivs);
        }
    }
}

function darkness(e) {
    let re = /\d+/g;
    let element = getComputedStyle(e.target).getPropertyValue("background-color");
    let colour = Number(element.match(re)[2]);
    colour -= 0.1 * 255;
    e.target.style.backgroundColor = `rgb( 0, 0, ${colour})`;
}



function reset() {
    const drawingDivs = document.querySelectorAll("#container > div > div");
    for (let i = drawingDivs.length - 1; i >= 0; i--) {
        drawingDivs[i].removeAttribute("class");
        drawingDivs[i].style.removeProperty("background-color");
    }
}
resetGrid.addEventListener("click", reset);

gridAmount.addEventListener("click", () => {
    let gridNum = parseInt(prompt("How many squares per side? (Under 100)"));
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
