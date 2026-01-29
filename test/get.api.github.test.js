const repos = require("../scripts/github.js")

test("Api.github deve retorna um objeto", function(){
    expect(typeof repos).toBe("object")
    expect(Object.keys(repos).length).toBeGreaterThan(0)
})