export const createHeader = (name) => {
        
    let body = document.body
    const myName = document.createElement('h1')
    myName.setAttribute('id', 'name-h1')
    myName.innerText = name
    myName.classList.add('name')
    body.appendChild(myName)
}

export const createUl = () => {
    let body = document.body
    const myUl = document.createElement('ul')
    myUl.setAttribute('id', 'profile-ul')
    myUl.classList.add('my-details')
    body.appendChild(myUl)
}

export const addToUl = (list) => {
    let ul = document.getElementById('profile-ul')
    list.forEach(element => {
        let currentItem = document.createElement('li')
        currentItem.innerText = `${element}`
        currentItem.classList.add('detail')
        ul.appendChild(currentItem)
    });
    ul.appendChild(createClock())
}

export const createDivComponent = () => {
    let newDiv = document.createElement('div')
    newDiv.classList.add('profile-div-component')
    return newDiv
}

export function createClock(time) {
    let clockDiv = document.createElement('div')
    let currentTime = new Date().toTimeString()
    clockDiv.setAttribute('id', 'clock')
    clockDiv.innerText = `I live in dallas Texas and it is ${currentTime} right now`
    clockDiv.classList.add('clock-div')
    clockDiv.classList.add('detail')
    return clockDiv
}

(() => {
    setInterval(() => {
        let clock = document.getElementById('clock')
        clock.innerText = `I live in dallas Texas and it is ${new Date().toTimeString()} right now`
    }, 1000)
})()