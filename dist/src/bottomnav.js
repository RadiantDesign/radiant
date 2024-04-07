let lastScrollTop = 0; // Za praćenje prethodne pozicije skrola
let navbarTimer; // Timer za kontrolu prikaza navigacije

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Resetovanje tajmera pri svakom skrolovanju
  clearTimeout(navbarTimer);

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Ako korisnik skrola nadole i prešao je više od 100px
    document.getElementById("bottomNav").style.bottom = "16px";
    document.getElementById("bottomNav").style.opacity = "1"; // Pomeri navigaciju da bude vidljiva
  } else {
    // Ako korisnik skrola nagore ili nije skrolovao dovoljno daleko
    document.getElementById("bottomNav").style.bottom = "-50px";
    document.getElementById("bottomNav").style.opacity = "0"; // Sakrij navigaciju
  }
  
  // Ažuriranje poslednje poznate pozicije skrola
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Za mobilne browsere koji mogu ići u minus

  // Postavljanje tajmera za sakrivanje navigacije ako korisnik ne skroluje 2 sekunde
  navbarTimer = setTimeout(() => {
    if(document.getElementById("bottomNav").style.opacity === "1") { // Proverava da li je navigacija vidljiva
      document.getElementById("bottomNav").style.bottom = "-50px";
      document.getElementById("bottomNav").style.opacity = "0"; // Ako jeste, sakri je
    }
  }, 2000); // 2 sekunde čekanja
}, false);
