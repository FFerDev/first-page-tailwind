const menuBtn = document.querySelector('#mobile-menu');

menuBtn.addEventListener('click', e => {
    const menu = document.querySelector('.mobile-links');

    menu.classList.toggle('hidden');
})