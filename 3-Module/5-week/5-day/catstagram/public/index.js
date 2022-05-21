import {createH1, fetchCatPic, addCatToBody} from './scripts.js'
document.addEventListener('DOMContentLoaded', e => {
    document.body.appendChild(createH1())
    fetchCatPic().then(url => {
        addCatToBody(url)
    })
})