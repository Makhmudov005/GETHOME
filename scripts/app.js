


// Smooth scrolling
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});



// Fade-in animatsiyasi uchun JavaScript kod
window.addEventListener("scroll", function() {
	const target = document.querySelectorAll(".fade-in");
	
	target.forEach(function(element) {
		if (element.getBoundingClientRect().top < window.innerHeight) {
			element.classList.add("animate__animated", "animate__fadeIn");
		} else {
			element.classList.remove("animate__animated", "animate__fadeIn");
		}
	});
});
