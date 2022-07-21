const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // const seeded = document.querySelectorAll('.seed');
  const seeded = document.getElementsByClassName('seed');
  console.log(seeded);

  // 2. Get all seedless fruit elements
  // const seedless = document.querySelectorAll('.seedless');
  const seedless = document.getElementsByClassName('seedless');
  console.log(seedless);

  // 3. Get first seedless fruit element
  const firstSeedless = document.querySelector('.seedless');
  console.log(firstSeedless);

  /* Section 2 */
  // 4. Get inner span with text "you"
  const youSpan = document.getElementsByTagName('span')[0];
  console.log(youSpan);

  // 5. Get all children of element "wrapper"
  const wrapKids = document.getElementById('wrapper').children;
  // const wrapKids = document.querySelector('#wrapper').children;
  // const wrapKids = document.querySelectorAll('#wrapper > *');
  console.log(wrapKids);

  // 6. Get all odd number list items in the list
  const oddNums = document.getElementsByClassName('odd');
  // const oddNums = document.querySelectorAll('.odd');
  // const oddNums = document.querySelectorAll('#two > ol > li:nth-child(odd)');
  console.log(oddNums);

  // 7. Get all even number list items in the list
  // const evenNums = document.querySelectorAll('#two > ol > li:nth-child(even)');
  const evenNums = document.querySelectorAll('#two > ol > li:not(.odd)');
  // let evenNums = Array.from(document.querySelectorAll('#two li')).filter(
  //   (el) => el.className !== 'odd'
  // );
  // let evenNums = document.querySelectorAll('#two li');
  // const finalArr = [];
  // evenNums.forEach((el, i) => {
  //   if (el.className !== 'odd') {
  //     finalArr.push(el);
  //   }
  // });
  // console.log(finalArr);
  console.log(evenNums);

  /* Section 3 */
  // 8. Get all tech companies without a class name
  const namelessTech = Array.from(document.querySelectorAll('#three a')).filter(
    (el) => !el.className
  );
  // const namelessTech = document.querySelectorAll('#three > p > a:not([class])');
  console.log(namelessTech);

  // let noClass = Array.from(document.querySelectorAll('#three a'));
  // noClass = noClass.filter((aTagItems) => {
  //   return !aTagItems.className;
  //   // return !aTagItems.className === false;
  // });
  // console.log(noClass[0]);

  // 9. Get "Amazon" anchor element
  const amazon = document.getElementsByClassName('shopping')[0];
  // const amazon = document.querySelector('.shopping');
  console.log(amazon);

  // 10. Get all unicorn list elements (not the image element)
  const unicorns = document.querySelectorAll('#three li');
  // const unicorns = document.querySelector('#three ul').children;
  // const unicorns = document.querySelectorAll('#three > ul > li');
  console.log(unicorns);
  // console.log(unicorns[0]);
};

window.onload = select;
