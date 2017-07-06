const burger = document.querySelector('.burger')

burger.addEventListener('click', function() {
  let target = burger.dataset.target
  let nav = document.getElementById(target)
  burger.classList.toggle('is-active')
  nav.classList.toggle('is-active')
})