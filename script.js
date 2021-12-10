const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    const drawingDivsCon = document.createElement("div");
    drawingDivsCon.setAttribute("style", "display: flex;")
    container.appendChild(drawingDivsCon);

    for (let i = 0; i < 16; i++) {
        const drawingDivs = document.createElement("div");
        drawingDivs.addEventListener('mouseover', () => {
            drawingDivs.setAttribute('style', "background-color: blue;");
        })
        
        drawingDivsCon.appendChild(drawingDivs);
    }
}




