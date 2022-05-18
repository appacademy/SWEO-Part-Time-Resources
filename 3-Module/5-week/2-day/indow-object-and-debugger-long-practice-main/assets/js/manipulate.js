function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = 'Baylen Doss Portfolio'
}

function changeHeader() {
    // Change the name in the h1 of the page to your name
    // document.body.childNodes[1].childNodes[1].innerText = 'I am Baylen'
    // let headerDiv = document.body.children[0]
    // let h1 = headerDiv.children[0]
    // h1.innerText = 'george and sam'
    // let div = document.getElementById('header').children[0]
    // console.log(div)
    document.querySelector('h1').innerText = 'Baylen Doss'
    
}


function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    let p = document.querySelector('.section').children[1]
    p.innerText = "Hey I am baylen and I work at app academy"

    // Your code here
}

export {
    changeTitle, 
    changeHeader, 
    changeAboutMe
}