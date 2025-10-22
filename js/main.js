const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const wonders = document.querySelectorAll(".wonder");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  wonders.forEach(wonder => {
    const top = wonder.getBoundingClientRect().top;
    if (top < triggerBottom) {
      wonder.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Your message has been sent! 🌍");
    contactForm.reset();
  });
}

const signinForm = document.getElementById("signinForm");
if (signinForm) {
  signinForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Signed in successfully!");
    signinForm.reset();
  });
}
