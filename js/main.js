async function movies(params) {
  var moveList = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6ecf91ab584cfd949497079064c7bd30"
  );
  myresult = await moveList.json();
  return myresult.results;
}

async function display(params) {
  let moviesList = await movies();
  console.log(moviesList);
  var movie = ``;
  for (let i = 0; i < moviesList.length; i++) {
    movie += `<div id="movieboster" class="col-md-4 position-relative rounded my-1 px-1">
              <div class="position-absolute  w-100 h-100">
               <div class="layer position-absolute text-center overflow-hidden  start-0">
               <h2 class=" fw-bolder mt-md-5 fs-5">${
                 moviesList[i].original_title
               }</h2>
               <p class="" >${moviesList[i].overview}<p>
               <p class=" " >${moviesList[i].vote_average}<p>
               <p class=" " >${moviesList[i].release_date}<p>
               </div></div>
               <div class="movieimg img-fluid rounded"><img src=${`https://image.tmdb.org/t/p/w500/${moviesList[i].poster_path}`}
        
               alt="movie img" class="img-fluid "></div>
             </div>`;
  }
  document.getElementById(`postes`).innerHTML += movie;
}
display();
// // console.log(moviesList);
// $("#postes")
//   .append(`<div id="movieboster" class="col-md-4 position-relative overflow-hidden my-1">
//           <div class="layer position-absolute  start-0"></div>
//           <div class="movieimg"><img src="image/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" alt="movie img" class="img-fluid "></div>
//         </div>`);
$("#slidenvbtn").click(function (params) {
  $("#heddinNav").toggle(500);
});
