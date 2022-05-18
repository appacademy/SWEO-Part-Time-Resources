export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    // console.log(document)
    document.title = "Baylen Doss portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    // Your code here
    // document.body.children[0].children[0].innerText = "Baylen Doss"
    // document.getElementsByTagName('h1')[0].innerText = "Scotty Wong"
    // document.getElementById('header').firstChild
    let h1 = document.querySelector('h1')
    h1.innerText = "Baylen Doss"
    h1.style.color = 'green'

}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    let div = document.querySelector('.section').children[1]
    div.innerText = 'HEY my name is baylen and I work at app academy'
}




const test =() => {
    [1,2,3,4,5,6,7,8].forEach(el => {
        let something = 'hey'
        something = 'new1'
        something = 'new2'
        something = 'new3'
        if(true){
            console.log(el)
        }
    })
}