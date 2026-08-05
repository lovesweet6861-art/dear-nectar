document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(
    document.querySelectorAll(".hero-slide")
  );

  const dots = Array.from(
    document.querySelectorAll(".hero-dot")
  );

  if (slides.length < 2) {
    return;
  }

  let currentSlide = 0;
  let sliderTimer;

  function showSlide(index) {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === index);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
    });

    currentSlide = index;
  }

  function showNextSlide() {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }

  function startSlider() {
    window.clearInterval(sliderTimer);

    sliderTimer = window.setInterval(
      showNextSlide,
      5000
    );
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlider();
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearInterval(sliderTimer);
    } else {
      startSlider();
    }
  });

  showSlide(0);
  startSlider();
});
