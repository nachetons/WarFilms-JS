//import "../css/all.min.css";
import "../css/busquedas.css";
import "../css/carrusel.css";
import "../css/categorias.css";
//import "../css/fontawesome.min.css";
import "../css/footer.css";
import "../css/login.css";
import "../css/main.css";
import "../css/navs.css";


// Font Awesome 5 (Free)


import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab) 

dom.i2svg() 

//Funcion para que espere el javascript a que este todo el html
const busqueda = document.getElementById('titulos');
const main = document.getElementById("list_pelis");
main.classList.add("peliculas");

//https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28
const API_KEY = 'api_key=cfe422613b250f702980a3bbf9e90716';
const URL_BASE = 'https://api.themoviedb.org/3/';

//Peliculas mas populares
const API_URL_CATEGORY = URL_BASE + 'discover/movie?sort_by=popularity.desc&vote_count.gte=2000&'+API_KEY+'&with_genres=';
console.log(API_URL_CATEGORY);
const URL_IMG = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = URL_BASE + 'search/movie?query=';


const arrayMovies = {
  "Action":28,
  "Adventure":12,
  "Animation":16,
  "Comedy":35,
  "Crime":80,
  "Documentary":99,
  "Drama":18,
  "Family":10751,
  "Fantasy":14,
  "History":36,
  "Horror":27,
  "Music":10402,
  "Mystery":9,
  "Romance":10751,
  "Thriller":53,
  "War":10752,
  "Action & Adventure":10759,
  "Western":37
};


const url_category = window.location.search.substring(1).split('=')[1].replace('+', ' ').trim();
busqueda.innerText = url_category;
console.log(arrayMovies[url_category]);


window.onload = function(){



  //Funcion para dar la vuelta a las tarjetas








//Funcion para mostrar menu lateral al dar click a un boton

var contador = 1;

let btn_menu=document.querySelectorAll('.toggle');   
let menus=document.querySelectorAll('.menu__side');   
let opciones=document.querySelectorAll('.options'); 


btn_menu.forEach(item => {
  item.addEventListener('click', event => {
    let widht_size=window.outerWidth;

    if (contador == 1) {
      menus.forEach(item => {

        if (widht_size>900) {
          item.style.visibility = 'visible';
          item.style.width =  '20%';
        }else{
          item.style.visibility = 'visible';
          item.style.width =  '100%';

        }
       


      });
      contador = 0;
    } else {

      if (widht_size <= 1040) {
       menus.forEach(item => {
         item.style.width = '8%' 
 
       });
       contador = 1;
 
     }if (widht_size > 1040) {
       menus.forEach(item => {
         item.style.width = '5%' 
 
       });
       contador = 1;
 
     }
    }
    
  
  });
});


let btn_menu2=document.querySelectorAll('.categorias');   


btn_menu2.forEach(item => {
  item.addEventListener('click', event => {
    let widht_size=window.outerWidth;

    if (contador == 1) {
      menus.forEach(item => {


        if (widht_size>900) {
          item.style.visibility = 'visible';
          item.style.width =  '20%';
        }else{
          item.style.visibility = 'visible';
          item.style.width =  '100%';
        }
       


      });
      contador = 0;

    } else {

      menus.forEach(item => {
        item.style.width = '5%' 

      });
      contador = 1;

    }

    
    
  
  });
});






//Funcion para quitar el modal del login en caso de que se pinche fuera del cuadro
var button = document.getElementById('btn_login_nav');
var closeButton = document.getElementById('close')

var modal = document.getElementById('id01');
var modalContent = document.getElementById('form_content');
var modalContent2 = document.getElementById('form_content2');

var buttonLogin = document.getElementById('btn_login2');
var buttonRegister = document.getElementById('btn_registro');


buttonRegister.addEventListener('click', function() {
  modalContent2.classList.add("animations3");
  modalContent.classList.add("animations2");

  modal.style.display = 'unset';

});


//Si pincho en el nav top aparece menu con la animacion
button.addEventListener('click', function() {
  modalContent.classList.add("animations");
  modal.style.display = 'unset';


});


closeButton.addEventListener('click', function() {
  modal.style.display = "none";
  modalContent.classList.remove("animations");
  modalContent.classList.remove("animations2");
  modalContent2.classList.remove("animations3");

});


document.onclick = function(e){
  if(e.target.id == 'id01'){
    modal.style.display = "none";
    modalContent.classList.remove("animations");
    modalContent.classList.remove("animations2");
    modalContent2.classList.remove("animations3");


  }


};
buttonLogin.addEventListener("click", function() {
  modalContent.classList.remove("animations");
  modal.style.display = "unset";
  modalContent.classList.add("animations2");
  modalContent2.classList.remove("animations3");


});




var login = document.getElementById("btn_login");
var registro = document.getElementById("btn_registro");


var modal = document.getElementById('id01');
    var modal2 = document.getElementById('id02');





  login.addEventListener("click", function() {
    

    //modal.style.visibility = "visible";
 
      
    
    modal.style.display = "block";
    modal2.style.display = "none";

  });
  registro.addEventListener("click", function() {

   // modal2.style.visibility="visible";
    modal.style.display = "none";
    modal2.style.display = "block";


  });





  var login2 = document.getElementById("btn_login2");
var registro2 = document.getElementById("btn_registro2");







  login2.addEventListener("click", function() {
    

    //modal.style.visibility = "visible";
      
    
    modal.style.display = "block";
    modal2.style.display = "none";

  });
  registro2.addEventListener("click", function() {

   // modal2.style.visibility="visible";
    modal.style.display = "none";
    modal2.style.display = "block";


  });


//Funcion carrusel header

/*for (let index = 0; index < 11; index++) {
  var foto= document.getElementById("foto");
  foto.src="../images/Pelis_grandes/"+index+".jpg";
  
}*/





const navs = document.querySelectorAll('.option');
navs.forEach(nav => {
  nav.addEventListener('click', function (e) {
    window.location.href = "./categorias.html?search=" + e.target.textContent;
    console.log(e.target.textContent);
  })
})


};


getData(API_URL_CATEGORY+arrayMovies[url_category]);

function getData(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      showData(data.results);
    })
    .catch(error => console.log(error));
}

function showData(data) {

  main.innerHTML = '';
  let count = 0;

  data.forEach(movie => {

    count = count + 1;

    const { title, poster_path, vote_average, genre_ids, backdrop_path } = movie;

    //carrusel2



    const mainEl = document.createElement("div");
  

    
    
    
    if (count <= 16) {

      mainEl.innerHTML = `
      
      <a href="#">
      <div class="poster">
        <img src="${URL_IMG + poster_path}" style="width: 100%" alt="Imagen portada">
      </div>
    </a>

        `;

      main.appendChild(mainEl);



    }

    //display title, poster_path, overview to 10 first elements of array of movie

  })
}

//Predict text search
const entrada = document.getElementById("mySearch");
const textoPre = document.getElementById('textoPredict');

entrada.addEventListener('input', predict);
//entrada.addEventListener('propertychange', data,predictTexts);

function predict(e) {
  e.preventDefault();


  fetch(SEARCH_URL + e.target.value + "&" + API_KEY)
    .then(response => response.json())
    .then(data => {
      if (!data.Error) {
        console.log(data);
        predictTexts(data.results);
        // peliculas.push(data.results);

      } else {
        predictTexts([]);
      }
    })

}

function predictTexts(data) {



  clearPredict();


  if (data.length > 0) {
    textoPre.style.display = "block";
    textoPredict.style.border = "thick solid red";


    const peliculas = [];

    data.forEach(item => {
      if (item.title.toLowerCase().includes(entrada.value.toLowerCase()) && entrada.value != null) {
        peliculas.push(item.title);

        //textoPre.innerHTML += "<li>"+item.original_title+"</li>";
      }
    });

    removeDuplicates(peliculas);

    //display 10 first elements to array of peliculas
    if (peliculas.length > 10) {

      for (let index = 0; index < 10; index++) {

        textoPre.innerHTML += "<li class='lista_predict'>" + peliculas[index] + "</li>";
      }
    } else {
      for (let index = 0; index < peliculas.length; index++) {
        textoPre.innerHTML += "<li class='lista_predict'>" + peliculas[index] + "</li>";
      }
    }
    textoPre.innerHTML += "</li></ul>";

    const forms = document.getElementById('myForm');


    textoPre.addEventListener('click', (e) => {

      window.location.href = "./busquedas.html?search=" + e.target.textContent;



      console.log(e.target.textContent);



    });

    // textoPre.innerHTML += "</ul>";
  } else {
    clearPredict()
  }

  if (entrada.length == 0) {
    console.log("vacio");
    textoPre.style.display = "none";

  }
  if (entrada.length == entrada.length - 1) {
    clearPredict()


  }


}

function removeDuplicates(array) {
  array.splice(0, array.length, ...(new Set(array)))
};


function clearPredict() {
  textoPre.innerHTML = "";
  textoPre.style.display = "none";

};












 




