export const createCommentSection = () => {
    //select container
    const container = document.querySelector(".container");

    // create the input form and list for comments
    const commentForm = createCommentForm();
    const commentsList = createCommentsList();

    //add to container after creating
    container.appendChild(commentForm);
    container.appendChild(commentsList);
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
    // Create comment input component (label + text input)
    const userCommentContainer = document.createElement("div");
    userCommentContainer.className = "user-comment-container";
    userCommentContainer.style.marginRight = "10px";

    // creating the label ("comment")
    const label = document.createElement("label");
    label.setAttribute("for", "user-comment");
    label.innerText = "Comment: ";

    // creating the input
    const commentInput = document.createElement("input");
    commentInput.id = "user-comment";
    commentInput.name = "user-comment";
    commentInput.placeholder = "Add a comment... ";
    commentInput.required = true;

    // adding the label and input to the container
    userCommentContainer.appendChild(label);
    userCommentContainer.appendChild(commentInput);

    return userCommentContainer;
};

const createCommentSubmitBtn = () => {
    // Create comment submit button
    const submitBtn = document.createElement("input");
    submitBtn.id = "submit-comment"
    submitBtn.type = "submit";
    submitBtn.value = "Submit";

    //button w/ listener to trigger submitComment on click
    submitBtn.addEventListener('click', submitComment);

    return submitBtn;
};

const submitComment = e => {
    //submit comment and call the "createComment" function
    e.preventDefault();
    const commentInput = document.querySelector('#user-comment');
    // passing the user's input comment value
    createComment(commentInput.value);
    commentInput.value = "";
}

// Creation of the comment and adding it to the list
const createComment = (commentText) => {
    // the single comment container
    const newCommentContainer = document.createElement('div');
    newCommentContainer.style.display = "flex";
    newCommentContainer.style.margin = "10px";

    // the paragraph content in comment
    const newComment = document.createElement("p");
    newComment.innerText = commentText;

    // the comment's delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = "delete-button";
    deleteButton.style.marginLeft = "15px";
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', e => {
        newCommentContainer.remove();
    });

    // adding the paragraph text + button together into the single comment container
    newCommentContainer.appendChild(newComment);
    newCommentContainer.appendChild(deleteButton);

    // adding the single comment container to the comments list
    const comments = document.querySelector(".comments");
    comments.appendChild(newCommentContainer);
};

// reset the comments by removing them
export const resetComments = () => {
    const comments = document.querySelector(".comments");
    Array.from(comments.children).forEach(child => child.remove());
};