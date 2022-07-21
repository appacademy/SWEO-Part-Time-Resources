const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // const seeded = document.getElementsByClassName('seed');
  const seeded = document.querySelectorAll('.seed');
  console.log(seeded);

  // 2. Get all seedless fruit elements
  // const seedless = document.getElementsByClassName('seedless');
  const seedless = document.querySelectorAll('.seedless');
  seedless.forEach((el) => console.log(el.textContent));
  // console.log(seedless[0].textContent, 'are seeded you numbnut');

  // 3. Get first seedless fruit element
  const firstSeedless = document.querySelector('.seedless');
  console.log(firstSeedless);

  /* Section 2 */
  // 4. Get inner span with text "you"
  const youSpan = document.getElementsByTagName('span')[0];
  console.log(youSpan);

  // 5. Get all children of element "wrapper"
  const wrapKids = document.getElementById('wrapper').children;
  console.log(wrapKids);

  // 6. Get all odd number list items in the list
  // const oddNums = document.getElementsByClassName('odd');
  const oddNums = document.querySelectorAll('#two > ol > li:nth-child(odd)');
  console.log(oddNums);
  // console.log(oddNums[0].innerText, oddNums[1].innerText);

  // 7. Get all even number list items in the list
  // const evenNums = document.querySelectorAll('#two ol li:not(.odd)');
  let evenNums = Array.from(document.querySelectorAll('#two li'));
  evenNums = evenNums.filter((el) => el.className !== 'odd');
  // const evenNums = document.querySelectorAll('#two > ol > li:nth-child(even)');
  console.log(evenNums);

  /* Section 3 */
  // 8. Get all tech companies without a class name
  // const namelessTech = document.querySelector('a');
  const namelessTech = document.querySelectorAll('a:not([class])')[0];
  console.log(namelessTech);

  // 9. Get "Amazon" list element
  const amazon = document.getElementsByClassName('shopping')[0];
  console.log(amazon);

  // 10. Get all unicorn list elements (not the image element)
  // const unicorns = document.querySelectorAll('#three ul')[0].children;
  const unicorns = document.querySelector('#three ul').children;
  console.log(unicorns);
};

window.onload = select;
