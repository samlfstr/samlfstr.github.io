A = document.getElementById('A');
B = document.getElementById('B');
C = document.getElementById('C');

A.addEventListener("click", (e)=>{
    console.log(A.firstElementChild.innerText);
});
B.addEventListener("click", (e)=>{
    console.log(B.firstElementChild.innerText);
});
C.addEventListener("click", (e)=>{
    console.log(C.firstElementChild.innerText);
});