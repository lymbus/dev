'use strict';
var nav = document.querySelector('.header__nav');
var menu = document.querySelector('.header');
var barra = document.querySelector('.header__menu');
var liMenu = document.querySelectorAll('.header__li');
var proy = document.querySelector('.resumen__tipo');
var cursor = document.querySelector('.cursor');
// const contacto   = ( document.querySelector ('.contacto__pop')    as HTMLElement )
// const bContacto  = ( document.querySelector ('.contacto__p')      as HTMLElement )
// const bCerrar    = ( document.querySelector ('.contacto__cerrar') as HTMLElement )
// const sCerrar    = ( document.querySelector ('.resumen__cerrar') as HTMLElement )
var imagenes = document.querySelectorAll('.resumen__img');
var icono = document.querySelectorAll('.proyectos__icono');
var git = document.querySelectorAll('.proyectos__git');
// Abrir/cerrar CONTACTO
var abrir = function () {
    menu.classList.toggle('ampliar');
    barra.classList.toggle('cerrar');
    nav.classList.toggle('abrir');
};
// let popContacto=():void=>{
//       if(contacto.classList.contains('up')){
//             contacto.classList.remove('up')
//       }
//       else{
//             contacto.classList.add('up')
//       }
// }
// bContacto.addEventListener('click',popContacto)
// bCerrar  .addEventListener('click',popContacto)
// liMenu.forEach((cadaLi:any,i:number):void =>{
//       liMenu[i].addEventListener('click',():void =>{
//             contacto.classList.remove('up')      
//       })
//       liMenu[3].addEventListener('click',(e):void=>{
//             e.preventDefault();
//             contacto.classList.toggle('up')
//       })     
// })
// Abrir MENÚ
barra.addEventListener('click', abrir);
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        menu.classList.add('ampliar');
    }
    else {
        menu.classList.remove('ampliar');
    }
});
//   LINEAS MENÚ
var pincel = document.querySelectorAll('.header__svg');
// liMenu.forEach((cadaLista,i):void =>{
//       liMenu[i].addEventListener('click',():void =>{
//           pincel.forEach((cadaLista,i): void =>{
//               pincel[i].classList.remove('des')
//           })
//       pincel[i].classList.add('des')    
//       })
//   })
var seccionProy = document.querySelectorAll('.proyectos__seccion');
icono.forEach(function (cadaP, i) {
    icono[i].addEventListener('click', function () {
        git.forEach(function (cadaP, i) {
            git[i].classList.remove('play');
            icono[i].style.opacity = '1';
        });
    });
    icono[i].addEventListener('click', function () {
        git[i].classList.add('play');
        icono[i].style.opacity = '0';
    });
});
var eyeball = function (e) {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
    e.preventDefault();
    console.log(e);
};
window.addEventListener('mousemove', eyeball);
