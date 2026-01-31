async function getReposList (){
   const response = await fetch("https://api.github.com/users/lubiasafira/repos")

   if (!response.ok){
        throw new Error(`Não foi possível conectar ao serviço: ${response.status}`)
    }
    return response.json()
}

export default getReposList