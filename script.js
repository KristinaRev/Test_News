const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const sliderItems = slider.querySelectorAll('.slider-item');
const sliderControls = slider.querySelector('.slider-controls');
const sliderControlLeft = slider.querySelector('.slider-control-left');
const sliderControlRight = slider.querySelector('.slider-control-right');
const slideWidth = slider.clientWidth / 3;
const slideMargin = 10;
let currentSlide = 0;

sliderContainer.style.transform = `translateX(-${currentSlide * (slideWidth + slideMargin)}px)`;

function updateSliderControls() {
  if (currentSlide === 0) {
    sliderControlLeft.disabled = true;
  } else {
    sliderControlLeft.disabled = false;
  }

  if (currentSlide === sliderItems.length - 3) {
    sliderControlRight.disabled = true;
  } else {
    sliderControlRight.disabled = false;
  }
}

sliderControlLeft.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      sliderContainer.style.transform = `translateX(-${currentSlide * (slideWidth + slideMargin)}px)`;
      updateSliderControls();
    }
  });
  
  sliderControlRight.addEventListener('click', () => {
    if (currentSlide < sliderItems.length - 3) {
      currentSlide++;
      sliderContainer.style.transform = `translateX(-${currentSlide * (slideWidth + slideMargin)}px)`;
      updateSliderControls();
    }
  });
  
  updateSliderControls();
  

