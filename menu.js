/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


      /*Mostrar Menu*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        navToggle.style.display ="none"
    })
}

/*Esconder Menu*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        navToggle.style.display ="flex"
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
      //quando clicar em um nav__link remover a classe show-menu
      navMenu.classList.remove('show-menu')
      navToggle.style.display ="flex"

}
navLink.forEach(n => n.addEventListener('click', linkAction))

