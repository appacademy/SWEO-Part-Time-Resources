export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    window.document.title = 'East Coast Portfolio'
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    const body = document.body
    body.children[0].children[0].innerText = 'James Thompson'
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here

    const body = document.body
    body.children[1].children[1].innerText = 'Insert some cool text about james'
}

// export {changeTitle, changeHeader, changeAboutMe}