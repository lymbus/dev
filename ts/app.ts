'use strict'

const nav    = ( document.querySelector ('.header__nav')  as HTMLElement )
const menu   = ( document.querySelector ('.header')       as HTMLElement )
const barra  = ( document.querySelector ('.header__menu') as HTMLElement )
const liMenu =   document.querySelectorAll <HTMLElement>   ('.header__li')
const proy=( document.querySelector ('.resumen__tipo') as HTMLElement )

const cursor  = ( document.querySelector ('.cursor') as HTMLElement )
// const contacto   = ( document.querySelector ('.contacto__pop')    as HTMLElement )
// const bContacto  = ( document.querySelector ('.contacto__p')      as HTMLElement )
// const bCerrar    = ( document.querySelector ('.contacto__cerrar') as HTMLElement )
// const sCerrar    = ( document.querySelector ('.resumen__cerrar') as HTMLElement )
const imagenes   =   document.querySelectorAll <HTMLElement>   ('.resumen__img')

const icono      =   document.querySelectorAll <HTMLElement>   ('.proyectos__icono')

const git        =   document.querySelectorAll <HTMLElement>   ('.proyectos__git')

// Abrir/cerrar CONTACTO
let abrir=():void=>{
      menu.classList.toggle('ampliar')
      barra.classList.toggle('cerrar')
      nav.classList.toggle('abrir')
}

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
barra.addEventListener('click',abrir)

window.addEventListener('scroll',():void=>{    
            if(window.scrollY>500 ){
                  menu.classList.add('ampliar') 
            }
            else{
                  menu.classList.remove('ampliar')
            }        
})
                   
//   LINEAS MENÚ

const pincel=document.querySelectorAll<HTMLElement>('.header__svg')

// liMenu.forEach((cadaLista,i):void =>{
//       liMenu[i].addEventListener('click',():void =>{
//           pincel.forEach((cadaLista,i): void =>{
//               pincel[i].classList.remove('des')
//           })
//       pincel[i].classList.add('des')    
//       })
//   })

const seccionProy=document.querySelectorAll<HTMLElement>('.proyectos__seccion');

icono.forEach((cadaP:any,i:number):void=>{
      icono[i].addEventListener('click',():void=>{
            git.forEach((cadaP:any,i:number):void=>{
                  git[i].classList.remove('play')
                  icono[i].style.opacity='1' 
            })
      })
            icono[i].addEventListener('click',():void=>{
                  git[i].classList.add('play')
                  icono[i].style.opacity='0'
            })
})


let eyeball  = (e:any):void=>{
      cursor.style.top=`${e.pageY}px`
      cursor.style.left=`${e.pageX}px`
      e.preventDefault();
      console.log(e)
  }
  window.addEventListener('mousemove',eyeball)