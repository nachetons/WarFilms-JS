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

var contador = 1;

let btn_menu=document.querySelectorAll('.toggle');   
let menus=document.querySelectorAll('.sidebar');    


btn_menu.forEach(item => {
  item.addEventListener('click', event => {
    if (contador == 1) {
      menus.forEach(item => {
        item.style.visibility = 'visible';
        item.style.width =  '20%';


      });
      contador = 0;
    } else {
      menus.forEach(item => {
        item.style.visibility = 'hidden';
        item.style.width = '0' 

      });
      contador = 1;
    }
    
  
  });
});

  /*if (btn_menu.style.display != "unset") {
    menus.forEach(item => {
      item.style.visibility = 'visible';
      item.style.width =  '20%';


    }); 

  }*/






/*var vuelta  = document.querySelector(".card" + 1);
var vuelta2 = document.querySelector(".card" + 2);
var vuelta3 = document.querySelector(".card" + 3);
var vuelta4 = document.querySelector(".card" + 4);
var vuelta5 = document.querySelector(".card" + 5);
var vuelta6 = document.querySelector(".card" + 6);
var vuelta7 = document.querySelector(".card" + 7);


function Animacion() {
  vuelta.classList.toggle("flip");

}
function Animacion2() {
  vuelta2.classList.toggle("flip");

}
function Animacion3() {
  vuelta3.classList.toggle("flip");


}
function Animacion4() {
  vuelta4.classList.toggle("flip");


}
function Animacion5() {
  vuelta5.classList.toggle("flip");


}
function Animacion6() {
  vuelta6.classList.toggle("flip");


}
function Animacion7() {
  vuelta7.classList.toggle("flip");


}*/
//create function animacion flip will toggle the class flip


