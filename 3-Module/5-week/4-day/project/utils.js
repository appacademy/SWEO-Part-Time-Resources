export const createUl =() => {
    let body = document.body
    let ul = document.createElement('ul')
    ul.setAttribute('id', 'ul')
    ul.classList.add('ul')
    body.appendChild(ul)
}


export const addToUl = (array) => {
    let ul = document.getElementById('ul')
    array.forEach(el => {
        let newLi = document.createElement('li')
        newLi.innerText = el
        ul.appendChild(newLi)
    });
}
const updateClock = () => {
    let clock = document.getElementById('ul').lastChild
    clock.innerText = `
    I live in LA and it is
    ${new Date().toTimeString()}
    right now `
}

setInterval(() => {
    updateClock()
}, 1000)
