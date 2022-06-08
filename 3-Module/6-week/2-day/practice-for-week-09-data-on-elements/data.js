// Your code here
const addToList = e => {
    e.preventDefault()
    const list = document.getElementById('shopping-list')
    const name = document.getElementById('name')
    const type = document.getElementById('type')

    const li = document.createElement('li')
    li.innerText = name.value
    li.dataset.type = type.value

    list.appendChild(li)

    name.value = ''

    type.value = 'drinks'
}


window.addEventListener('DOMContentLoaded', e => {
    document.getElementById('add').addEventListener('click', addToList)
})
