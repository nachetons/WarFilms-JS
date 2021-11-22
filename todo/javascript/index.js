

//Funcion para que espere el javascript a que este todo el html

window.onload = function(){



  //Funcion para dar la vuelta a las tarjetas

let btn = document.querySelectorAll('.flip');
let btn2 = document.querySelectorAll('.flp');


btn.forEach(item => {
  item.addEventListener('click', event => {
    const cc = event.target.parentElement.parentElement;
    cc.classList.toggle('flipped');
  });
});

btn2.forEach(item => {
  item.addEventListener('click', event => {
    const cc = event.target.parentElement.parentElement;
    cc.classList.toggle('flipped');
  });
});






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

var modal = document.getElementById('id01');
document.onclick = function(e){
  if(e.target.id == 'id01'){
    modal.style.display = "none";

  }


 

};

//Funcion carrusel header

/*for (let index = 0; index < 11; index++) {
  var foto= document.getElementById("foto");
  foto.src="../images/Pelis_grandes/"+index+".jpg";
  
}*/


};



//Funcion para mostrar todos los componentes
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}










 




