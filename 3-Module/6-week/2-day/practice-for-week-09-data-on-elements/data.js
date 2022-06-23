// Your code here

const addItem = e => {
    e.preventDefault()
    e.target.style.backGroundColor = 'green'
    const list = document.getElementById('shopping-list')
    const name = document.getElementById('name')
    const type = document.getElementById('type')

    const li = document.createElement('li')
    li.innerText = name.value
    li.dataset.type = type.value

    list.appendChild(li)

    name.value = ''
}


window.addEventListener("DOMContentLoaded", e => {
    const add = document.getElementById('add')
    add.addEventListener('click', addItem)
})
