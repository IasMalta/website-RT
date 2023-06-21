let navbar = document.querySelector('.header .navbar')
let searchForm = document.querySelector('.header .search-form')
let loginForm = document.querySelector('.header .login-form')
let contactInfo = document.querySelector('.contact-info')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
  searchForm.classList.remove('active')
  loginForm.classList.remove('active')
}

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active')
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
}

document.querySelector('#info-btn').onclick = () => {
  contactInfo.classList.add('active')
}

document.querySelector('#close-contact-info').onclick = () => {
  contactInfo.classList.remove('active')
}

window.onscroll = () => {
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
  loginForm.classList.remove('active')
  contactInfo.classList.remove('active')
}

/*Var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
  proximaImg()
}, 6000)

function proximaImg() {
  cont++

  if (cont > 3) {
    cont = 1
  }

  document.getElementById('radio' + cont).checked = true
}

var date = new Date().getFullYear()

document.getElementById('year').innerHTML = date

/*var swiper = new Swiper('.home-slider', {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

var swiper = new Swiper('.home-slider', {
  autoplay: {
    delay: 5000
  }
}) */

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
