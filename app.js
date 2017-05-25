var nav =document.querySelector("nav");
var lost = document.querySelector(".lost");
var navOt = nav.offsetTop;
var navH = nav.offsetHeight;

window.addEventListener("scroll", fixNav);

function fixNav(event) {
	if (window.scrollY > navOt) {
		document.body.classList.add("nav-fixed");
		document.body.style.paddingTop = navH + "px";
		lost.classList.add("show");
	} else {
		document.body.classList.remove("nav-fixed");
		document.body.style.paddingTop = 0;
		lost.classList.remove("show");
	}
}