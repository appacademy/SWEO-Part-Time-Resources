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