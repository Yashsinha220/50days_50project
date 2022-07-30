const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click' , ()=>{
    search.classList.toggle('active');
    input.focus();

    // the toggle  one will add or remove the class when the buttom is clicked
})