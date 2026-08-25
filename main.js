document.addEventListener("contextmenu", (e) => {
    e.preventDefault()
});
document.addEventListener("keydown", (e) => {
    if (e.key === "F12" || e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
    }
    else if (e.ctrlKey || e.key === "U") {
        e.preventDefault();
    }
});
function addButtonElement() {
    let newBtn = document.createElement("button");
    newBtn.textContent = "这是一个新的按钮";
    newBtn.style.display = "block";
    newBtn.style.margin = "10px auto";
    newBtn.style.width = "150px";
    newBtn.style.height = "30px";
    newBtn.style.borderRadius = "10px";
    newBtn.style.border = "none";
    newBtn.style.backgroundColor = "rgb(0,50,255)";
    newBtn.style.color = "white";
    div.appendChild(newBtn);
}
document.body.style.background = "linear-gradient(180deg,rgb(0, 247, 235),rgb(140, 0, 255))";
document.body.style.backgroundAttachment = "fixed";
const titleText = document.createElement("h1");
const T_PageCode = document.createElement("p");
const addBtn = document.createElement("button");
document.body.style.userSelect = "none";
titleText.style.position = "absolute";
titleText.style.top = "100px";
titleText.style.left = "50%";
titleText.style.transform = "translate(-50%, -50%)";
titleText.textContent = "尝试使用JavaScript创建HTML元素";
titleText.style.fontWeight = "200";
titleText.style.color = "white";
document.body.appendChild(titleText);
T_PageCode.style.position = "absolute";
T_PageCode.style.top = "160px";
T_PageCode.style.left = "50%";
T_PageCode.style.transform = "translate(-50%, -50%)";
T_PageCode.textContent = "T-PageCode";
T_PageCode.style.fontWeight = "200";
T_PageCode.style.fontSize = "20px";
T_PageCode.style.color = "white";
document.body.appendChild(T_PageCode);
addBtn.textContent = "在浅蓝色的色块上增加按钮"
addBtn.style.position = "absolute";
addBtn.style.top = "250px";
addBtn.style.left = "50%";
addBtn.style.transform = "translate(-50%,-50%)";
addBtn.style.width = "230px";
addBtn.style.height = "40px";
addBtn.style.backgroundColor = "rgb(0,100,255)";
addBtn.style.border = "none";
addBtn.style.borderRadius = "15px";
addBtn.style.color = "white";
addBtn.style.fontSize = "16px";
addBtn.style.fontWeight = "200";
addBtn.style.transition = "background-color 0.5s ease";
addBtn.addEventListener("mouseenter",() => {
    addBtn.style.backgroundColor = "rgb(0,50,255)";
})
addBtn.addEventListener("mouseleave",() => {
    addBtn.style.backgroundColor = "rgb(0,100,255)";
})
addBtn.addEventListener("mousedown",() => {
    addBtn.style.backgroundColor = "rgb(0,0,255)";
})
addBtn.addEventListener("mouseup",() => {
    addBtn.style.backgroundColor = "rgb(0,100,255)";
})
addBtn.onclick = () => {
    addButtonElement();
}
document.body.appendChild(addBtn);
let div = document.createElement("div");
div.style.position = "absolute";
div.style.top = "450px";
div.style.left = "50%";
div.style.transform = "translate(-50%,-50%)";
div.style.width = "300px";
div.style.height = "250px";
div.style.backgroundColor = "rgb(121, 235, 255)";
div.style.borderRadius = "25px";
div.style.overflow = "auto";
document.body.appendChild(div);
let styleTag = document.createElement("style");
styleTag.textContent = `
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: rgb(222, 204, 255);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgb(206, 154, 255);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgb(218, 162, 255);
    }
`;
document.head.appendChild(styleTag);