// Your code here
<<<<<<< HEAD
const addToList = e => {
    e.preventDefault()
=======

const addItem = e => {
    e.preventDefault()
    e.target.style.backGroundColor = 'green'
>>>>>>> 00f6ae9f9ec54426d8c54977aa37230cf341eac9
    const list = document.getElementById('shopping-list')
    const name = document.getElementById('name')
    const type = document.getElementById('type')

    const li = document.createElement('li')
    li.innerText = name.value
    li.dataset.type = type.value

    list.appendChild(li)

    name.value = ''
<<<<<<< HEAD

    type.value = 'drinks'
}


window.addEventListener('DOMContentLoaded', e => {
    document.getElementById('add').addEventListener('click', addToList)
=======
}


window.addEventListener("DOMContentLoaded", e => {
    const add = document.getElementById('add')
    add.addEventListener('click', addItem)
>>>>>>> 00f6ae9f9ec54426d8c54977aa37230cf341eac9
})
