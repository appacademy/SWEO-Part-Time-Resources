export function createHeader (){
    // adding the main css class to the body
    document.body.classList.add('main-page')
    // crate the h1, and give it an ID and class
    let h1 = document.createElement('h1')
    // giving the h1 a class
    h1.classList.add('main-header')
    //giving the h1 an ID
    h1.setAttribute('id', 'main-header')
    // setting the text
    h1.innerText = 'Cat Webpage'
    // adding the h1 to the body
    document.body.appendChild(h1)
}

export function createIMG (){
    // create a div to hold the button and the image
    let imageContainer = document.createElement('div')
    imageContainer.classList.add('image-container')
    // create a get new Cat button
    let button = document.createElement('button')
    // give the button a class, ID, text
    button.classList.add('new-cat-button')
    button.setAttribute('id', 'new-cat-button')
    button.innerText = 'Click to see a new Cat!'
    // creating an IMG tag
    let img = document.createElement('img')
    // giving the img a class
    img.classList.add('main-img')
    // giving the img an ID
    img.setAttribute('id', 'main-img')
    // append the button to the container div
    imageContainer.appendChild(button)
    //append the image to the container
    imageContainer.appendChild(img)
    // add the div to the body
    document.body.appendChild(imageContainer)
}

export function createUpDownVote(){
    // creating the outer div
    let outerDiv = document.createElement('div')
    // giving the div a class
    outerDiv.classList.add('vote-outer-div')
    // give the outerDiv an ID
    outerDiv.setAttribute('id', 'vote-outer-div')
    // add the div to the body
    document.body.appendChild(outerDiv)
    // create inner div 1
    let innerDivOne = document.createElement('div')
    // give the inner div a class and ID
    innerDivOne.classList.add('inner-div-one')
    innerDivOne.setAttribute('id', 'inner-div-one')
    // create upvote button
    let upvoteButton = document.createElement('button')
    // give the button text
    upvoteButton.innerText = 'Upvote'
    // give it class and id
    upvoteButton.classList.add('upvote-button')
    upvoteButton.setAttribute('id', 'upvote-button')
    // create downvote button
    let downvoteButton = document.createElement('button')
    // give the button text
    downvoteButton.innerText = 'Downvote'
    // give it class and id
    downvoteButton.classList.add('downvote-button')
    downvoteButton.setAttribute('id', 'downvote-button')
    // create p tag to hold number of votes 
    let totalVotes = document.createElement('p')
    totalVotes.innerText = `${localStorage.getItem('votes') ? localStorage.getItem('votes') : 0}`
    // giving the p tag a class and ID
    totalVotes.classList.add('total-votes')
    totalVotes.setAttribute('id', 'total-votes')
    // do all of our appending
    // first append the inner div to the outer div
    outerDiv.appendChild(innerDivOne)
    // append both buttons to the innerDiv
    innerDivOne.appendChild(upvoteButton)
    innerDivOne.appendChild(downvoteButton)
    // append the p tag to the outer div
    outerDiv.appendChild(totalVotes)
}

export function createCommentForm () {
    // creating the form element
    let commentForm = document.createElement('form')
    // give the form a class and ID
    commentForm.classList.add('comment-form')
    commentForm.setAttribute('id', 'comment-form')
    //append the form to the body
    document.body.appendChild(commentForm)
    // create label 
    let inputLabel = document.createElement('label')
    // give the label a for, and an id
    inputLabel.setAttribute('for', 'add-comment')
    inputLabel.setAttribute('id', 'input-label')
    inputLabel.innerText = 'Enter a new comment Below : '
    // append the label to the form
    commentForm.appendChild(inputLabel)

    // create input 
    let commentInput = document.createElement('input')
    // give the input a class, id, and type, and name
    commentInput.classList.add('comment-input')
    commentInput.setAttribute('id', 'comment-input')
    commentInput.setAttribute('name', 'comment-input')
    commentInput.setAttribute('type', 'text')
    // append the input to the form
    commentForm.appendChild(commentInput)

    // create the submit button 
    let submitButton = document.createElement('button')
    // give the button a class, id type, and text
    submitButton.classList.add('submit-button')
    submitButton.setAttribute('id', 'submit-button')
    submitButton.setAttribute('type', 'submit')
    submitButton.innerText = 'Add Comment'
    // append the button to the form
    commentForm.appendChild(submitButton)
}

export function createCommentSection () {
    // create h2 form comment section
    let h2 = document.createElement('h2')
    // give the h2 a class
    h2.classList.add('comment-section-h2')
    //give the h2 text
    h2.innerText = 'Comments : '
    // create the comment div,  give it a class and an id
    let commentDiv = document.createElement('div')
    commentDiv.classList.add('comment-section')
    commentDiv.setAttribute('id', 'comment-section')
    // append the header the the comment div
    commentDiv.appendChild(h2)
    // append the section to the body
    document.body.appendChild(commentDiv)
}