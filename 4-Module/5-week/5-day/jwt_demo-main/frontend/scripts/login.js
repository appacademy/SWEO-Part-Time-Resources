import { storeToken } from "./helpers.js";

export const login = () => {

    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const button = document.querySelector('button');

    const userData = {
        email: '',
        password: ''
    };

    email.addEventListener('change', e => {
        userData.email = e.target.value
    });

    password.addEventListener('change', e => {
        userData.password = e.target.value
    });

    button.addEventListener('click', async e => {
        e.preventDefault();

        const resBody = await fetch('http://localhost:8000/api/login', {
            method : "POST",
            headers: {
                "Content-Type" : "application/json",
                // 'XSRF-TOKEN':  getCookie('CSRF-TOKEN')
            },
            body: JSON.stringify(userData)
        })

        const resJson = await resBody.json();
		// console.log(resJson)

        if(resJson.token){
            storeToken(resJson.token)
        } else {
            alert(`${resJson.error}`)
        }

    })

}
