const navSlide = ()=> {
  const icon = document.querySelector('.berger');
  const nav = document.querySelector('ul');


  icon.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
  });


}

navSlide();