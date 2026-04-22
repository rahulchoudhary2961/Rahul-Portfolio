const revealTargets = document.querySelectorAll(
  ".section-heading, .panel, .impact-card, .project-card, .support-card, .comparison-card, .testimonial-card, .other-card, .contact-panel, .hero-copy, .hero-visual"
);

revealTargets.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealTargets.forEach((element) => observer.observe(element));
