const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    let seeded = document.querySelectorAll('.seed')
    console.log(seeded)
    // seeded.forEach(el => {
    //     el.innerHTML = "Hey"
    //     console.log(el)
    // })
    // let p = document.querySelector('p')
    // p.innerText = `
    //     <div>
    //     <div> Baylen </div>
    //     Hey
        
    //     </div>
    // `
    // 2. Get all seedless fruit elements
    // Your code here
    let seedless = document.querySelectorAll('.seedless')
    console.log(seedless)
    // 3. Get first seedless fruit element
    // Your code here
    let firstSeedless = document.querySelector('.seedless')
    console.log(firstSeedless)
    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    // let youSpan = document.getElementById('wrapper').children[0].children[0]
    // console.log(youSpan)
    let youSpan = document.querySelector('#wrapper').firstElementChild.firstElementChild
    console.log(youSpan)
    // 5. Get all children of element "wrapper"
    // Your code here
    let wrapperChild = document.querySelector('#wrapper').children
    console.log(wrapperChild)
    // 6. Get all odd number list items in the list
    // Your code here
    let oddNums = document.querySelectorAll('.odd')
    console.log(oddNums)
    // 7. Get all even number list items in the list
    // Your code here
    const even = document.querySelectorAll('#two ol li:not(.odd)')
    console.log(even)
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    let companies = document.querySelectorAll('#three a:not([class])')
    console.log(companies)
    // 9. Get "Amazon" list element
    // Your code here
    let amazon = document.querySelector('.shopping')
    console.log(amazon)
    
    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    let unicorns = document.querySelector('#three ul').children
    console.log(unicorns)
  
}

window.onload = select;