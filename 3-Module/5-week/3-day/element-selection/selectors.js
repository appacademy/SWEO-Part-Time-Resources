const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  // const seededEle = document.querySelectorAll('li.seed')
  // console.log(seededEle)
  // 2. Get all seedless fruit elements
  // Your code here
  // const seedless = document.getElementsByClassName('seedless')
  // console.log(seedless)
  // 3. Get first seedless fruit element
  // Your code here
  //    const seeded= document.querySelectorAll('li.seedless')
  //     console.log(seeded[0])

  // const seeded= document.querySelector('li.seedless')
  // console.log(seeded)

  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  // const res4 = document.getElementsByTagName('span')
  // console.log(res4[0].innerText)

  // 5. Get all children of element "wrapper"
  // Your code here
  //   const wrapperChildren = document.getElementById("wrapper").children;
  //   console.log(wrapperChildren);

  // 6. Get all odd number list items in the list
  // Your code here
//   const odds = document.querySelectorAll("#two > ol > li:nth-child(odd)");
//   console.log(odds);

  // 7. Get all even number list items in the list
  // Your code here
  //   const evens = document.querySelectorAll('#two > ol > li:nth-child(even)')
  //   console.log(evens)

  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
//   const classless = document.querySelectorAll("#three a:not([class])");
//   console.log(classless[0].innerText);
  // 9. Get "Amazon" list element
  // Your code here
// const amazon = document.querySelector('.shopping')
// console.log(amazon)
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicorns = document.querySelector('#three > ul').children
    console.log(unicorns)

};

window.onload = select;
