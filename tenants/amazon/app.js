// Cloning the logo from the navigation into the footer
document.addEventListener("DOMContentLoaded", function () {
  let navLogo = document.querySelector(".userToolbar_primlogoImg");
  if (navLogo) {
    let footerLogo = navLogo.cloneNode(true);
    document.querySelector(".ast-ftr__logo-link").appendChild(footerLogo);
  }
});
