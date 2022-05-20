import {createUl, addToUl} from './utils.js'
document.addEventListener('DOMContentLoaded', _ => {
    let clockData = `I live in LA and it is 
    ${new Date().toTimeString()} 
    right now `
    createUl()
    addToUl(['Baylen', 'James', 'zaviar', clockData])
})