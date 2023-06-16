const loadRecipe = recipeList => {
    const divResp = document.querySelector("#resultado")
    recipeList.forEach(recipe => {
        divResp.innerHTML += `<h1> ${recipe.nome}`
    });
}

if(self.fetch){
    //execute algo
    const url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json"

    fetch(url)
    .then( response => response.json())
    .then(ListaDeReceitas => {
        loadRecipe(ListaDeReceitas)
    })
    .catch(erro => {
        console.log(`Deu zebra: ${erro}`)
    })
} else {
    // use o objeto XMLHttpRequest
}