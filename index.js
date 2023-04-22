let nomedoFilmeRef = document.getElementById("movie-name");
let botaoBusca = document.getElementById("search-btn");
let resultado = document.getElementById("result");

//funçao ppara pegar o data da api

let pegarFilme =() =>{
    let nomedoFilme = nomedoFilmeRef.value;
    let url = `http://www.omdbapi.com/?t=${nomedoFilme}&apikey=${key} ` ;

    //se o campo de imput estiver vazio

    if(nomedoFilme.length <= 0){
        resultado.innerHTML = `<h3 class="msg"> Please enter a movie name</h3>`;
    }

//se o campo de imput nao estiver vazio

else {
    fetch(url).then((resp) => resp.json() ).then((data) => {

        //se o filme existir no banco de dados
        if(data.Response == "True") {
            result.innerHTML = `
            <div class="info">
            <img src=${data.Poster} class="poster">
            <div>
              <h2>${data.Title}</h2>
              <div class="rating">
              <img src="star-icon.svg">
              <h4>${data.imdbRating}</h4>
              </div>
              <div class="details">
              <span>${data.Rated}</span>
              <span>${data.Year}</span>
              <span>${data.Runtime}</span>
              </div>
              <div class="genre">
              <div>${data.Genre.split(",").join("</div><div>")}</div>
              </div>
              </div>
              </div>
              <h3>Plot:</h3>
              <p>${data.Plot}</p>
              <h3>Cast:</h3>
              <p>${data.Actors}</p>
            `;
            
        }
        
//se o filme nao existir no banco de dados
else {
    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
}
    })

    //se erro ocorrer
    .catch(()=>{
        result.innerHTML = `<h3 class="msg">Error Ocurred</h3>`
    })
}

};

botaoBusca.addEventListener("click", pegarFilme);
window.addEventListener("load", pegarFilme);
