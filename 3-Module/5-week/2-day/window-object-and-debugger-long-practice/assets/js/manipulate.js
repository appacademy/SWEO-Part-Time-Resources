export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    document.title = 'West Portfolio'
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    
    // Your code here
    const body = document.body
    body.children[0].children[0].innerText = 'West Coast Portfolio'
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    const firstChild = document.body.children[1]
    firstChild.children[1].innerText = 'Some cool phrase about me'
}