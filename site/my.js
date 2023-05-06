


window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.screenY > 0)
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