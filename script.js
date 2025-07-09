// --- Navigation Actions ---
function exploreSolutions() {
  // Use href if you want the back button to work
  window.location.href = "solutions.html";
}

function requestDemo() {
  window.location.href = "contact.html#demo";
}

// --- DOM-Ready Code ---
document.addEventListener("DOMContentLoaded", () => {
  // Fade-in effect
  document.body.classList.add("fade-in");

  // Burger menu toggle
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('open');
    });
  }

  // Accordion toggle
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      if (content) {
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
      }
    });
  });

  // Fade-out page transitions
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const url = this.getAttribute('href');
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");
        setTimeout(() => {
          // Use href instead of replace to preserve browser history
          window.location.href = url;
        }, 300);
      });
    }
  });
  // Fix back navigation blank page issue
  window.addEventListener('pageshow', function(event) {
    // If it's a persisted page (from cache), reload it to re-render correctly
    if (event.persisted || window.performance.getEntriesByType("navigation")[0].type === "back_forward") {
      window.location.reload();
    }
  });
window.addEventListener('pageshow', function(event) {
  if (event.persisted || window.performance.getEntriesByType("navigation")[0].type === "back_forward") {
    window.location.reload();
  }
});
  // Animated counters
  function animateCount(id, endValue) {
    let start = 0;
    const el = document.getElementById(id);
    if (!el) return;
    const interval = setInterval(() => {
      start++;
      el.textContent = start + '+';
      if (start >= endValue) clearInterval(interval);
    }, 50);
  }

  animateCount('years-count', 10);
  animateCount('schools-count', 1800);
  animateCount('teachers-count', 2000); // Optional: add this if used

  // Reveal solution cards on scroll
  const solutionCardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.solution-card').forEach(card => {
    solutionCardObserver.observe(card);
  });

  // Animate on scroll
  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('[data-animate]').forEach(el => {
    animateObserver.observe(el);
  });

  // Back to top logic
  const topBtn = document.getElementById("backToTop");
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});