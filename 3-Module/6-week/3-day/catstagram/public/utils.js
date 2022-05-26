export const createH1  = () => {
    // creating an h1 element
    let h1 = document.createElement('h1')
    h1.innerText = 'Kitten Pic'
    document.body.appendChild(h1)
}

export const getCat = async () => {
    // fetching the cat image froim the api
    let image = await fetch('https://api.thecatapi.com/v1/images/search')
    // resolving the json out of it
    image = await image.json()
    // returning the url
    return image[0].url
}

export const createImage = (url) => {
    // creating an image and setting the href to the passed in yrl
    let img = document.createElement('img')
    img.setAttribute('src', url)
    img.setAttribute('id', 'image')
    // appending that image to the body of our webpage
    let div = document.createElement('div')
    
    div.innerHTML =`
    <div id='vote-div' class='vote-container'>
        <div class='button-container'>
            <button id='upvote'>upvote</button>
            <button id='downvote'>downvote</button>
        </div>
        <div class='vote-container'>
            <p id='vote-count'>0<p>
        </div>
    </div>
    `
    document.body.appendChild(img)
    document.body.appendChild(div)
    voteFunc()
}

export const createNewCatBUtton = () => {
    // creating a button on the webPage
    // add an even listener for click
    // reload the webpage when we click the get new button

    let button = document.createElement('button')
    button.innerText = 'get new cat'
    button.style.marginBottom = '10px'
    button.addEventListener('click', e => {
        location.reload()
    })
    document.body.appendChild(button)
}

function voteFunc (){
    let upvote = document.getElementById('upvote')
    let downvote = document.getElementById('downvote')
    let numberOfVotes = document.getElementById('vote-count')

    upvote.addEventListener('click', e => {
        numberOfVotes.innerText = `${Number(numberOfVotes.innerText)+1}`
    })

    downvote.addEventListener('click', e => {
        numberOfVotes.innerText = `${Number(numberOfVotes.innerText)-1}`
    })
    commentSection()
}

function commentSection (){
    let voteDiv = document.getElementById('vote-div')
    let comments = document.createElement('div')

    comments.innerHTML = 
    `
    <form id='form'>
    <h1>Add a comment Below</h1>
    <input type='text' id='comment' />
    <button type='submit'>Submit</button>
    </form>

    <div class='comment-section' id='comment-section'>
    
    <div>
    `
    voteDiv.appendChild(comments)

    let form = document.getElementById('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        let comment  = document.createElement('div')
        comment.classList.add('comment')
        comment.innerText = document.getElementById('comment').value
        document.getElementById('comment').value = ''
        document.getElementById('comment-section').appendChild(comment)
    })


}
