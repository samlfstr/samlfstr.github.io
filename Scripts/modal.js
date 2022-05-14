let modal_btn = document.querySelector('.modal-btn');
let modal_overlay = document.querySelector('.modal-overlay');
let close_btn = document.querySelector('.close-btn');

modal_btn.addEventListener(
    'click',
    ()=>{
        modal_overlay.classList.add('open-modal');
    }
);

close_btn.addEventListener(
    'click',
    ()=>{
        modal_overlay.classList.remove('open-modal');
    }
);