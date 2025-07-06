function exploreSolutions() {
  window.location.href = "solutions.html";
}

function requestDemo() {
  window.location.href = "contact.html#demo";
}
// Accordion toggle
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
  });
});
// Back to top logic
const topBtn = document.getElementById("backToTop");

window.onscroll = function () {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
// Fade-in effect on load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Fade-out before navigating
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const url = this.getAttribute('href');
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = url;
      }, 300); // match the transition time
    });
  }
});
function animateCount(id, endValue) {
  let start = 0;
  const el = document.getElementById(id);
  const interval = setInterval(() => {
    start++;
    el.textContent = start + '+';
    if (start >= endValue) clearInterval(interval);
  }, 50);
}

document.addEventListener('DOMContentLoaded', () => {
  animateCount('years-count', 10);
  animateCount('schools-count', 1800);
});
// Reveal solution cards on scroll
const solutionCardObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, {
  threshold: 0.15 // Slightly higher threshold for smoother reveal
});

document.querySelectorAll('.solution-card').forEach(card => solutionCardObserver.observe(card));
// Show/hide back to top button
window.onscroll = function() {
  document.getElementById('backToTop').style.display = window.scrollY > 200 ? 'block' : 'none';
};
document.getElementById('backToTop').onclick = function() {
  window.scrollTo({top:0, behavior:'smooth'});
};
// JS: animate on scroll
const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('animated');
  });
}, { threshold: 0.2 });

document.querySelectorAll('[data-animate]').forEach(el => animateObserver.observe(el));
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav'); // Replace with your nav class

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('open'); // Optional if animating burger lines
});