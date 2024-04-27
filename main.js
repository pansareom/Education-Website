// Change Navbar Style While Scrolling
window.addEventListener('scroll', () =>{ // (addEventListner : While Scrolling what will happen)
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0) // (0:0px)
})

// Show/Hide FAQs ANSWER
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change Icon
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'ri-add-large-line'){
            icon.className = 'ri-subtract-line';
        }
        else{
            icon.className = 'ri-add-large-line';
        }
    })
})

//******************* 1024 (Website for Tablets) ***********************
// Show or Hide Nav Menu
const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click',() =>{
    menu.style.display="flex";
    menuBtn.style.display="none";
    closeBtn.style.display="inline-block";
})

closeBtn.addEventListener('click', () =>{
    menu.style.display="none";
    closeBtn.style.display="none"
    menuBtn.style.display="inline-block";
})


