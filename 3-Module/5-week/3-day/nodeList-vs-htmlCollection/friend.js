window.addEventListener('DOMContentLoaded', (event) => {
  const parent = document.getElementById('your-best-friend');

  const nodeList = parent.childNodes;
  console.log(nodeList[1]);
  // for (let value of nodeList.values()) {
  //   console.log(value);
  //   console.log(value.textContent);
  // }

  const htmlCollection = parent.children;
  console.log(htmlCollection[0]);
  // for (let value of htmlCollection) {
  //   console.log(value);
  //   console.log(value.textContent);
  // }
});
