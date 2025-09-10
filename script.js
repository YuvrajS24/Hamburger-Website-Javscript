const hamburgerIcon=document.querySelector('.hamburger-icon');
const navbarr=document.querySelector('nav');
const closeIcon=document.querySelector('.close-icon')




hamburgerIcon.addEventListener('click',()=>{

  navbarr.classList.toggle('nav-menu');
  closeIcon.style.display="block";

  



});

closeIcon.addEventListener('click',()=>{


  navbarr.classList.remove('nav-menu');
  closeIcon.style.display="none";

})
