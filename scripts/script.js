import getReposList from "./github.js";

const response = await getReposList()

const viewRepos = document.querySelector("#view-repos")
viewRepos.innerHTML = ""
let html = ""

response.forEach(function(element) {
    element.demoLink = true
    html += createCardsElements(element)

});

viewRepos.innerHTML += `${html}`

console.log(response)


function createCardsElements(project){
    if(!project){
        return undefined
    }

    let html = "";
    html += `<li class="cards-projects">`
    html += `<h3>${project.name}</h3>`

    if (project.description)
    {
        html += `<p class="description-view">${project.description}</p>`
    }
    else{
        html += `<p>sem descrição</p>`
    }
    
    if(!project.statusProject)
    {
        html += `<p>Status: ⚪pausado</p>`
    }else{
        html += `<p>Status: ${project.statusProject}</p>`
    }
        
    if(project.demoLink){
        html += `<input type="button" value="Play Demo" class="demo-btn"></input>`
    }
    html += `</li>`
        
    return html
}