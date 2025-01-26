document.addEventListener("DOMContentLoaded", () => {
  // スライドショー関連のコード
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // 最初のスライドを表示
  slides[0].classList.add("active");

  // 3秒ごとにスライドを切り替える
  setInterval(nextSlide, 3000);

  // 画像にマウスオーバーしたときにタイトルと説明を表示
  const imageItems = document.querySelectorAll(".image-item");
  const hoverTitle = document.querySelector(".hover-title");
  const hoverDescription = document.querySelector(".hover-description");
  const hoverContent = document.querySelector(".image-hover-content");

  imageItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const title = item.getAttribute("data-title");
      const description = item.getAttribute("data-description");
      hoverTitle.textContent = title;
      hoverDescription.textContent = description;
      hoverContent.style.opacity = "1";
      hoverContent.style.visibility = "visible";
    });

    item.addEventListener("mouseleave", () => {
      hoverContent.style.opacity = "0";
      hoverContent.style.visibility = "hidden";
    });
  });

  // スクロール時にヘッダーのスタイルを変更
  const header = document.querySelector("header");
  document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#ffffff"; // 背景色を白に
      header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // 軽い影を追加
    } else {
      header.style.backgroundColor = "transparent"; // 背景を透明に
      header.style.boxShadow = "none"; // 影を削除
    }
  });
});
