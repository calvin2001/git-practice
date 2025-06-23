const countSpan = document.getElementById('count');
const plusBtn = document.getElementById("plus-btn");
const resetBtn = document.getElementById('reset-btn');

let count = 0;

plusBtn.addEventListener('click', () => {
    count += 1;
    countSpan.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countSpan.textContent = count;
});