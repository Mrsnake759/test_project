document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const button = header.querySelector('.accordion-button');

    if (content.classList.contains('open')) {
      content.classList.remove('open');
      content.style.maxHeight = 0;
      button.textContent = '+';
    } else {
      document.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('open');
        item.style.maxHeight = 0;
      });
      document.querySelectorAll('.accordion-button').forEach(btn => {
        btn.textContent = '+';
      });

      content.classList.add('open');
      requestAnimationFrame(() => {
        content.style.maxHeight = content.scrollHeight + 30 + 'px';
      });
      button.textContent = '-';
    }
  });
});

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu.style.left === '0px') {
    menu.style.left = '-100%';
  } else {
    menu.style.left = '0px';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.slider-container');
  let currentIndex = 0;

  function swipeRight() {
    if (currentIndex < 4) {
      currentIndex++;
      sliderContainer.style.transform = `translateX(-${(currentIndex * 90)}%)`;
    }
  }

  function swipeLeft() {
    if (currentIndex > 0) {
      currentIndex--;
      sliderContainer.style.transform = `translateX(-${(currentIndex * 90)}%)`;
    }
  }

  sliderContainer.addEventListener('touchstart', handleTouchStart, false);
  sliderContainer.addEventListener('touchmove', handleTouchMove, false);

  let xDown = null;

  function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
  }

  function handleTouchMove(evt) {
    if (!xDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (Math.abs(xDiff) > 0) {
      if (xDiff > 0) {
        swipeRight();
      } else {
        swipeLeft();
      }
    }
    xDown = null;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const close = document.getElementById("close");

  burger.addEventListener("click", function() {
    menu.classList.add("active");
  });

  close.addEventListener("click", function() {
    menu.classList.remove("active");
  });
});



