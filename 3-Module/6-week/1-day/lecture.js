document.addEventListener('DOMContentLoaded', e => {
    // document.body.addEventListener('click', e => {
    //     console.log(e.target)
    // })
    let form = document.querySelector('form').addEventListener('click', e => {
        e.preventDefault()
        // e.target.innerText = e.target.tagName
        // console.log(e.target)
        // if(e.target.tagName === 'FORM'){
        //     console.log('do Form Stuff')
        // }else{
        //     console.log('you didnt click on the form')
        // }
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