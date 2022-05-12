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
const putHeaderShadow = () => {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (scrollY > navHeight) {
    header.classList.add('scroll')
  } else header.classList.remove('scroll')
}

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
  #contact .text, #contact .links,
  footer .brand, footer .socialLinks
  `,
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
//Visibilidade do botão
const ReturnButtonVisibility = () => {
  if (window.scrollY > 560) {
    button.classList.add('visible')
  } else button.classList.remove('visible')
  //Alinhar o botão com os social links do footer quando chegar no mesmo
  if (window.scrollY > 3600) {
    button.classList.add('footerPosition')
  } else button.classList.remove('footerPosition')
}

//Eventos da janela
window.addEventListener('scroll', () => {
  putHeaderShadow()
  ReturnButtonVisibility()
})
