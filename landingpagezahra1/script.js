document.addEventListener('DOMContentLoaded', () => {
  // Navigation
  const navLinks = document.querySelectorAll('.nav-links a');
  const pages = document.querySelectorAll('.page');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active to clicked link
      link.classList.add('active');

      // Show corresponding page
      const targetId = link.getAttribute('href').substring(1);
      pages.forEach(page => {
        page.classList.remove('active');
      });
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Default: show home
  document.getElementById('home').classList.add('active');
  document.querySelector('.nav-links a[href="#home"]').classList.add('active');

  // WhatsApp Button Click Handler
  const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
  whatsappButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const productName = this.closest('.product-info').querySelector('h3').textContent.trim();
      const price = this.closest('.product-info').querySelector('.price').textContent.trim();
      
      // Pesan otomatis
      const message = `Halo LUMORA,\n\nSaya ingin memesan:\n🔹 ${productName}\n💰 ${price}\n\nTerima kasih!`;
      
      // Encode untuk URL
      const encodedMessage = encodeURIComponent(message);
      const waUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
      
      window.open(waUrl, '_blank');
    });
  });

  // Heart toggle
  document.querySelectorAll('.heart').forEach(heart => {
    heart.addEventListener('click', function() {
      this.classList.toggle('far');
      this.classList.toggle('fas');
      this.classList.toggle('text-danger');
      this.style.transform = 'scale(1.3)';
      setTimeout(() => this.style.transform = 'scale(1)', 200);
    });
  });
});