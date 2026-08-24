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
const titleText = document.createElement("h1");
document.body.style.userSelect = "none";
titleText.id = "title-text";
titleText.style.position = "absolute";
titleText.style.top = "100px";
titleText.style.left = "50%";
titleText.style.transform = "translate(-50%, -50%)";
titleText.textContent = "尝试使用JavaScript创建HTML元素";
titleText.style.fontWeight = "200";
document.body.appendChild(titleText);