// Shared site scripts (mobile menu and related helpers)
(function() {
  // Expose toggleMobileMenu globally so the inline buttons (onclick) can call it.
  window.toggleMobileMenu = function() {
    var links = document.querySelector('.nav-links');
    if (!links) return;

    if (links.style.display === 'flex') {
      links.style.display = 'none';
    } else {
      links.style.display = 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = '#fff';
      links.style.padding = '16px 5%';
      links.style.borderBottom = '1px solid #E2E8F0';
      links.style.gap = '20px';
      links.style.zIndex = '99';
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    // Close the mobile menu when a link is tapped
    document.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', function() {
        var links = document.querySelector('.nav-links');
        if (window.innerWidth < 900 && links) {
          links.style.display = 'none';
        }
      });
    });

    // If viewport grows to desktop size, clear inline styles so CSS takes over
    window.addEventListener('resize', function() {
      var links = document.querySelector('.nav-links');
      if (!links) return;
      if (window.innerWidth >= 900) {
        links.style.display = '';
        links.style.flexDirection = '';
        links.style.position = '';
        links.style.top = '';
        links.style.left = '';
        links.style.right = '';
        links.style.background = '';
        links.style.padding = '';
        links.style.borderBottom = '';
        links.style.gap = '';
        links.style.zIndex = '';
      }
    });
  });
})();
