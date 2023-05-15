document.addEventListener("DOMContentLoaded", () => {
 const container = document.createElement("div"); // make container
 container.id = "container";
 document.body.appendChild(container);

  for (let i = 0; i < 256; i++) // make square
    {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);

      square.addEventListener("mouseover", () => {
        square.classList.add("hovered")
      });
    }

  const button = document.createElement("button"); // declare Button
  button.textContent = "Button";
  document.body.insertBefore(button, container);
  
  
  button.addEventListener("click", () => {
    let squarePerSide = prompt("Enter number of squares per side (max 100):");//click event content
    squarePerSide = Math.min(Math.max(parseInt(squarePerSide), 1), 100);
    const newGridSize = 960;
    const squareSize = newGridSize / squarePerSide;

    while(container.firstChild){ //after click prompt remove old squre
      container.removeChild(container.firstChild);
    }
  
    for(let i = 1; i <= squarePerSide ** 2; i++) // make new grid and squre
      {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
  
        square.addEventListener("mouseover", () => {
          square.classList.add("hovered");
        })
  
        square.style.width = `calc(100% / ${squarePerSide})`;
        square.style.height = `calc(100% / ${squarePerSide})`;
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid black"

      }
  });

});