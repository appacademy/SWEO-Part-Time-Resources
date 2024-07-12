// Your code here
document.addEventListener('DOMContentLoaded', () => {
    window.alert('dom has loaded');

    const redInput = document.getElementById('red-input')

    //! add event listener to red input
    redInput.addEventListener('input', handleRed);

    const newLiButton = document.getElementById('add-item');
    //!add event listener for the li submit button
    newLiButton.addEventListener('click', addLi);

    const colorSelect = document.getElementById('color-select');
    colorSelect.addEventListener('input', changeColor);

    const removeListeners = document.getElementById('remove-listeners');

    //! created function to clean it up
    sectionFourBonus(removeListeners, redInput, newLiButton, colorSelect, true);


    //! create new button and append it to the section.
    const reAddEventsButton = document.createElement('button');

    reAddEventsButton.innerText = 'Add Events Again'

    const buttonSection = document.getElementById('section-4');

    buttonSection.appendChild(reAddEventsButton);

    sectionFourBonus(reAddEventsButton, redInput, newLiButton, colorSelect, false);


    //! last bonus

    document.addEventListener('keypress', (e) => {
        if (e.keyCode === 32) {
            window.alert('you pressed space')

        }
    })

})



//! can seperate call back functions from the main function
//! create a cb function for event listener
const handleRed = (e) => {
    if (e.target.value === 'red') {
        e.target.style.backgroundColor = 'red';
    }
    else {
        e.target.style.backgroundColor = 'transparent'
    }
}

//! cb for adding a list item
const addLi = (e) => {
    const ul = document.querySelector('ul');
    const liInput = document.getElementById('list-add');

    const newLi = document.createElement('li');
    newLi.innerText = liInput.value;

    ul.appendChild(newLi);

    liInput.value = '';
}

//! handler for changing colors
const changeColor = (e) => {
    const section = document.getElementById('section-3');

    section.style.backgroundColor = e.target.value;
}


const sectionFourBonus = (button, redInput, newLiButton, colorSelect, remove) => {
    if (remove) {
        button.addEventListener('click', () => {
            redInput.removeEventListener('input', handleRed);
            newLiButton.removeEventListener('click', addLi);
            colorSelect.removeEventListener('input', changeColor);

            window.alert('EVENTS removed!')
        });
    }
    else {
        //! event listener to re add the events
        button.addEventListener('click', () => {
            redInput.addEventListener('input', handleRed);
            newLiButton.addEventListener('click', addLi);
            colorSelect.addEventListener('input', changeColor);
            window.alert('Events ADDED!')
        })

    }
}
