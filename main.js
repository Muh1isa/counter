let dbutton = document.querySelector('.decrease')
let rbutton = document.querySelector('.reset')
let ibutton = document.querySelector('.increase')
let number = document.querySelector('.number')

let count = 0;

ibutton.addEventListener('click', () => {
    count++;
    number.innerHTML = count;
});
 
dbutton.addEventListener('click', () => {
    count--;
    number.innerHTML = count;
});
 
rbutton.addEventListener('click', () => {
    count = 0;
    number.innerHTML = count;
});
 
