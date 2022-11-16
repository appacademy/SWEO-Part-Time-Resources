// Your code here
window.addEventListener('DOMContentLoaded', () => {
    const add = document.getElementById('add')
    const ul = document.getElementById('shopping-list')

    add.addEventListener('click', e => {
        e.preventDefault()
        const newItem = document.createElement('li')
        const name = document.getElementById('name')
        const type = document.getElementById('type')

        newItem.innerText = name.value
        // newItem.dataset.type = type.value
        newItem.setAttribute('data-type', type.value)

        ul.appendChild(newItem)

        name.value = ''
        type.value = 'dairy'
    })
})