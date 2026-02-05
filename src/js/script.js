import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/sass/style.scss";
//burger
const burger = document.querySelector(".burger"),
  close = document.querySelector(".header__menu-close"),
  menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.add("header__menu_active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menu.classList.remove("header__menu_active");
  document.body.style.overflow = "";
});

// Закрытие меню при ресайзе (если экран стал шире брейкпоинта)
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    menu.classList.remove("header__menu_active");
    document.body.style.overflow = "";
  }
});


//sweeper
try {
  const swiper = new Swiper('.works__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".icon-right-open",
      prevEl: ".icon-left-open",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1920: {
        spaceBetween: 35,
        slidesPerView: 3,
      }
    },

    modules: [Navigation, Pagination],
  });

} catch (e) { }


//catalog
try {
  const tabs = document.querySelectorAll(".catalog__tab");
  const contents = document.querySelectorAll(".catalog__content-item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Удаляем активный класс у всех табов и контента
      tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
      contents.forEach((c) => (c.style.display = "none"));

      // Добавляем активный класс к нажатому табу и показываем соответствующий контент
      tab.classList.add("catalog__tab_active");
      contents[index].style.display = "flex";
    });
  });

  // Показываем первый контент при загрузке
  contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) { }

//validation
try {
  const validator = new JustValidate("form");

  validator
    .addField('#name', [
      {
        rule: 'required',
      },
      {
        rule: 'minLength',
        value: 3,
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
      },
      {
        rule: 'email',
      },
    ])
    .addField('#question', [
      {
        rule: 'minLength',
        value: 5,
      },
    ], {
      errorsContainer: document
        .querySelector("#question")
        .parentElement.querySelector(".error-message"),
    })
    .addField('#checkbox', [
      {
        rule: 'required',
      },
    ], {
      errorsContainer: document
        .querySelector("#question")
        .parentElement.parentElement.querySelector(".checkbox-error-message"),
    })
    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      }).then(res => res.json()).then(data => {
        console.log('Success', data);
        form.reset();
      })
    });
} catch (e) {
}

try {
  const footervalidator = new JustValidate(".footer__form");

  footervalidator
    .addField('#email', [
      {
        rule: 'required',
      },
      {
        rule: "email",
      },
    ], {
      errorsContainer: document
        .querySelector('.footer__input')
        .parentElement.querySelector(".footer-email-error"),
    })
    .addField('#checkbox', [
      {
        rule: 'required',
      },
    ], {
      errorsContainer: document
        .querySelector('.footer__checkbox')
        .parentElement.parentElement.querySelector(".footer-checkbox-error"),
    });
} catch (e) {
}