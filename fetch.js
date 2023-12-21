let postList = document.querySelector(".card-list")
let mass = []
function insertMass(mass){
mass.forEach(post => {
    postList.insertAdjacentHTML("beforeend", `<article class="card-item">
        <img${post.img} src="" alt="">
        <h1>${post.title}dffgdkfdj</h1>
        <p>${post.body}Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты.</p>
    </article>`)})};

fetch("https://jsonplaceholder.typicode.com/photos?_page=1")
    .then(function (respons){
        return respons.json();
    })
    .then((respons) =>{
        console.log(respons);
        insertMass(respons)

        });