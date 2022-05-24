document.addEventListener('DOMContentLoaded', e => {
    let form = document.querySelector('form').addEventListener('click', e => {
        e.preventDefault()
        e.target.innerText = e.target.tagName
    })
    // let div = document.getElementById('form-div').addEventListener('click', e => {
    //     console.log(e.target)
    // })
    // let button = document.getElementById('button').addEventListener('click', e=> {
    //     console.log(e.target)
    // })
    // let input = document.querySelector('input').addEventListener('click', e => {
    //     console.log(e.target)
    // })
})