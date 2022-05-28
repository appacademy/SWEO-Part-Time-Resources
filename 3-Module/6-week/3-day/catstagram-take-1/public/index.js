import {
    getCat,
    createH1,
    createImage,
    createNewCatBUtton,
    
} from './utils.js'

document.addEventListener('DOMContentLoaded', async e => {
    createH1()
    // get cat is an async function and returns a pending promise
    // so we need to use .then
    getCat().then(url => {
        createImage(url)
    })
    createNewCatBUtton()
    
})