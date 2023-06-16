/* This code is fetching data from a JSON file containing information about movies, then using that
data to dynamically generate HTML content for a webpage. The generated content includes movie
titles, images, summaries, classifications, and similar movie recommendations. The `fetch` method is
used to retrieve the data, and the `then` method is used to handle the response and parse the JSON
data. The parsed data is then used to generate the HTML content, which is inserted into the webpage
using the `innerHTML` property of a DOM element. The `catch` method is used to handle any errors
that may occur during the fetch or parsing process. */
fetch("https://rafaelescalfoni.github.io/desenv_web/filmes.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let output = "";
    data.map((film) => {

     /* This code is calculating the average rating of a movie based on the ratings given by users in
     the `opinioes` array of the `film` object. If the `opinioes` array is not empty, the `reduce`
     method is used to sum up all the ratings and divide by the number of ratings to get the
     average. If the `opinioes` array is empty, the `rating` variable is set to 0. */
      const rating = film.opinioes.length > 0
      ? film.opinioes.reduce((acc, opiniao) => acc + opiniao.rating, 0) / film.opinioes.length
      : 0;

      output += `
        <div class="col-12 col-md-6" id=${film.id}>
          <div class="hero">
            <div class="card mb-3 card-films">
              <div class="position-relative">
                <img src=${film.figura} alt=${film.titulo} class="card-image rounded"/>
                <div class="position-absolute top-0 start-0 ms-2 text-center">
                  <h5 class="classificacao ${getClassificacaoClass(film.classificacao)}">${film.classificacao === 0 ? "Livre" : film.classificacao}</h5>
                  ${getRatingStars(rating)}
                </div>
              </div>
              <div class="card-body">
              <p><span class="details-tittle">Gênero: </span>${film.generos.join(", ")}</p>
              <p><span class="details-tittle">Elenco: </span>${film.elenco.join(", ")}</p>
              <h5 class="card-title">${film.titulo}</h5>
              <p class="card-text">${film.resumo}</p>
              ${film.titulosSemelhantes.length > 0 ? `<p class="semelhantes-title">Filmes Semelhantes:</p>` : ""}
              ${film.titulosSemelhantes.map((titulo) => {
                const semelhantes = data.find((filme) => filme.id === titulo);
                return `
                  <a href="#${semelhantes.id}" class="btn btn-success mt-2">${semelhantes.titulo}</a>
                  `;
              }).join("")}
              </div>
            </div>
          </div>
        </div>
      `;
    });
    document.querySelector("#films-content").innerHTML = output;
  })
  .catch((error) => console.error(error));

/**
 * The function returns a color classification based on a given numerical value.
 * @param classificacao - a numerical value representing a classification score.
 * @returns a string that represents the color classification based on the input parameter
 * `classificacao`. If the value of `classificacao` is between 0 and 14 (inclusive), the function
 * returns "verde" (green in Portuguese). If the value is between 15 and 17 (inclusive), the function
 * returns "amarelo" (yellow in Portuguese). Otherwise,
 */
function getClassificacaoClass(classificacao) {
  if (classificacao >= 0 && classificacao <= 14) {
    return "verde";
  } else if (classificacao > 15 && classificacao < 18) {
    return "amarelo";
  } else {
    return "vermelho";
  }
}

/**
 * The function takes a rating and returns HTML code for displaying a star rating with full, half, and
 * empty stars.
 * @param rating - The rating of a product or service, represented as a number between 0 and 5.
 * @returns a string of HTML code that represents a star rating based on the input `rating`. The HTML
 * code consists of full stars, half stars, and empty stars represented by different CSS classes.
 */
function getRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = Math.round(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStar;

  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="bi bi-star-fill star-icon"></i>';
  }

  if (halfStar === 1) {
    starsHTML += '<i class="bi bi-star-half star-icon"></i>';
  }

  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="bi bi-star star-icon"></i>';
  }

  return starsHTML;
}
