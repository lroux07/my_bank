import './style.css'

let balence = document.querySelector('#balence');
let receive = document.querySelector('#receive');
let send = document.querySelector('#send');
let cents = ".00";
let monney = "€";
// let price = balence.textContent += cents += monney;

receive.addEventListener('change', () => {
    if(receive.value + parseInt(".")) {
        balence.textContent = receive.value;
        cents = "";
    }

    balence.textContent = receive.value += ".00€";
});