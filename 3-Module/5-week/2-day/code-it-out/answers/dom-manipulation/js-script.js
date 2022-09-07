// 1) One of the the properties of the window object is `window.document` which allows us to access the Document Object Model, AKA our HTML page. 
// 2) Try this out in the browser's console; enter: `window.document.body` on any website and what did you get? (ignore the ``)
// 3) now try: `window.document.body.children` and `document.body.children`
// 4) finally try: `document.body.children[1]`


// Now add your answer here to follow the instructions.md
window.onload = ()=>{
    const h1 = window.document.body.children[0];
    h1.innerText = "code-it-out: Simple DOM manipulation";
    const ul = window.document.body.children[3];
    const li = ul.children[0];
    li.innerText = "April Cohort";
    
}