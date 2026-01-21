console.log("JS caricato correttamente");

// Animazioni allo scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

reveals.forEach(r => observer.observe(r));

// Navbar dinamica
const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const downloadBtn = document.getElementById("download-btn");
const downloadBtn2 = document.getElementById("download-btn2");

downloadBtn2.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "Python_programs.zip";
  link.download = "Python_programs.zip"; // nome file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

downloadBtn.addEventListener("click", () => {
  window.open(
    "documentazione-bit-della-pace.pdf",
    "_blank"
  );
});
