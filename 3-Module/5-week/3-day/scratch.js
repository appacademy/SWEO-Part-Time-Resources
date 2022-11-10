window.addEventListener("DOMContentLoaded", event => {
    const title = document.getElementById("title");
    const time = () => {
      const date = new Date();
      const seconds = date.getSeconds();
      const minutes = date.getMinutes();
      const hours = date.getHours();
  
      title.innerHTML = hours + ":" + minutes + ":" + seconds;
    };
    setInterval(time, 1000);
  });