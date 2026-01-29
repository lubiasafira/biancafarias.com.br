
let reposList = {}
fetch("https://api.github.com/users/lubiasafira/repos")
    .then(function (res){
        return res.json();
    }).then(function (repos){
        reposList = repos
    })

module.exports = {reposList}