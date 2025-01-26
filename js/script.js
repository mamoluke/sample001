document.addEventListener("DOMContentLoaded", () => {
  // ハンバーガーメニューの制御（全ページ共通）
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav ul');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });

    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

  // スライドショー関連のコード（index.htmlのみ）
  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
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
  }

  // 画像ホバー効果（about.htmlのみ）
  const imageItems = document.querySelectorAll(".image-item");
  const hoverTitle = document.querySelector(".hover-title");
  const hoverDescription = document.querySelector(".hover-description");
  const hoverContent = document.querySelector(".image-hover-content");

  if (imageItems.length > 0 && hoverTitle && hoverDescription && hoverContent) {
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
  }

  // スクロール時のヘッダースタイル変更（全ページ共通）
  const header = document.querySelector("header");
  if (header) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor = "#ffffff";
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
      }
    });
  }
});
