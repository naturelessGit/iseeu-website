document.addEventListener('DOMContentLoaded', function () {

  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      window.scrollTo({
        top: target.offsetTop - 80,  // Adjust offset for header
        behavior: 'smooth'
      });
    });
  });

  // Optional: Button hover effect
  const downloadBtn = document.querySelector('button');

  if (downloadBtn) {
    downloadBtn.addEventListener('mouseover', function () {
      downloadBtn.style.backgroundColor = '#357ABD';
    });
    downloadBtn.addEventListener('mouseout', function () {
      downloadBtn.style.backgroundColor = '#4A90E2';
    });
  }
});
