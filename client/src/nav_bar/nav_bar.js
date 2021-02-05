import './nav_bar.css'
import React from 'react'
import { Link } from 'react-router-dom'

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
			<li key="1"><Link to="/home">Home</Link></li>
			<li key="2"><Link to="/compare">Compare</Link></li>
			<li key="3"><Link to="/character">Character</Link></li>
			<li key="4"><Link to="/about">About</Link></li>
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
