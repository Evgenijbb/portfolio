let technologies = [
    {
        title:"Html", level:80
    },
    {
        title:"Css", level:59
    },
    {
        title:"javaScript", level:25
    },
    {
        title:"Github", level:41
    },
    {
        title:"figma", level:79
    },

]
technologies.sort((a,b) => a.level - b.level)
let techList = document.querySelector(".technologies-list")
console.log(techList);
technologies.forEach(element => {
    techList.insertAdjacentHTML("afterbegin",`<div class="technologies-item">
    <div class="technologies-item__top">
      <h2>${element.title}</h2>
      <h3>${element.level >= 80 ? "Pro" : element.level >= 60 ? "Advanced" : element.level >= 40 ? "Beginner": element.level >= 0 ? "Cтажер":""}</h3>
    </div>
    <div class="technologies-item__bottom">
      <div style="width: ${element.level}%;" class="technologies-item__level"></div>
    </div>
  </div>`)
});
let doptech = [
    "Git",
        "Wordpress",
          "Teamwork",
          "Quick learning",
          "Engagement",
           "B2 english"
]
let doptechnolog = document.querySelector(".doptech__words")
console.log(doptechnolog);
doptech.forEach(element =>{
    doptechnolog.insertAdjacentHTML("afterbegin", `<li>${element}</li>`)
})