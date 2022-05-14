let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let btn = document.querySelector('#bg-color');
let background = document.getElementsByTagName('BODY')[0];
let clr = document.querySelector('#color');

btn.addEventListener(
    'click',
    () => {
        let hexString = '#';
        for (let i = 0; i < 6; i++) {
            hexString += hex[randm()];
        }

        clr.textContent = hexString;
        background.style.backgroundColor = hexString;
    }
);

function randm() {
    return Math.floor(Math.random() * hex.length);
};
