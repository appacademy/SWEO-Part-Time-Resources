//CATSTAGRAM DAY 3
//COMMENT.JS
export const createCommentSection = () => {
    const container = document.querySelector(".container");

    const commentForm = createCommentForm();
    const commentsList = createCommentsList();

    container.appendChild(commentForm);
    container.appendChild(commentsList);
    //!!START SILENT

    // load initial comments from the browser storage
    loadComments();
    //!!END
};

const createCommentsList = () => {
    // Create comments section
    const comments = document.createElement("div");
    comments.className = "comments";
    comments.style.border = "solid grey 1px";
    comments.style.height = "400px";
    comments.style.width = "80%";
    comments.style.margin = "10px";
    comments.style.padding = "5px";
    comments.style.overflow = "scroll";

    return comments;
};

const createCommentForm = () => {
    // Create form
    const commentForm = document.createElement("form");
    commentForm.className = "comment-form";
    commentForm.style.margin = "20px";
    commentForm.style.display = "flex";
    commentForm.style.width = "100%";
    commentForm.style.justifyContent = "center";
    commentForm.style.alignItems = "center";

    commentForm.appendChild(createCommentInput());
    commentForm.appendChild(createCommentSubmitBtn());

    return commentForm;
};

const createCommentInput = () => {
    // Create comment input
    const userCommentContainer = document.createElement("div");
    userCommentContainer.className = "user-comment-container";
    userCommentContainer.style.marginRight = "10px";

    const label = document.createElement("label");
    label.setAttribute("for", "user-comment");
    label.innerText = "Comment: ";

    const commentInput = document.createElement("input");
    commentInput.id = "user-comment";
    commentInput.name = "user-comment";
    commentInput.placeholder = "Add a comment... ";
    commentInput.required = true;

    userCommentContainer.appendChild(label);
    userCommentContainer.appendChild(commentInput);

    return userCommentContainer;
};

const createCommentSubmitBtn = () => {
    // Create submit button
    const submitBtn = document.createElement("input");
    submitBtn.id = "submit-comment"
    submitBtn.type = "submit";
    submitBtn.value = "Submit";

    submitBtn.addEventListener('click', submitComment);

    return submitBtn;
};

const submitComment = e => {
    e.preventDefault();
    const commentInput = document.querySelector('#user-comment');
    const commentText = commentInput.value;
    createComment(commentText);
    commentInput.value = "";
    //!!START SILENT

    // Add comment to browser storage
    storeComment(commentText);
    //!!END
}

const createComment = (commentText) => {
    const newCommentContainer = document.createElement('div');
    newCommentContainer.style.display = "flex";
    newCommentContainer.style.margin = "10px";

    const newComment = document.createElement("p");
    newComment.innerText = commentText;

    const deleteButton = document.createElement('button');
    deleteButton.className = "delete-button";
    deleteButton.style.marginLeft = "15px";
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', e => {
        //!!START SILENT
        // Remove comment from browser storage
        removeCommentFromStore(newComment);

        //!!END
        // Remove comment from HTML DOM
        newCommentContainer.remove();
    });

    newCommentContainer.appendChild(newComment);
    newCommentContainer.appendChild(deleteButton);
    const comments = document.querySelector(".comments");
    comments.appendChild(newCommentContainer);
};

//!!START SILENT
const storeComment = (commentText) => {
    // Add a comment to localStorage
    const storedComments = JSON.parse(localStorage.getItem('comments'));
    storedComments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(storedComments));
};

const removeCommentFromStore = (commentEle) => {
    // Find the index of the comment based on the comment HTML element given
    const allComments = document.querySelector(".comments").children;
    const commentIdx = Array.from(allComments)
        .findIndex(comment => comment === commentEle);
    // Remove a comment based on its index in localStorage
    const storedComments = JSON.parse(localStorage.getItem('comments'));
    storedComments.splice(commentIdx, 1);
    localStorage.setItem("comments", JSON.stringify(storedComments));
}

const loadComments = () => {
    // Load comments from localStorage
    if (localStorage.getItem("comments")) {
        JSON.parse(localStorage.getItem("comments")).forEach(commentText => {
            createComment(commentText);
        });
    } else {
        localStorage.setItem("comments", JSON.stringify([]));
    }
};

const removeAllCommentsFromStore = () => {
    // Empty the comments in localStorage
    localStorage.setItem("comments", JSON.stringify([]));
}
//!!END

export const resetComments = () => {
    const comments = document.querySelector(".comments");
    Array.from(comments.children).forEach(child => child.remove());
    //!!START SILENT

    // Remove all comments from browser storage
    removeAllCommentsFromStore();
    //!!END
};
//INDEX.JS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { createMainContent } from './main.js';
import { createScoreContainer } from './score.js';
import { createCommentSection } from './comments.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

window.onload = () => {
    initializePage();
    createMainContent();
    createScoreContainer();
    createCommentSection();
};

//MAIN.JS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { resetScore } from './score.js';
import { resetComments } from './comments.js';

export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const newKittenBtn = createNewKittenBtn();

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.append(newKittenBtn);
    container.appendChild(img);

    //!!ADD
    // fetchImage();
    //!!END_ADD
    //!!START SILENT
    // load kitten image from browser storage
    loadImgUrl();
    //!!END
};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImgUrl = kittenData[0].url;
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenImgUrl;
        //!!START SILENT

        // Store the new URL in localStorage
        storeImgUrl(kittenImgUrl);
        //!!END

        // After the image is finished loading, reset the score and comments
        kittenImg.addEventListener('load', () => {
            resetScore();
            resetComments();
        });
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};

const createNewKittenBtn = () => {
    // Create "New Kitten" button
    const newKittenBtn = document.createElement("button");
    newKittenBtn.id = "new-kitten";
    newKittenBtn.innerText = "New Kitten";
    newKittenBtn.addEventListener('click', fetchImage);
    return newKittenBtn;
};

//!!START SILENT
const loadImgUrl = () => {
    // Load kitten image from localStorage if there is one. If not, get one
    if (localStorage.getItem("url")) {
        const kittenImg = document.querySelector("img");
        kittenImg.src = localStorage.getItem("url");
    } else {
        fetchImage();
    }
};

const storeImgUrl = (url) => {
    // Store the URL in localStorage
    localStorage.setItem("url", url);
};


//SCORE.JS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const createScoreContainer = () => {
    // Create score container
    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    scoreContainer.style.display = "flex";
    scoreContainer.style.flexDirection = "column";
    scoreContainer.style.alignItems = "center";

    const scoreDisplay = createScoreDisplay();
    const btnContainer = createBtnContainer();

    scoreContainer.appendChild(scoreDisplay);
    scoreContainer.appendChild(btnContainer);

    const container = document.querySelector(".container");
    container.appendChild(scoreContainer);
    //!!START SILENT

    // load initial score from the browser storage
    loadScore();
    //!!END
};

const createScoreDisplay = () => {
    // Create score display
    const scoreDisplay = document.createElement("div");
    scoreDisplay.className = "score-display";
    scoreDisplay.style.marginBottom = "10px";

    const scoreTitle = document.createElement("span");
    scoreTitle.innerText = "Popularity Score: ";

    const score = document.createElement("span");
    score.className = "score";
    score.innerText = "0";

    scoreDisplay.appendChild(scoreTitle);
    scoreDisplay.appendChild(score);

    return scoreDisplay;
};

const createBtnContainer = () => {
    // Create upvote/downvote buttons
    const btnContainer = document.createElement("div");

    const upvoteBtn = document.createElement("button");
    upvoteBtn.id = "upvote";
    upvoteBtn.innerText = "Upvote";

    const downvoteBtn = document.createElement("button");
    downvoteBtn.id = "downvote";
    downvoteBtn.innerText = "Downvote";
    downvoteBtn.style.marginLeft = "5px";

    btnContainer.appendChild(upvoteBtn);
    btnContainer.appendChild(downvoteBtn);

    upvoteBtn.addEventListener('click', vote);
    downvoteBtn.addEventListener('click', vote);

    return btnContainer;
};

const vote = e => {
    //!!ADD
    // const score = document.querySelector('.score');
    // let newScore = score.innerText;
    //!!END_ADD
    //!!START SILENT
    let newScore = localStorage.getItem("score");
    //!!END
    if (e.target.id === "upvote") {
        newScore = parseInt(newScore) + 1;
    } else {
        newScore = parseInt(newScore) - 1;
    }

    //!!ADD
    // // update score
    //!!END_ADD
    //!!START SILENT
    // update score in the browser storage
    //!!END
    updateScore(newScore);
};

export const resetScore = () => {
    // reset score to 0
    updateScore(0);
};

const updateScore = (newScore) => {
    const score = document.querySelector('.score');
    score.innerText = newScore;
    //!!START SILENT

    // update score in browser storage
    storeScore(newScore);
    //!!END
};

//!!START SILENT
const storeScore = (score) => {
    // update score in localStorage
    localStorage.setItem("score", score);
};

const loadScore = () => {
    // load score from localStorage
    if (localStorage.getItem("score")) {
        updateScore(localStorage.getItem("score"));
    }
};
