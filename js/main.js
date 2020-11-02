$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


let hamburger = document.querySelector('.menu_icon');
hamburger.addEventListener('click', function (e){
	if(hamburger.classList.contains('fa-bars')){
		hamburger.classList.remove('fa-bars')
		hamburger.classList.add('fa-times')
	}
	else{
		hamburger.classList.remove('fa-times')
		hamburger.classList.add('fa-bars')
	}
})
