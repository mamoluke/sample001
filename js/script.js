document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0"; // 現在のスライドを表示
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // 次のスライドに移動
    showSlide(currentIndex);
  }

  // 初期化
  showSlide(currentIndex);

  // 3秒ごとにスライドを切り替える
  setInterval(nextSlide, 3000);
});
