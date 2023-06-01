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

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
  proximaImg()
}, 4000)

function proximaImg() {
  cont++

  if (cont > 3) {
    cont = 1
  }

  document.getElementById('radio' + cont).checked = true
}

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

/*class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(setting.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
  }
};

displaySuccess() {
  this.form.innerHTML = this.settings.success;
}

displayError() {
tthis.form.innerHTML = this.settings.error;
}

async sendForm() {
  await fetch(this.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: "",

  });
}

init() {
  if (this.form) this.formButtin.addEventListener("click", () => this.displaySuccess());
  return this;
}

const FormSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem Enviada! </h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>"
}); */
