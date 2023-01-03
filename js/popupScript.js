
const plansSwiperCurrentIndex = document.querySelector('#plans-pagination__item--current')
const plansSwiperAmount = document.querySelector('#plans-pagination__item--amount')

const plansSwiper = new Swiper("#plansSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

console.log('plansSwiper: ', plansSwiper);

plansSwiperAmount.innerHTML = plansSwiper.slides.length

plansSwiper.on('slideChange', ({ activeIndex }) => {
  plansSwiperCurrentIndex.innerHTML = activeIndex + 1
})


// Show Modal

const modal = document.querySelector('#popup-modal')
const openModal = document.querySelector('#showModal')
const closeModal = document.querySelector('#closeModal')


openModal.addEventListener('click', () => {
  modal.classList.add('active')
  console.log('hey')
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('active')
  console.log('hey')
})

// Close popup-page


const closePopup = document.querySelector('#project-popup--close')

console.log('closePopup::', closePopup)

closePopup.addEventListener('click', () => {
  window.location.href = 'http://127.0.0.1:5500/index.html'
  console.log('hey22')
})
