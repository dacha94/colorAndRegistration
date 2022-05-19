
// выбор цвета через выпадающий список select
const select = document.querySelector('#s1');
    // console.log('select, s1', select);
    select.addEventListener('change', function(event) {
        const value = event.target.value
        if (value) {
            document.body.style.background = value;
        }
    }); 

// обработчик формы
const form = document.querySelector('form');
const  email = document.getElementById('email');
const  name = document.getElementById('name');
const  surname = document.getElementById('surname');
const  password = document.getElementById('password');
// const  para = document.querySelector('p');

form.onsubmit = function(e) {
    // debugger;
    e.preventDefault(); // чтобы отладить код 
    console.log (name.value)
    if (name.value === '' || name.value === '') {
    // debugger;
    alert('Поля должны быть заполнены!');
    
    }
}


// form.onsubmit = function(e) {
//     if (fname.value === '' || lname.value === '') {
//     e.preventDefault();
//     para.textContent = 'Поля должны быть заполнены!';
//     }
// }
// btn.onclick = function() {
// const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
// document.body.style.backgroundColor = rndCol;
// }

// function changeColor(color.) {
//     document.body.style.background =     document.getElementById(colorValue).dataset.color;
// }