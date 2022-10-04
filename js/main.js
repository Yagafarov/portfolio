//  TOGGLE NAVBAR
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
	hideSection();
	toggleNavbar();
})

function hideSection() {
	document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
	document.querySelector(".header").classList.toggle("active");
}

//  ACTIVE SECTION
document.addEventListener("click", (e) => {
	if (e.target.classList.contains("link-item") && e.target.hash !== "") {
		navToggler.classList.add("hide");
		if (e.target.classList.contains("nav-item")) {
			toggleNavbar();
		} else {
			hideSection();
			document.body.classList.add("hide-scrolling");
		}
		setTimeout(() => {
			document.querySelector("section.active").classList.remove("active", "fade-out");
			document.querySelector(e.target.hash).classList.add("active");
			window.scrollTo(0, 0);
			document.body.classList.remove("hide-scrolling");
			navToggler.classList.remove("hide");
		}, 500);
	}
})

//	ABOUT TABS

const tabsContainer = document.querySelector(".about-tabs"),
	aboutSection = document.querySelector(".about");

tabsContainer.addEventListener("click", (e) => {
	if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
		tabsContainer.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		const target = e.target.getAttribute("target-data");
		aboutSection.querySelector(".tab-content.active").classList.remove("active");
		aboutSection.querySelector(target).classList.add("active");
	}
})

// const portfolioBtn = document.querySelector('#portfolio');
// portfolioBtn.addEventListener("click",()=>{
// 	aboutSection.querySelector(".tab-content.active").classList.remove("active");
// 		aboutSection.querySelector(target).classList.add("active");
// })
//  PORTFOLIO ITEM DETAILS POPUP

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("view-project-btn")) {
		togglePortfolioPopup();
		document.querySelector(".portfolio-popup").scrollTo(0, 0);
		portfolioItemDEtails(e.target.parentElement);
	}
})

const togglePortfolioPopup = () => {
	document.querySelector(".portfolio-popup").classList.toggle("open");
	document.body.classList.toggle("hide-scrolling");
	document.querySelector("main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("pp-inner")) {
		togglePortfolioPopup();
	}
})

function portfolioItemDEtails(portfolioItem) {
	document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

	document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;

	document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// email js


(function () {
	// https://dashboard.emailjs.com/admin/account
	emailjs.init('NUhJylOPJb04qGujv');
})();

window.onload = function () {
	document.getElementById('contact-f').addEventListener('submit', function (event) {
		event.preventDefault();
		// these IDs from the previous steps
		emailjs.sendForm('service_1skdp3c', 'template_0b27yvo', this)
			.then(function () {
				console.log('SUCCESS!');
			}, function (error) {
				console.log('FAILED...', error);
			});
			document.getElementById("contact-f").reset();
			alert('Xabar Junatildi');
		});
	}
