const billDOM = document.querySelector(".bill input");
const ratenumberDOM = document.querySelector(".ratenumber");
const wordDOM = document.querySelector(".word");
const klaidaDOM = document.querySelector(".klaida");

const resulttipDOM = document.querySelector(".resulttip");
const resulttotalDOM = document.querySelector(".resulttotal");
const btnscaicioDOM = document.querySelector(".btnscaicio");
const rate1DOM = document.getElementById("15");
const rate2DOM = document.getElementById("25");

function count() {
    const rate1 = parseFloat(rate1DOM.value);
    const rate2 = parseFloat(rate2DOM.value); 

    const bill = parseFloat(billDOM.value);
    const ratenumber = parseFloat(ratenumberDOM.value);
    
    let result15 = (bill * 0.15).toFixed(2);
    let result25 = (bill * 0.25).toFixed(2);
        
    if (isNaN(bill)) {
        klaidaDOM.innerHTML = `<p class="resulttotal">ERROR</p>`;
    } else {
        if (ratenumber === 1) {
            resulttipDOM.textContent = `$ ${result15}`;
            resulttotalDOM.textContent = `$ ${(bill + parseFloat(result15)).toFixed(2)}`;
        } else if (ratenumber === 2) {
            resulttipDOM.textContent = `$ ${result25}`;
            resulttotalDOM.textContent = `$ ${(bill + parseFloat(result25)).toFixed(2)}`;
        }
    }
}

btnscaicioDOM.addEventListener("click", count);