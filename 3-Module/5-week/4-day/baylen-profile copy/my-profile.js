import {createHeader, createUl, addToUl, createDivComponent, createClock} from './utils.js'
document.addEventListener('DOMContentLoaded', _ => {
    createHeader('Baylen Doss')
    createUl()
    addToUl(['BasketBall', 'Soccer', 'Football', 'Hockey', 'Curling'])
    // createClock()
})