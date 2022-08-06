import { storeToken } from "./helpers.js";

export const signup = async () => {
    const fName = document.querySelector('.fName');
    const lName = document.querySelector('.lName');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');

    const button = document.querySelector('button');

    const userData = {
        firstName : '',
        lastName : '',
        email : '',
        password : ''
    }

    fName.addEventListener('change', e=>{
        userData.firstName = e.target.value
    })
    lName.addEventListener('change', e=>{
        userData.lastName = e.target.value
    })
    email.addEventListener('change', e=>{
        userData.email = e.target.value
    })
    password.addEventListener('change', e=>{
        userData.password = e.target.value
    })

    button.addEventListener('click', async e => {

        e.preventDefault()

		// requestCSRFToken();

        const resBody = await fetch('http://localhost:8000/api/signup', {
            method: "POST",
            headers : {
                "Content-Type" : "application/json",
				// 'XSRF-TOKEN':  getCookie('CSRF-TOKEN')
            },
            body: JSON.stringify(userData)
        })

        const resJson = await resBody.json();

        if(resJson.token){
            storeToken(resJson.token)
        } else {
            alert(`${resJson.error}`)
        }
    })

}
