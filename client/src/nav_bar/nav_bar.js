import './nav_bar.css'
import React from 'react'

const NavBar = () => {

	React.useEffect( () => {
		const navStart = document.querySelector('.nav-start');
		const navLinks = document.querySelector('.nav-links');
		const links = document.querySelectorAll('.nav-links li');
		
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

		}); 

	return (
	<>
	<nav>
		<div className="logo">
			<h1>nnz</h1>
		</div>
		<ul className="nav-links">
			<li key="1"><a href="#">Home</a></li>
			<li key="2"><a href="#">Comparte</a></li>
			<li key="3"><a href="#">Character</a></li>
			<li key="4"><a href="#">About</a></li>
		</ul>
		<div className="nav-start">
			<div className="line1"></div>
			<div className="line2"></div>
			<div className="line3"></div>
		</div>
	</nav>
	</>
	)
}

export default NavBar
