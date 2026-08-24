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
document.body.style.backgroundColor = "white";
const titleText = document.createElement("h1");
const T_PageCode = document.createElement("p");
document.body.style.userSelect = "none";
titleText.id = "title-text";
titleText.style.position = "absolute";
titleText.style.top = "100px";
titleText.style.left = "50%";
titleText.style.transform = "translate(-50%, -50%)";
titleText.textContent = "尝试使用JavaScript创建HTML元素";
titleText.style.fontWeight = "200";
document.body.appendChild(titleText);
T_PageCode.id = "title-text";
T_PageCode.style.position = "absolute";
T_PageCode.style.top = "160px";
T_PageCode.style.left = "50%";
T_PageCode.style.transform = "translate(-50%, -50%)";
T_PageCode.textContent = "T-PageCode";
T_PageCode.style.fontWeight = "200";
T_PageCode.style.fontSize = "20px";
document.body.appendChild(T_PageCode);