export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    document.title = "Alan's Portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    const header = document.querySelector('#header > h1');

    header.innerText = 'I am Alan DeLeon'
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    const about = document.querySelector('.section > h2+p');

    about.innerText = 'Hello I like playing golf and playing video games!'
}
