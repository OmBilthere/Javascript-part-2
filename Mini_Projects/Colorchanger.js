
const select = document.querySelectorAll('.button');
const body = document.querySelector('body');

select.forEach((el) => {
  el.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
