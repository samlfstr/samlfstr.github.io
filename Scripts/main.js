let btn = document.querySelectorAll(".btn");

btn.forEach((item) => {
    item.addEventListener('click', () => {
        let innerText = item.innerHTML.toString().trim();
        if (innerText === "PROPAGATION") {
            location.href = 'Html/propagation.html';
        }
        else if (innerText ==='BG COLOR'){
            location.href = 'Html/bgColor.html';
        }
        else if (innerText ==='COUNTER'){
            location.href = 'Html/counter.html';
        }
        else if (innerText ==='MODAL'){
            location.href = 'Html/modal.html';
        }
        else if (innerText ==='CAROUSEL'){
            location.href = 'Html/carousel.html';
        }
        else if (innerText ==='TODO'){
            location.href = 'Html/todo.html';
        }
    });
});
