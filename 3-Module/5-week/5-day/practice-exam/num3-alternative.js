const plusSquares = [...document.getElementsByClassName("plus")];
   plusSquares.forEach((square) => {
    const plusStyle = window.getComputedStyle(square);
    const originalWidth = plusStyle.width;
    const originalFontSize = plusStyle.fontSize;
    const plusWidth = (String(2 * (Number(originalWidth.slice(0, 2)))) + "px");
    const plusFontSize = ((2 * Number(originalFontSize.slice(0, 2))) + "px");
    square.style.width = plusWidth;
    square.style.fontSize = plusFontSize;
   });
