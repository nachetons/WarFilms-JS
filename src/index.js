//import "../css/all.min.css";
import "../css/busquedas.css";
import "../css/carrusel.css";
import "../css/categorias.css";
//import "../css/fontawesome.min.css";
import "../css/footer.css";
import "../css/login.css";
import "../css/main.css";
import "../css/navs.css";
import "../css/mediaquerys.css";

// Font Awesome 5 (Free)

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

dom.i2svg();

//Obtener la fecha actual y restarle 3 meses
let date = new Date();
let day = `0${date.getDate()}`.slice(-2);
let month = `0${date.getMonth() - 2}`.slice(-2);
let year = date.getFullYear();
const last3months = year + "-" + month + "-" + day;
console.log(last3months);

//Todas las url que necesitaremos para las busquedas
const API_KEY = "api_key=cfe422613b250f702980a3bbf9e90716";
const URL_BASE = "https://api.themoviedb.org/3/";

//Peliculas mas populares
const API_URL_POP =
  URL_BASE +
  "discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&" +
  API_KEY;

//Peliculas de los 3 ultimos meses y mas populares
const API_URL_NEW =
  URL_BASE +
  "discover/movie?sort_by=popularity.desc&primary_release_date.lte=" +
  last3months +
  "&include_adult=false&include_video=false&page=1&" +
  API_KEY;

//Peliculas mas valoradas
const API_URL_RATED =
  URL_BASE +
  "discover/movie?sort_by=vote_average.desc&vote_count.gte=300&page=1&" +
  API_KEY;
const SEARCH_URL = URL_BASE + "search/movie?query=";
const SEARCH_URL_ID = URL_BASE + "movie/";

const URL_IMG = "https://image.tmdb.org/t/p/w500";

//Funcion para que espere el javascript a que este todo el html
window.onload = function () {
  //Funcion para mostrar menu lateral al dar click a un boton
  var contador = 1;

  let btn_menu = document.querySelectorAll(".toggle");
  let menus = document.querySelectorAll(".menu__side");

  btn_menu.forEach((item) => {
    item.addEventListener("click", (event) => {
      let widht_size = window.outerWidth;

      if (contador == 1) {
        menus.forEach((item) => {
          if (widht_size > 900) {
            item.style.visibility = "visible";
            item.style.width = "20%";
          } else {
            item.style.visibility = "visible";
            item.style.width = "100%";
          }
        });

        contador = 0;
      } else {
        if (widht_size <= 1040) {
          menus.forEach((item) => {
            item.style.width = "8%";
          });
          contador = 1;
        }
        if (widht_size > 1040) {
          menus.forEach((item) => {
            item.style.width = "5%";
          });
          contador = 1;
        }
      }
    });
  });

  let btn_menu2 = document.querySelectorAll(".categorias");

  btn_menu2.forEach((item) => {
    item.addEventListener("click", (event) => {
      let widht_size = window.outerWidth;

      if (contador == 1) {
        menus.forEach((item) => {
          if (widht_size > 900) {
            item.style.visibility = "visible";
            item.style.width = "20%";
          } else {
            item.style.visibility = "visible";
            item.style.width = "100%";
          }
        });
        contador = 0;
      } else {
        menus.forEach((item) => {
          item.style.width = "5%";
        });
        contador = 1;
      }
    });
  });

  var button = document.getElementById("btn_login_nav");
  var closeButton = document.getElementById("close");

  var modal = document.getElementById("id01");
  var modalContent = document.getElementById("form_content");
  var modalContent2 = document.getElementById("form_content2");

  var buttonLogin = document.getElementById("btn_login2");
  var buttonRegister = document.getElementById("btn_registro");

  buttonRegister.addEventListener("click", function () {
    modalContent2.classList.add("animations3");
    modalContent.classList.add("animations2");

    modal.style.display = "unset";
  });

  //Si pincho en el nav top aparece menu con la animacion
  button.addEventListener("click", function () {
    modalContent.classList.add("animations");
    modal.style.display = "unset";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    modalContent.classList.remove("animations");
    modalContent.classList.remove("animations2");
    modalContent2.classList.remove("animations3");
  });

  //Funcion para quitar el modal del login en caso de que se pinche fuera del cuadro
  document.onclick = function (e) {
    if (e.target.id == "id01") {
      modal.style.display = "none";
      modalContent.classList.remove("animations");
      modalContent.classList.remove("animations2");
      modalContent2.classList.remove("animations3");
    }
  };
  buttonLogin.addEventListener("click", function () {
    modalContent.classList.remove("animations");
    modal.style.display = "unset";
    modalContent.classList.add("animations2");
    modalContent2.classList.remove("animations3");
  });

  var login = document.getElementById("btn_login");
  var registro = document.getElementById("btn_registro");
  var modal = document.getElementById("id01");
  var modal2 = document.getElementById("id02");

  login.addEventListener("click", function () {
    modal.style.display = "block";
    modal2.style.display = "none";
  });
  registro.addEventListener("click", function () {
    modal.style.display = "none";
    modal2.style.display = "block";
  });

  var login2 = document.getElementById("btn_login2");
  var registro2 = document.getElementById("btn_registro2");
  login2.addEventListener("click", function () {
    modal.style.display = "block";
    modal2.style.display = "none";
  });
  registro2.addEventListener("click", function () {
    modal.style.display = "none";
    modal2.style.display = "block";
  });

  const entrada = document.getElementById("mySearch");

  if (entrada.value != "") {
    const busquedas = (document.getElementById("welcome").innerText =
      "Resultados de:  " +
      window.location.search
        .substring(1)
        .split("=")[1]
        .replace("+", " ")
        .trim());
  }

  const textCategory = document.querySelectorAll(".text_category");
  textCategory.forEach((nav) => {
    nav.addEventListener("click", function (e) {
      if (
        e.target.textContent != "" &&
        !e.target.textContent.includes("%20") &&
        !e.target.textContent.includes("undefined")
      ) {
        window.location.href =
          "./categorias.html?search=" + e.target.textContent;
        console.log(e.target.textContent);
      }
    });
  });
};

const main = document.getElementById("pelis_header");
const car1 = document.getElementById("carruseles1");
const car2 = document.getElementById("carruseles2");
const car3 = document.getElementById("carruseles3");

const arrayID = [];

getData(API_URL_POP);
getData2(API_URL_NEW);
getData3(API_URL_RATED);

console.log(arrayID);

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showData(data.results);
    })
    .catch((error) => console.log(error));
}

function showData(data) {
  main.innerHTML = "";
  car1.innerHTML = "";
  let count = 0;

  data.forEach((movie) => {
    count = count + 1;
    const {
      title,
      poster_path,
      vote_average,
      genre_ids,
      backdrop_path,
      id,
      overview,
    } = movie;

    //Header principal
    const movieEl = document.createElement("div");
    movieEl.classList.add("mySlides");
    movieEl.classList.add("fade");

    //carrusel1
    const car1El = document.createElement("div");
    car1El.classList.add("movie-card");
    car1El.classList.add("carrusel1");

    if (count <= 10) {
      movieEl.innerHTML = `
      
        <img src="${URL_IMG + poster_path}" />
        <div class="text_title">${title}</div>
        <div class="text movie-rating">${vote_average}</div>

        <div class="genre">${genre_ids}</div>
          `;

      arrayID.push(id);

      car1El.innerHTML = `

        <div class="movie-card carrusel1">
        <div class="delante" id="delante_${id}">
          <div class="movie-image"><img src="${
            URL_IMG + backdrop_path
          }" style="width: 100%" /></div>
          <h4 class="movie-title">${title}</h4>
          <div class="movie-rating">${vote_average}</div>
          <button class="boton-card flip" id="${id}">Trailer</button>
        </div>

        <div class="detras">
        <strong id="detras_${id}">
        ${overview}</strong>
          <br />
          <button class="boton-card flp" id="detrasbtn_${id}">Pelicula</button>
        </div>
      </div>

        `;

      main.appendChild(movieEl);
      car1.appendChild(car1El);

      document.getElementById(id).addEventListener("click", (event) => {
        const cc = event.target.parentElement.parentElement;
        cc.classList.toggle("flipped");
        getData4(
          SEARCH_URL_ID + id + "?" + API_KEY + "&append_to_response=videos",
          id
        );
      });

      document
        .getElementById("detrasbtn_" + id)
        .addEventListener("click", (event) => {
          const cc = event.target.parentElement.parentElement;
          cc.classList.toggle("flipped");
          deleteFrame(id, overview);
        });
    }
  });
}

function getData2(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showData2(data.results);
    })
    .catch((error) => console.log(error));
}

function showData2(data) {
  car2.innerHTML = "";
  let count = 0;

  data.forEach((movie) => {
    count = count + 1;
    const { title, vote_average, backdrop_path, overview, id } = movie;

    //carrusel2
    const car2El = document.createElement("div");
    car2El.classList.add("movie-card");
    car2El.classList.add("carrusel2");

    if (count <= 10) {
      car2El.innerHTML = `

        <div class="movie-card carrusel2">
        <div class="delante">
          <div class="movie-image"><img src="${
            URL_IMG + backdrop_path
          }" style="width: 100%" /></div>
          <h4 class="movie-title">${title}</h4>
          <h6>Sep 28,2018</h6>
          <div class="movie-rating">${vote_average}</div>
          <button class="boton-card flip" id="${id}">Trailer</button>
        </div>

        <div class="detras">
        <strong id="detras_${id}">
        ${overview}</strong>
          <br />
          <button class="boton-card flp" id="detrasbtn_${id}">Pelicula</button>
        </div>
      </div>

        `;

      car2.appendChild(car2El);

      document.getElementById(id).addEventListener("click", (event) => {
        const cc = event.target.parentElement.parentElement;
        cc.classList.toggle("flipped");
        getData4(
          SEARCH_URL_ID + id + "?" + API_KEY + "&append_to_response=videos",
          id
        );
      });

      document
        .getElementById("detrasbtn_" + id)
        .addEventListener("click", (event) => {
          const cc = event.target.parentElement.parentElement;
          cc.classList.toggle("flipped");
          deleteFrame(id, overview);
        });
    }
  });
}

function getData3(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showData3(data.results);
      console.log(url);
    })
    .catch((error) => console.log(error));
}

function showData3(data) {
  car3.innerHTML = "";
  let count = 0;

  data.forEach((movie) => {
    count = count + 1;
    const {
      title,
      vote_average,
      backdrop_path,
      overview,
      id,
    } = movie;

    //carrusel2
    const car3El = document.createElement("div");
    car3El.classList.add("movie-card");
    car3El.classList.add("carrusel3");

    if (count <= 10) {
      car3El.innerHTML = `
  
          <div class="movie-card carrusel3">
          <div class="delante">
            <div class="movie-image"><img src="${
              URL_IMG + backdrop_path
            }" style="width: 100%" /></div>
            <h4 class="movie-title">${title}</h4>
            <h6>Sep 28,2018</h6>
            <div class="movie-rating">${vote_average}</div>
            <button class="boton-card flip" id="${id}">Trailer</button>
        </div>

        <div class="detras">
        <strong id="detras_${id}">
        ${overview}</strong>
          <br />
          <button class="boton-card flp" id="detrasbtn_${id}">Pelicula</button>
        </div>
      </div>

        `;

      car3.appendChild(car3El);

      document.getElementById(id).addEventListener("click", (event) => {
        const cc = event.target.parentElement.parentElement;
        cc.classList.toggle("flipped");
        getData4(
          SEARCH_URL_ID + id + "?" + API_KEY + "&append_to_response=videos",
          id
        );
      });

      document
        .getElementById("detrasbtn_" + id)
        .addEventListener("click", (event) => {
          const cc = event.target.parentElement.parentElement;
          cc.classList.toggle("flipped");
          deleteFrame(id, overview);
        });
    }
  });
}

function getData4(url, id) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(url);
      showData4(data.videos.results, id);
    })
    .catch((error) => console.log(error));
}

function showData4(data, ids) {
  let count = 0;

  data.forEach((movie) => {
    const { key, type, site, id } = movie;

    if (type == "Trailer" && site == "YouTube") {
      count = count + 1;
      if (count == 1) {
        cargarFrame(key, ids);
        console.log(key);
        count = 0;
      }
    } else if (type == "Clip" && site == "YouTube") {
      count = count + 1;
      if (count == 1) {
        cargarFrame(key, ids);
        console.log(key);
        count = 0;
      }
    } else if (type == "Teaser" && site == "YouTube") {
      count = count + 1;
      if (count == 1) {
        cargarFrame(key, ids);
        console.log(key);
        count = 0;
      }
    } else {
      console.log("no hay trailer");
    }
  });
}

function cargarFrame(idKey, id) {
  console.log(idKey);
  console.log(id);
  document.getElementById(
    "detras_" + id
  ).innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${idKey}" title="YouTube video player" frameborder="0" allow="accelerometer;
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
function deleteFrame(id, overview) {
  console.log(id);
  const myframe = document.getElementById("detras_" + id);
  myframe.innerHTML = overview;
}

//Predict text search
const entrada = document.getElementById("mySearch");
const textoPre = document.getElementById("textoPredict");

entrada.addEventListener("input", predict);

function predict(e) {
  e.preventDefault();

  fetch(SEARCH_URL + e.target.value + "&" + API_KEY)
    .then((response) => response.json())
    .then((data) => {
      if (!data.Error) {
        console.log(data);
        predictTexts(data.results);
      } else {
        predictTexts([]);
      }
    });
}

function predictTexts(data) {
  clearPredict();

  if (data.length > 0) {
    textoPre.style.display = "block";
    textoPredict.style.border = "thick solid red";

    const peliculas = [];

    data.forEach((item) => {
      if (
        item.title.toLowerCase().includes(entrada.value.toLowerCase()) &&
        entrada.value != null
      ) {
        peliculas.push(item.title);
      }
    });

    removeDuplicates(peliculas);

    if (peliculas.length > 10) {
      for (let index = 0; index < 10; index++) {
        textoPre.innerHTML +=
          "<li class='lista_predict'>" + peliculas[index] + "</li>";
      }
    } else {
      for (let index = 0; index < peliculas.length; index++) {
        textoPre.innerHTML +=
          "<li class='lista_predict'>" + peliculas[index] + "</li>";
      }
    }
    textoPre.innerHTML += "</li></ul>";

    textoPre.addEventListener("click", (e) => {
      window.location.href = "./busquedas.html?search=" + e.target.textContent;

      console.log(e.target.textContent);
    });
  } else {
    clearPredict();
  }

  if (entrada.length == 0) {
    console.log("vacio");
    textoPre.style.display = "none";
  }
  if (entrada.length == entrada.length - 1) {
    clearPredict();
  }
}

function removeDuplicates(array) {
  array.splice(0, array.length, ...new Set(array));
}

function clearPredict() {
  textoPre.innerHTML = "";
  textoPre.style.display = "none";
}

/*MOVIE
Action          28
Adventure       12
Animation       16
Comedy          35
Crime           80
Documentary     99
Drama           18
Family          10751
Fantasy         14
History         36
Horror          27
Music           10402
Mystery         9648
Romance         10749
Science Fiction 878
TV Movie        10770
Thriller        53
War             10752
Western         37*/

//create array of movies
