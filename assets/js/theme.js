let theme=document.querySelector("#lightmode")
theme.addEventListener("change",function () {
    console.log(theme.checked);
    if (theme.checked==true) {
        Object.assign(document.documentElement,{
            style:" --background:#c3d4f5;--text:#2e2c38;"
        })  
    } else {
        Object.assign(document.documentElement,{
            style:" --background:#0F1624;--text:#FFF;"
    })
}})