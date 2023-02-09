export default () => {
  const bodyChildNodes = document.body.childNodes; // NodeList [text, div, text]
  // console.log(bodyChildNodes);

  const div = bodyChildNodes[1]; // NOT bodyChildNodes[0]

  const divChildNodes = div.childNodes; // NodeList [text, span, text]
  const helloWorld = divChildNodes[0].textContent; // Hello World!\n
  const span = divChildNodes[1]; // <span>Yes!</span>
  // debugger
};