// Pegando elementos-DOM
const nav = document.querySelector('.container')
const links = document.querySelectorAll('nav ul li a')

//Funcionalidade de abrir e fechar do menu
const menuToggle = () => {
  nav.classList.toggle('show')
}

//Direcionamento dos links com o menu aberto
for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

//Colocar a sombra no header quando a página for scrollada
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if (scrollY > navHeight) {
    header.classList.add('scroll')
  } else header.classList.remove('scroll')
})

//Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

//ScrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  //ao chegar no fim da pagina reseta as animações
  reset: true
})
scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image,#about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links`,

  { interval: 100 }
)

//RETURN TO TOP BUTTON
const button = document.querySelector('.returnButton')
button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
