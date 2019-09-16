const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');
    const links = document.querySelectorAll ('nav ul li');

    // Toggle Nav
    burger.addEventListener('click', () => {
		
		if (nav.classList == "clicked") {
			anime({
			  targets: 'li',
			  translateX: ['0%', '-100%'],
			  delay: anime.stagger(100),
				easing: 'easeOutExpo'		 // delay starts at 500ms then increase by 100ms for each elements.
			});
			nav.classList.toggle('clicked')
		} else {
			anime({
			  targets: 'li',
			  translateX: ['100%', '0%'],
			  delay: anime.stagger(100),
				easing: 'easeOutExpo'			  // delay starts at 500ms then increase by 100ms for each elements.
			});
			nav.classList.toggle('clicked')
		}
		
        /*nav.classList.toggle('nav-active');
        body.classList.toggle('body-nav-active');

        // Animate Links
        links.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
                
            console.log(index / 7);
        });*/
    });
}



navSlide();
animation();

