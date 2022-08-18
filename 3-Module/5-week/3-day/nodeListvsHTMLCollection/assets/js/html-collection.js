export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  console.log(bodyChildElements);

  const div = bodyChildElements[0];

  const divEl = document.getElementsByClassName("div1")
  console.log(divEl);
  const transformHTMLCollection = Array.from(divEl)
  console.log("transformed html collection to array:", transformHTMLCollection);


  const divChildElements = div.children; // HTMLCollection [span]
  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  const span = divChildElements[0]; // <span>Yes!</span>
  // debugger
};