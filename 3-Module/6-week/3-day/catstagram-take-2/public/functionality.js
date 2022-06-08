export async function createImageFunctionality(flag=false) {
    // fetching from the cat api
    let catFetch = await fetch('https://api.thecatapi.com/v1/images/search')
    // parse the json from the request
    let json = await catFetch.json()
    // get the url from the json
    let url = json[0].url
    if(localStorage.getItem('url') && !flag){
        url = localStorage.getItem('url')
    }else{
        localStorage.setItem('url', url)
    }

    //grab the image by the id
    let img = document.getElementById('main-img')
    // we need to set the src attribute to the url
    img.setAttribute('src', url)
}
export async function newCatButtonFunctionality() {
    // first we need to grab the new cat button by the iD
    let newCatButton = document.getElementById('new-cat-button')
    // add a click listener to the button
    newCatButton.addEventListener('click', e => {
        createImageFunctionality(true)
    })
}
export function createVoteFunctionality() {
    // grabbing both up and downvote buttons by their ID
    let up = document.getElementById('upvote-button')
    let down = document.getElementById('downvote-button')
    let total = document.getElementById('total-votes')

    // adding a click listener to the up and down vot buttons
    // one to increase the p tags inner text by one
    // one to decrease the same number
    up.addEventListener('click', e => {
        localStorage.setItem('votes', Number(localStorage.getItem('votes')) + 1)
        total.innerText = `${localStorage.getItem('votes')}`
    })
    down.addEventListener('click', e => {
        if(total.innerText === '0'){
            return
        }
        localStorage.setItem('votes', Number(localStorage.getItem('votes')) - 1)
        total.innerText = `${localStorage.getItem('votes')}`
    })

}
export function createCommentFormFunctionality() {
    // grabbing the form by the ID
    let form = document.getElementById('comment-form')

    // add a listener to the form
    form.addEventListener('submit', e => {
        // prevent the default of the page reloading 
        e.preventDefault()
        // grab the input value, so that we can add a new comment to the comment section
        let val = document.getElementById('comment-input').value
        // grab the comment section to append to
        let commentSection = document.getElementById('comment-section')
        // create anew div, give it a class and inner text
        let div = document.createElement('div')
        div.classList.add('single-comment')
        div.innerText = val
        // append the new comment to the comment section
        commentSection.appendChild(div)
        // grabbing the array of comments from local storage
        let commentArr = JSON.parse(localStorage.getItem('comments'))
        // pushing the new comment into the array
        commentArr.push(val)
        //update local storage
        localStorage.setItem('comments', JSON.stringify(commentArr))
        // reset the value of the input to an empty string
        document.getElementById('comment-input').value = ''
    })
}
export function createCommentSectionFunctionality() {
    if(!localStorage.getItem('comments')){
        localStorage.setItem('comments', JSON.stringify([]))
    }else{
        JSON.parse(localStorage.getItem('comments')).forEach(el => {
        let commentSection = document.getElementById('comment-section')
        // create anew div, give it a class and inner text
        let div = document.createElement('div')
        div.classList.add('single-comment')
        div.innerText = el
        // append the new comment to the comment section
        commentSection.appendChild(div)
        })
    }
}