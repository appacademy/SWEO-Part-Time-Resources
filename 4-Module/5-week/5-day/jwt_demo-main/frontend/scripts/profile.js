import { generateURL } from './helpers.js';

export const profile = async () => {

    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    const loginButton = document.querySelector('#login');
    const signupButton = document.querySelector('#signup');

    if(localStorage.getItem('token')){


        const resBody = await fetch('http://localhost:8000/api/profile', {
            headers: {
                'Authorization' : `${localStorage.getItem('token')}`
            }
        })
        const resJson = await resBody.json()

        if(resJson.error){
            alert(`${resJson.error}`)
            localStorage.removeItem('token')
            return
        }

        loginButton.remove()
        signupButton.remove()

        h1.innerText = `Welcome back ${resJson.currentUser.firstName}`

        const mainDiv = document.createElement('div')
        body.appendChild(mainDiv)

        const fName = document.createElement('div');
        const lName = document.createElement('div');
        const email = document.createElement('div');

        fName.innerText = "First Name: " + resJson.currentUser.firstName;
        lName.innerText = "Last Name: " + resJson.currentUser.lastName;
        email.innerText = "Email: " + resJson.currentUser.email;

        mainDiv.appendChild(fName);
        mainDiv.appendChild(lName);
        mainDiv.appendChild(email);

        const logoutButton = document.createElement('button')

        logoutButton.innerText = 'LOG OUT';

        body.appendChild(logoutButton);

        logoutButton.addEventListener('click', e => {
            localStorage.removeItem('token');
            location.reload();
        })
    }

    loginButton.addEventListener('click', e => {
        e.preventDefault()
        window.location.href = generateURL('login.html')
    })

    signupButton.addEventListener('click', e => {
        e.preventDefault()
        window.location.href = generateURL('signup.html')
    })

}
