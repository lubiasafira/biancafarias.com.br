import getReposList from "./github.js";

const response = await getReposList()

const viewRepos = document.querySelector("#view-repos")
viewRepos.innerHTML = ""

response.forEach(element => {
    viewRepos.innerHTML += `Nome: ${element.name} <br> Descrição: ${element.description} <br><br>`
});

console.log(response)