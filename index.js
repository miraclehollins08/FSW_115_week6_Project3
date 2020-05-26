async function getData(){
    const result = await axios.get("https://pokeapi.co/api/v2/pokemon/1/")
    console.log(result)
}

getData()

axios.get("https://rickandmortyapi.com/api/")
.then(response =>{
    const homeworldURL = response.data.homeworld
    return axios.get(homeworldURL)
})
.then(response => {
    console.log(response)
})
.catch(error => console.log(error))

async function getAllpokeapi(){
    const pokeapiData = await axios.get("https://pokeapi.co/api/v2/pokemon/1/")
    const pokeapiFilmUrls = pokeapiData.data.films
    const pendingPromise = []
    
    for(let i = 0; i < pokeapiFilmUrls.length; i++){
        pendingPromises.push(axios.get(pokeapiFilmUrls[i]))
    }
    Promise.all(pendingPromises)
    .then(response => console.log(response))
    .catch(error => console.log(error))

}
getAllpokeapi()