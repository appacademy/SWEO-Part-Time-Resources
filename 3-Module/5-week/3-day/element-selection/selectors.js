const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  // const seedy = document.querySelectorAll('.seed')
  // let seedyText = []
  // seedy.forEach(fruit => seedyText.push(fruit.innerText))
  // console.log(seedyText[1])
  // const seedy = document.getElementsByClassName('seed')

  // console.log(seedy)

  // 2. Get all seedless fruit elements
  // Your code here
  // const seedy = document.getElementsByClassName('seedless')

  // console.log(seedy)

  // 3. Get first seedless fruit element
  // // Your code here
  // const firstSeedless = document.getElementsByClassName('seedless')
  // const firstSeedlessEle = firstSeedless[0]
  // console.log(firstSeedlessEle)
  // const first = document.querySelector('.seedless')
  // console.log(first)

  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  //   let innerYou = document.getElementsByTagName('span')
  //   console.log(innerYou[0].innerText)
  //   const you = Array.from(
  //     document
  //       .getElementsByTagName("span"))
  //       .filter((ele) => ele.innerText === "you")

  //   console.log(you)

  // 5. Get all children of element "wrapper"
  // Your code here
//   const mama = document.getElementById("wrapper");
//   console.log(mama.children);

  // 6. Get all odd number list items in the list
  // Your code here
  //   const odds = document.querySelectorAll('.odd')
  //   console.log(odds )
  // const odds = document.querySelectorAll('#two > ol > li:nth-child(odd)')
  // console.log(odds)
  // 7. Get all even number list items in the list
  // Your code here
//   const evens = document.querySelectorAll("#two > ol > li:nth-child(even)");
//   console.log(evens);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
//   const nameLess = document.querySelectorAll("#three a:not([class])")
//     console.log(nameLess)
  // 9. Get "Amazon" list element
  // Your code here
  const amazon = document.querySelector('.shopping')
  console.log(amazon)


  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicorns = document.querySelector('#three > ul').children
  console.log(unicorns)
};

window.onload = select;
