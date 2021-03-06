import "../css/busquedas.css";
import "../css/carrusel.css";
import "../css/categorias.css";
import "../css/footer.css";
import "../css/login.css";
import "../css/main.css";
import "../css/navs.css";
import "../css/mediaquerys.css";
import "../css/formulario.css";

// Font Awesome 5 (Free)

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

dom.i2svg();

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

  //Funcion para quitar el modal del login en caso de que se pinche fuera del cuadro
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
    document.getElementById("welcome").innerText =
      "Resultados de:  " +
      window.location.search
        .substring(1)
        .split("=")[1]
        .replaceAll("+", " ")
        .trim();
  }
};
