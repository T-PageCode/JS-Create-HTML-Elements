fetch('./404.json')
  .then(response => response.json())
  .then(data => {
    let page404 = document.createElement("h1");
    let info = document.createElement("p");
    page404.textContent = data.error;
    page404.style.position = "absolute";
    page404.style.top = "47%";
    page404.style.left = "50%";
    page404.style.transform = "translate(-50%,-50%)";
    page404.style.fontSize = "50px";
    page404.style.fontWeight = "200";
    info.textContent = data.info;
    info.style.position = "absolute";
    info.style.top = "53%";
    info.style.left = "50%";
    info.style.transform = "translate(-50%,-50%)";
    info.style.fontSize = "20px";
    info.style.fontWeight = "200";
    document.body.appendChild(page404);
    document.body.appendChild(info);
  })
  .catch(error => console.error('Read Error:', error));