const btnProxima = document.getElementById("btn-proxima");
console.log(btnProxima);

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const q6 = document.getElementById("q6");
const q7 = document.getElementById("q7");
const q8 = document.getElementById("q8");
const q9 = document.getElementById("q9");
const q10 = document.getElementById("q10");

let btncont = 0;
console.log(btncont);

btnProxima.onclick = () => {

    if (btncont == 0){
        q1.style.display = 'none';
        q2.style.display = '';
    }

    if (btncont == 1){
        q2.style.display = 'none';
        q3.style.display = '';
    }

    if (btncont == 2){
        q3.style.display = 'none';
        q4.style.display = '';
    }

    if (btncont == 3){
        q4.style.display = 'none';
        q5.style.display = '';
    }

    if (btncont == 4){
        q5.style.display = 'none';
        q6.style.display = '';
    }

    if (btncont == 5){
        q6.style.display = 'none';
        q7.style.display = '';
    }

    if (btncont == 6){
        q7.style.display = 'none';
        q8.style.display = '';
    }

    if (btncont == 7){
        q8.style.display = 'none';
        q9.style.display = '';
    }

    if (btncont == 8){
        q9.style.display = 'none';
        q10.style.display = '';
    }

    btncont++;

    if (btncont >= 8) {
        btncont = 8;
        alert ("numero maximo de questões alcançado!")
    }
    console.log(btncont);
}