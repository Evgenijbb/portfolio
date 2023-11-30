
let projects = [
    {
        name:"паралакс3d",text:"описание",link : "https://evgenijbb.github.io/paralax3d/",img:"./assets/img/prlx.webp"
    },
    {
        name:"бункер",text:"описание",link : "https://evgenijbb.github.io/bynker/",img:"./assets/img/bnkr.webp"
    },
    {
        name:"вино",text:"описание",link : "https://evgenijbb.github.io/first_site/",img:"./assets/img/frst.webp"
    },
]
let projList = document.querySelector(".Projects-list")
console.log(projList);
projects.forEach(function(item){
    projList.insertAdjacentHTML("afterbegin",`<article class="Project-item">
    <img src="${item.img}" alt="">
    <h3>${item.name}</h3>
    <hr>
    <p>${item.text}</p>
    <button><a href="${item.link}" target="_blank">Look it up</a></button>
    </article>`)
})