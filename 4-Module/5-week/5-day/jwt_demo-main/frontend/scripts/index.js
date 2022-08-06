import { profile } from './profile.js';
import { login } from './login.js';
import { signup } from './signup.js';
import { generateURL } from './helpers.js';


window.addEventListener('DOMContentLoaded', ()=>{

    const url = window.location.href.split('/')
	const fileName = url[url.length - 1]

    if(localStorage.getItem('token') && fileName !== 'index.html'){
        window.location.href = generateURL('index.html')
    }

    if(fileName === 'index.html'){
        profile()
    } else if (fileName === 'login.html'){
        login()
    } else if (fileName === 'signup.html'){
        signup()
    }

})
