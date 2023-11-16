let mainInfo = document.querySelector(".maininfo-article").offsetWidth
console.log(mainInfo);
let mainLine = document.querySelector(".maininfo-block__line")
console.log(mainLine);
mainLine.style.padding = `0 ${mainInfo / 2 - 9.5}px`
