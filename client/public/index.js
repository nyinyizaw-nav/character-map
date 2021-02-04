const navSlide = () => {
	const navStart = document.querySelector('.nav-start');
	const navLinks = document.querySelector('.nav-links');
	const links = document.querySelectorAll('.nav-links li')


	navStart.addEventListener('click', () => {
		navLinks.classList.toggle('nav-active');

		links.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = '';
			} else {
					link.style.animation = `navLinkFade 
						0.5s ease forwards ${ index / 7 + 0.5}s`;
			}
		});

		navStart.classList.toggle('toggle');
	});

}

navSlide();