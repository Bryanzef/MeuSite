// ------------------- MENU HAMBURGYER ---------------------------------------
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

// --------------- SCROLL SECTION LINK
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // ------------------------------- navbar ----------------------
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
  // ------------------- REMOVER MENU HAMBURGUER E NAVBAR AO CLIQUE SER DETECTADO ---------------------------------------
  menuIcon.classList.remove("fa-x");
  navbar.classList.remove("active");
};
// ------------------ SCROLL ----------------
ScrollReveal({
  distance: "80px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".home-content, .heading ", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .skills-box .contato form ",
  {
    origin: "bottom",
  }
),
  ScrollReveal().reveal(".home-content h1, .about-img ", {
    origin: "left",
  });
//---------- TYPED JS --------------------
const typed = new Typed(".multiple-text", {
  strings: ["Front end Developer,", "Futuro Full stack"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,

  loop: true,
});
//========= EVENTO DE ONSUBMIT DO FORM USANDO AJAX
$("#meu-form").submit(function (event) {
  // Aqui vamos interceptar o envio do formulário e enviar via AJAX
  event.preventDefault(); // Isso vai evitar que a página recarregue

  var formData = $(this).serialize();

  $.ajax({
    url: $(this).attr("action"),
    method: $(this).attr("method"),
    data: formData,
    dataType: "json",
  })
    .done(function (response) {
      // Aqui você pode exibir uma mensagem de sucesso ou redirecionar o usuário
      console.log(response);
    })
    .fail(function (response) {
      // Aqui você pode exibir uma mensagem de erro ou redirecionar o usuário
      console.log(response);
    });
});
