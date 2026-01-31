const getReposList = require("../scripts/github.js")

global.fetch = jest.fn()

describe("getReposList", function(){
    afterEach(function(){
        jest.clearAllMocks()
    })

    test("Retorna a lista de repositórios quanto a API response ok", async function(){
        const mockRepos = [{
            id: 1,
            name: "repo-test"
        }]

        fetch.mockResolvedValue({
            ok:true,
            json: jest.fn().mockResolvedValue(mockRepos)
        })

        const result = await getReposList()

        expect(fetch).toHaveBeenCalledWith("https://api.github.com/users/lubiasafira/repos")

        expect(result).toEqual(mockRepos)
    })



    test("lança erro quando a API responde erro", async function(){
        fetch.mockResolvedValue({
            ok:false,
            status: 404
        })

        await expect(getReposList()).rejects.toThrow("Não foi possível conectar ao serviço: 404")
    })

    test("retorna dados", async function(){
        fetch.mockResolvedValue({
            ok:true,
            json: jest.fn().mockResolvedValue([])
        })

        const result = await getReposList()
        expect(result).toEqual([])
    })
})