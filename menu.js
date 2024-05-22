/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


      /*Mostrar Menu*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*Esconder Menu*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
      //quando clicar em um nav__link remover a classe show-menu
      navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== MUDAR MENU HEADER ===============*/
const blurHeader = () =>{
      const header = document.getElementById('header')
      //adicione uma classe se o deslocamento inferior for maior que 50 da janela de visualização
      this.scrollY >= 50 ? header.classList.add('blur-header')
                         :header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

