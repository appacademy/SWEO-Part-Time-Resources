window.onload = () => {
    // let h1 = document.getElementsByTagName('h1');

    // setTimeout(() => {
    //     h1[0].innerText = 'WOOOOO';
    //     h1[0].style.display = 'none';
    // }, 2000)

    //CREATE THE TAG
   setTimeout(() => {
    const newElement = document.createElement('h2');

    //IF YOU WANT ATTRIBUTES SET THEM
    newElement.setAttribute('id', 'h2guy');

    //CREATE THE CONTENT OF THE TAG
    const content = document.createTextNode('Beep boop beep');

    //PUT CONTENT INTO THE TAG
    newElement.appendChild(content);

    //PUT THIS ELEMENT INTO A NODE ON THE TREE
    document.body.appendChild(newElement);
   }, 2000)
};
