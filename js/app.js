const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');
    const links = document.querySelectorAll ('nav ul li');

    // Toggle Nav
    burger.addEventListener('click', () => {
		
      if (nav.classList == "clicked") {
        
        anime({
          targets: 'ul ',
          width: '0%', // -> from '28px' to '100%',
          easing: 'easeInOutQuad',
          direction: 'right',
          duration: 500
        });

        nav.classList.toggle('clicked');
        body.classList.toggle('fixedPosition');

      } else {
        
        anime({
          targets: 'ul',
          width: '70%', // -> from '28px' to '100%',
          easing: 'easeInOutQuad',
          direction: 'left',
          duration: 500
        });

        nav.classList.toggle('clicked');
        body.classList.toggle('fixedPosition');
      }
    
    });
}



navSlide();

