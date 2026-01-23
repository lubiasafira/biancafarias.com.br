fetch("https://api.github.com/users/lubiasafira/repos")
    .then(function (res){
        return res.json();

    }).then(function (repos){
        console.log(repos);
})