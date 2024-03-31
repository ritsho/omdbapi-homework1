
let btn = document.getElementById("btnsearch");
btn.addEventListener("click",function(){
  let movieName = document.getElementById("inputName").value;
  let year = document.getElementById("inputYear").value;
  searchMovie(movieName, year);
});

async function searchMovie(name, year) {
  let myAPIKey = "36ef978f";
  let url = `https://www.omdbapi.com/?t=${name}`;

  if (year != ""){
    url += `&y=${year}`;
  }

  url += `&apikey=${myAPIKey}`;
  let response = await fetch(url);
  
  if (!response.ok) {
    console.log("error getting response from omdbapi");
    return;
  }

  let data = await response.json();
  let movieTitle = document.getElementById("movieTitle");
  movieTitle.innerText = data.Title;
  
  let pGenre = document.getElementById("pGenre");
  pGenre.innerText = data.Genre;

  let pYear = document.getElementById("pYear");
  pYear.innerText = data.Year;

  let pDirector = document.getElementById("pDirector");
  pDirector.innerText = data.Director;

  let pActors = document.getElementById("pActors");
  pActors.innerText = data.Actors;

  let pPlot = document.getElementById("pPlot");
  pPlot.innerText = data.Plot;

  let imgPoster = document.getElementById("imgPoster");
  imgPoster.src = data.Poster;
}
