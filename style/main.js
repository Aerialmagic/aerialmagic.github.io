


window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})



const menu = document.querySelector('.nav-menu');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');



openBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'flex';
    openBtn.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'flex';
})




const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'bx bx-plus'){
            icon.className = 'bx bx-minus';
        }else{
            icon.className = 'bx bx-plus';
        }
    })
})