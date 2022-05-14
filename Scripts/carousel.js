const reviews = [
    {
        id: 1,
        name: "Samuel Foster",
        job: "Web Developper",
        img: "../IMAGES/P1.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quod, exercitationem aut culpa laboriosam quia aperiam ullam atque sed ipsam unde similique pariatur, quasi modi sapiente. Hic cupiditate reprehenderit provident."
    },
    {
        id: 2,
        name: "Aaron Foster",
        job: "Front-end Developer",
        img: "../IMAGES/P2.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quod, exercitationem aut culpa laboriosam quia aperiam ullam atque sed ipsam unde similique pariatur, quasi modi sapiente. Hic cupiditate reprehenderit provident."
    },
    {
        id: 3,
        name: "Cengizhan Ozsoy",
        job: "Back-end Developer",
        img: "../IMAGES/P3.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quod, exercitationem aut culpa laboriosam quia aperiam ullam atque sed ipsam unde similique pariatur, quasi modi sapiente. Hic cupiditate reprehenderit provident."
    }
];

const img = document.querySelector('.image');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
let btns = document.querySelectorAll('.btn');

// Define starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    btns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            // Test - console.log('Clicked');
            if (event.currentTarget.id === 'btn-right') {
                currentItem = currentItem < 2 ? currentItem + 1 : 0;
                showPerson(currentItem);
            }
            else if (event.currentTarget.id === 'btn-left') {
                currentItem = currentItem > 0 ? currentItem - 1 : 2;
                showPerson(currentItem);
            }
        });

    });
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}