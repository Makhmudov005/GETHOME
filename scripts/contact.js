// Smooth scrolling
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
  });
  
  // Form submission
  const form = document.querySelector('.contact-form');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
    });
  
    if (response.ok) {
      alert('Xabar yuborildi! Rahmat!');
      form.reset();
    } else {
      alert('Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq yana urinib ko\'ring.');
    }
  });
  