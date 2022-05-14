let btn = document.querySelectorAll(".btn");

btn.forEach((item) => {
    item.addEventListener('click', () => {
        let innerText = item.innerHTML.toString().trim();
        if (innerText === "PROPAGATION") {
            location.href = '/Html/propogation.html';
        }
    });
});
