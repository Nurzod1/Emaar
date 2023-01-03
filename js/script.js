// Intro swiper
const introSwiperCurrentIndex = document.querySelector('#intro-pagination__item--current')
const introSwiperAmount = document.querySelector('#intro-pagination__item--amount')

const introSwiper = new Swiper("#introSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


introSwiperAmount.innerHTML = introSwiper.slides.length

introSwiper.on('slideChange', ({ activeIndex }) => {
  introSwiperCurrentIndex.innerHTML = activeIndex + 1
})

// Second swiper 

const secondSwiperCurrentIndex = document.querySelector('#second-pagination__item--current')
const secondSwiperAmount = document.querySelector('#second-pagination__item--amount')

const secondSwiper = new Swiper("#secondSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


secondSwiperAmount.innerHTML = secondSwiper.slides.length

secondSwiper.on('slideChange', ({ activeIndex }) => {
  secondSwiperCurrentIndex.innerHTML = activeIndex + 1
})

// Third swiper

const thirdSwiperCurrentIndex = document.querySelector('#third-pagination__item--current')
const thirdSwiperAmount = document.querySelector('#third-pagination__item--amount')

const thirdSwiper = new Swiper("#thirdSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


thirdSwiperAmount.innerHTML = thirdSwiper.slides.length

thirdSwiper.on('slideChange', ({ activeIndex }) => {
  thirdSwiperCurrentIndex.innerHTML = activeIndex + 1
})


// Show Modal

const modal = document.querySelector('#modal')
const openModal = document.querySelector('#showModal')
const closeModal = document.querySelector('#closeModal')

openModal.addEventListener('click', () => {
  modal.classList.add('active')
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('active')
})

// Open popup-page

const openPopup = document.querySelector('#project-popup')

openPopup.addEventListener('click', () => {
  window.location.href = 'http://127.0.0.1:5500/popup.html'
})



//

