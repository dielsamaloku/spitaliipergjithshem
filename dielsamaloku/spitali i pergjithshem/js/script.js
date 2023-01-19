let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
var slideIndex= 1;



function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("slide");

	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";  
	}

	if(n > slides.length) {
		slideIndex=1;
	}

	if(n<1){
		slideIndex = slides.length;
	}

	slides[slideIndex-1].style.display = "block";
}

showSlides(1);


function plusSlides(n) {
	slideIndex += n;
	showSlides(slideIndex);
}


setInterval(plusSlides, 3000, 1);