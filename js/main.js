var myresult = [];
let list = `https://api.themoviedb.org/3/movie/now_playing?api_key=6ecf91ab584cfd949497079064c7bd30`;
async function movies() {
  
  var moveList = await fetch(
    list
  );
  myresult = await moveList.json();
  return myresult.results;
}

async function display(params) {
  let moviesList = await movies();
  // console.log(moviesList);
  var movie = ``;
  for (let i = 0; i < moviesList.length; i++) {
    movie += `<div id="movieboster" class="col-md-4 position-relative rounded my-2 px-1">
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
  document.getElementById(`postes`).innerHTML = movie;
}
display();
// // console.log(moviesList);
// $("#postes")
//   .append(`<div id="movieboster" class="col-md-4 position-relative overflow-hidden my-1">
//           <div class="layer position-absolute  start-0"></div>
//           <div class="movieimg"><img src="image/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" alt="movie img" class="img-fluid "></div>
//         </div>`);
$("#slidenvbtn").click(function (params) {
  let currentwdth = $("#heddinNav").outerWidth();
  if ($("#sideinfo").css("left") == "0px") {
    $("#sideinfo").animate({ left: -currentwdth }, 500);
  } else {
    $("#sideinfo").animate({ left: "0px" }, 500);
  }
});

$("#color-change").click(function (params) {
  $(".change-color").toggleClass("dark-color");
});
// search on api 

$("#search1").keyup(async function () {
  var e = this.value;
  let apimovies=[]
  var moveList = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6ecf91ab584cfd949497079064c7bd30&query=${e}`
  );
  apimovies = await moveList.json();
  apiresult=apimovies.results;
  let moviesData = await movies();
  var movie = "";
  for (let i = 0; i < apiresult.length; i++) {
    if (
      apiresult[i].original_title.toLowerCase().includes(e.toLowerCase()) ===
      true
    ) {
      movie += `<div id="movieboster" class="col-md-4 position-relative rounded my-2 px-1">
              <div class="position-absolute  w-100 h-100">
               <div class="layer position-absolute text-center overflow-hidden  start-0">
               <h2 class=" fw-bolder mt-md-5 fs-5">${
                 apiresult[i].original_title
               }</h2>
               <p class="" >${apiresult[i].overview}<p>
               <p class=" " >${apiresult[i].vote_average}<p>
               <p class=" " >${apiresult[i].release_date}<p>
               </div></div>
               <div class="movieimg img-fluid rounded"><img src=${`https://image.tmdb.org/t/p/w500/${apiresult[i].poster_path}`}
        
               alt="movie img" class="img-fluid "></div>
             </div>`;
    }
    document.getElementById(`postes`).innerHTML = movie;
  }
});
// search on page 
$("#search2").keyup(async function () {
  var e = this.value;
  let moviesData = await movies();
  var movie = "";
  for (let i = 0; i < moviesData.length; i++) {
    if (
      moviesData[i].original_title.toLowerCase().includes(e.toLowerCase()) ===
      true
    ) {
      movie += `<div id="movieboster" class="col-md-4 position-relative rounded my-2 px-1">
              <div class="position-absolute  w-100 h-100">
               <div class="layer position-absolute text-center overflow-hidden  start-0">
               <h2 class=" fw-bolder mt-md-5 fs-5">${
                 moviesData[i].original_title
               }</h2>
               <p class="" >${moviesData[i].overview}<p>
               <p class=" " >${moviesData[i].vote_average}<p>
               <p class=" " >${moviesData[i].release_date}<p>
               </div></div>
               <div class="movieimg img-fluid rounded"><img src=${`https://image.tmdb.org/t/p/w500/${moviesData[i].poster_path}`}
        
               alt="movie img" class="img-fluid "></div>
             </div>`;
    }
    document.getElementById(`postes`).innerHTML = movie;
  }
});
// apicategorylist = "";
  
$("#heddinNav li").click(async function () {
  let category = [
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6ecf91ab584cfd949497079064c7bd30",
    "https://api.themoviedb.org/3/movie/popular?api_key=6ecf91ab584cfd949497079064c7bd30",
    "https://api.themoviedb.org/3/movie/top_rated?api_key=6ecf91ab584cfd949497079064c7bd30",
    "https://api.themoviedb.org/3/trending/all/day?api_key=6ecf91ab584cfd949497079064c7bd30",
    "https://api.themoviedb.org/3/movie/upcoming?api_key=6ecf91ab584cfd949497079064c7bd30&language=en-US&page=1",
  ];  
  if ($(this).index()<5) {
  list=category[$(this).index()];
  }
movies()
display()
});
var inputs = $(".form-control");
function resetForm() {
  for (let i = 0; i <inputs.length; i++) {
    inputs[i].value = ``;
  }
}
$('#name').keyup(function (params) {
  if($(this).value==/^A-Z[a-z]{2-8}/){
   $("#nalert").addClass("d-none");
  }else{
      $("#nalert").removeClass("d-none");
      console.log(this.value);
  }
})
$("#email").keyup(function (params) {
  if ($(this).value == /^A-Z[a-z]{2-8}/) {
    $("#aemail").addClass("d-none");
  } else {
    $("#aemail").removeClass("d-none");
    console.log(this.value);
  }
});
$("#Phone").keyup(function (params) {
  if ($(this).value == /^A-Z[a-z]{2-8}/) {
    $("#palert").addClass("d-none");
  } else {
    $("#palert").removeClass("d-none");
    console.log(this.value);
  }
});
$("#age").keyup(function (params) {
  if ($(this).value == /^A-Z[a-z]{2-8}/) {
    $("#aage").addClass("d-none");
  } else {
    $("#aage").removeClass("d-none");
    console.log(this.value);
  }
});
$("#password").keyup(function (params) {
  if ($(this).value == /^A-Z[a-z]{2-8}/) {
    $("#apassword").addClass("d-none");
  } else {
    $("#apassword").removeClass("d-none");
    console.log(this.value);
  }
});
resetForm()