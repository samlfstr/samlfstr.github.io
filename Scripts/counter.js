let number = document.querySelector('#number');
let btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach((btn)=>{
    btn.addEventListener(
        'click',
        (event)=>{
            if(event.currentTarget.id === 'decrease'){
                count--;
                number.innerHTML = count;
            }else if(event.currentTarget.id === 'increase'){
                count++;
                number.innerHTML = count;
            }else{
                count = 0;
                number.innerHTML = count;
            }
            if(count === 0){
                number.style.color = 'black';
            }else if(count > 0){
                number.style.color = 'green';
            }else{
                number.style.color = 'red';
            }
        });
});