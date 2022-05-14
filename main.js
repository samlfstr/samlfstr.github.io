let btn = document.querySelectorAll('.btn');

btn.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.innerHTML === 'PROPAGATION') {
            location.href = '/Html/propogation.html';
        }
    });
});

