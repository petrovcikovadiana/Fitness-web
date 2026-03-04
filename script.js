document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.Jmeno.value;
  const phone = this.Telefon.value;
  const msg = this.Zprava.value;

  const subject = encodeURIComponent("Kontakt z webu");
  const body = encodeURIComponent(
    `Jméno: ${name}\nTelefon: ${phone}\n\nZpráva:\n${msg}`,
  );

  window.location.href = `mailto:phein@seznam.cz?subject=${subject}&body=${body}`;
});

// hamburger menu start
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav_bar");
  navBar.classList.toggle("active");
};
// hamburger menu end
