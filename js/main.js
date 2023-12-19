document.addEventListener("DOMContentLoaded", function () {
  // fancybox //
  Fancybox.bind(document.getElementById("gallery-wrap"), "[data-fancybox]", {
    // Your custom options
  });

  const menuCross = document.querySelector(".menu-cross");
  const bodyLock = document.body;
  const navBurger = document.querySelector(".nav-icon");

  navBurger.addEventListener("click", function () {
    this.classList.toggle("nav-icon--active");
  });

  navBurger.addEventListener("click", function () {
    if (this.classList.contains("nav-icon--active")) {
      menuCross.classList.add("open");
      bodyLock.classList.add("lock");
    } else {
      menuCross.classList.remove("open");
      bodyLock.classList.remove("lock");
    }
  });

  menuCross.addEventListener("click", function () {
    this.classList.remove("open");
    navBurger.classList.remove("nav-icon--active");
    bodyLock.classList.remove("lock");
  });
});

// mixitup //

$(document).ready(function () {
  let containerEl = document.querySelector("#mix-cards");
  let mixer = mixitup(containerEl);
});

const filterMix = document.querySelectorAll(".mix-block__btn button");
const cardBig = document.querySelectorAll(".card");

for (let i = 0; i < filterMix.length; i++) {
  filterMix[i].addEventListener("click", function () {
    if (i == 0) {
      for (let j = 0; j < 2; j++) {
        cardBig[j].classList.add("card--big");
      }
    } else {
      for (let j = 0; j < 2; j++) {
        cardBig[j].classList.remove("card--big");
      }
    }
  });
}

//  back top arrow //
const backTopArrow = document.querySelector("#backtop");
backTopArrow.style.opacity = 0;

document.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backTopArrow.style.opacity = 1;
  } else {
    backTopArrow.style.opacity = 0;
  }
});

// form //

const formItem = document.querySelectorAll(".form-item__field");

for (let item of formItem) {
  const thisParent = item.closest(".form-item");
  const thisPlaceholder = thisParent.querySelector(".fake-placeholder");

  // input focus
  item.addEventListener("focus", function () {
    thisPlaceholder.classList.add("active");
  });

  // not focus

  item.addEventListener("blur", function () {
    if (item.value.lentch > 0) {
      thisPlaceholder.classList.add("active");
    } else {
      thisPlaceholder.classList.remove("active");
    }
  });
}
