export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    window.document.title = "My Portfolio";
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    const body = document.body;
    const header = body.children[0]
    const h1 = header.children[0]
    h1.innerText = "I am (your name)";
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    const body = document.body;
    const aboutMe = body.children[1];
    const firstParagraph = aboutMe.children[1];
    firstParagraph.innerText = "Insert some cool facts about yourself here";
}