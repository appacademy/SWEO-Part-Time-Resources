// Set up listener and test with console.log
console.log("This is my profile page!");

// window.onload(() => {
window.addEventListener("DOMContentLoaded", () => {
  // Create and append new h1 element
  const h1 = document.createElement("h1");
  h1.setAttribute("id", "name");
  h1.setAttribute("class", "my-name");
  h1.innerText = "James Thompson";
  document.body.appendChild(h1);

  // Create and append new ul element
  const myDetailsList = document.createElement("ul");
  myDetailsList.setAttribute("id", "details");
  myDetailsList.setAttribute("class", "my-details");
  document.body.appendChild(myDetailsList);

  // Insert the list items programmatically
  const myDetailsArr = [
    "I like iced coffee better than hot",
    "I have a dog name Trigger",
    "I absolutely love to cook",
    "Catch me on da golfcourse how bout dat",
  ];
  
  myDetailsArr.forEach((detail) => {
    const li = document.createElement("li");
    li.setAttribute("class", "details");
    li.innerText = detail;
    myDetailsList.appendChild(li);
  });

  // Add a new element and insert a clock into it
  const clockDiv = document.createElement("div");
  clockDiv.setAttribute("id", "clock");
  document.body.appendChild(clockDiv);
  const time = () => {
    const date = new Date();
    const seconds =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();

    clockDiv.innerText =
      "Current time is " + hours + ":" + minutes + ":" + seconds;
  };
  setInterval(time, 1000);
});
