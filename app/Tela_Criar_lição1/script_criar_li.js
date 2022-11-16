const btnProxima = document.getElementById("btn-proxima");

const btnAnterior = document.getElementById("btn-anterior");


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

    btncont++;

    if (btncont >= 8) {
        btncont = 8;
        alert ("numero maximo de questões alcançado!")
    }
    console.log(btncont);

    if (btncont == 8){
        q9.style.display = 'none';
        q10.style.display = '';
    }
};

btnAnterior.onclick = () => {

    if (btncont == 8){
        q10.style.display = 'none';
        q9.style.display = '';
    }

    if (btncont == 7){
        q9.style.display = 'none';
        q8.style.display = '';
    }

    if (btncont == 6){
        q8.style.display = 'none';
        q7.style.display = '';
    }

    if (btncont == 5){
        q7.style.display = 'none';
        q6.style.display = '';
    }

    if (btncont == 4){
        q6.style.display = 'none';
        q5.style.display = '';
    }

    if (btncont == 3){
        q5.style.display = 'none';
        q4.style.display = '';
    }

    if (btncont == 2){
        q4.style.display = 'none';
        q3.style.display = '';
    }

    if (btncont == 1){
        q3.style.display = 'none';
        q2.style.display = '';
    }

    btncont --;

    if (btncont <= 0) {
        btncont = 0;
        alert ("Você já está no Inicio1")
    }
    console.log(btncont);

    if (btncont == 0){
        q2.style.display = 'none';
        q1.style.display = '';
    }
};

const enu1 = document.querySelector("#enunciado1");
const img1 = document.querySelector("#imagem1");
const op11 = document.querySelector("#op1-1");
const op21 = document.querySelector("#op2-1");
const op31 = document.querySelector("#op3-1");
const op41 = document.querySelector("#op4-1");

const enu2 = document.querySelector("#enunciado2");
const img2 = document.querySelector("#imagem2");
const op12 = document.querySelector("#op1-2");
const op22 = document.querySelector("#op2-2");
const op32 = document.querySelector("#op3-2");
const op42 = document.querySelector("#op4-2");

const enu3 = document.querySelector("#enunciado3");
const img3 = document.querySelector("#imagem3");
const op13 = document.querySelector("#op1-3");
const op23 = document.querySelector("#op2-3");
const op33 = document.querySelector("#op3-3");
const op43 = document.querySelector("#op4-3");

const enu4 = document.querySelector("#enunciado4");
const img4 = document.querySelector("#imagem4");
const op14 = document.querySelector("#op1-4");
const op24 = document.querySelector("#op2-4");
const op34 = document.querySelector("#op3-4");
const op44 = document.querySelector("#op4-4");

const enu5 = document.querySelector("#enunciado5");
const img5 = document.querySelector("#imagem5");
const op15 = document.querySelector("#op1-5");
const op25 = document.querySelector("#op2-5");
const op35 = document.querySelector("#op3-5");
const op45 = document.querySelector("#op4-5");

const enu6 = document.querySelector("#enunciado6");
const img6 = document.querySelector("#imagem6");
const op16 = document.querySelector("#op1-6");
const op26 = document.querySelector("#op2-6");
const op36 = document.querySelector("#op3-6");
const op46 = document.querySelector("#op4-6");

const enu7 = document.querySelector("#enunciado7");
const img7 = document.querySelector("#imagem7");
const op17 = document.querySelector("#op1-7");
const op27 = document.querySelector("#op2-7");
const op37 = document.querySelector("#op3-7");
const op47 = document.querySelector("#op4-7");

const enu8 = document.querySelector("#enunciado8");
const img8 = document.querySelector("#imagem8");
const op18 = document.querySelector("#op1-8");
const op28 = document.querySelector("#op2-8");
const op38 = document.querySelector("#op3-8");
const op48 = document.querySelector("#op4-8");

const enu9 = document.querySelector("#enunciado9");
const img9 = document.querySelector("#imagem9");
const op19 = document.querySelector("#op1-9");
const op29 = document.querySelector("#op2-9");
const op39 = document.querySelector("#op3-9");
const op49 = document.querySelector("#op4-9");

const enu10 = document.querySelector("#enunciado10");
const img10 = document.querySelector("#imagem10");
const op110 = document.querySelector("#op1-10");
const op210 = document.querySelector("#op2-10");
const op310 = document.querySelector("#op3-10");
const op410 = document.querySelector("#op4-10");

var questao = [
    {
        enunciado1: "",
        imagem1: "",
        resposta1: "",
        opcoes1: {
            opcao11: "",
            opcao21: "",
            opcao31: "",
        },
    },
    {
        enunciado2: "",
        imagem2: "",
        resposta2: "",
        opcoes2: {
            opcao12: "",
            opcao22: "",
            opcao32: "",
        },
    },
    {
        enunciado3: "",
        imagem3: "",
        resposta3: "",
        opcoes3: {
            opcao13: "",
            opcao23: "",
            opcao33: "",
        },
    },
    {
        enunciado4: "",
        imagem4: "",
        resposta4: "",
        opcoes4: {
            opcao14: "",
            opcao24: "",
            opcao34: "",
        },
    },
    {
        enunciado5: "",
        imagem5: "",
        resposta5: "",
        opcoes5: {
            opcao15: "",
            opcao25: "",
            opcao35: "",
        },
    },
    {
        enunciado6: "",
        imagem6: "",
        resposta6: "",
        opcoes6: {
            opcao16: "",
            opcao26: "",
            opcao36: "",
        },
    },
    {
        enunciado7: "",
        imagem7: "",
        resposta7: "",
        opcoes7: {
            opcao17: "",
            opcao27: "",
            opcao37: "",
        },
    },
    {
        enunciado8: "",
        imagem8: "",
        resposta8: "",
        opcoes8: {
            opcao18: "",
            opcao28: "",
            opcao38: "",
        },
    },
    {
        enunciado9: "",
        imagem9: "",
        resposta9: "",
        opcoes9: {
            opcao19: "",
            opcao29: "",
            opcao39: "",
        },
    },
    {
        enunciado10: "",
        imagem10: "",
        resposta10: "",
        opcoes10: {
            opcao110: "",
            opcao210: "",
            opcao310: "",
        },
    },
];

document.querySelector("#formulario").addEventListener('submit', function(event){

    event.preventDefault();

    questao.forEach( function(pos) {

        pos.enunciado1 = enu1.value;
        pos.imagem1 = img1.value;
        pos.op11 = op11.value;
        pos.op21 = op21.value;
        pos.op31 = op31.value;
        pos.op41 = op41.value;

        pos.enunciado2 = enu2.value;
        pos.imagem2 = img2.value;
        pos.op12 = op12.value;
        pos.op22 = op22.value;
        pos.op32 = op32.value;
        pos.op42 = op42.value;

        pos.enunciado3 = enu3.value;
        pos.imagem3 = img3.value;
        pos.op13 = op13.value;
        pos.op23 = op23.value;
        pos.op33 = op33.value;
        pos.op43 = op43.value;

        pos.enunciado4 = enu4.value;
        pos.imagem4 = img4.value;
        pos.op14 = op14.value;
        pos.op24 = op24.value;
        pos.op34 = op34.value;
        pos.op44 = op44.value;

        pos.enunciado5 = enu5.value;
        pos.imagem5 = img5.value;
        pos.op15 = op15.value;
        pos.op25 = op25.value;
        pos.op35 = op35.value;
        pos.op45 = op45.value;

        pos.enunciado6 = enu6.value;
        pos.imagem6 = img6.value;
        pos.op16 = op16.value;
        pos.op26 = op26.value;
        pos.op36 = op36.value;
        pos.op46 = op46.value;

        pos.enunciado7 = enu7.value;
        pos.imagem7 = img7.value;
        pos.op17 = op17.value;
        pos.op27 = op27.value;
        pos.op37 = op37.value;
        pos.op47 = op47.value;

        pos.enunciado8 = enu8.value;
        pos.imagem8 = img8.value;
        pos.op18 = op18.value;
        pos.op28 = op28.value;
        pos.op38 = op38.value;
        pos.op48 = op48.value;

        pos.enunciado9 = enu9.value;
        pos.imagem9 = img9.value;
        pos.op19 = op19.value;
        pos.op29 = op29.value;
        pos.op39 = op39.value;
        pos.op49 = op49.value;

        pos.enunciado10 = enu10.value;
        pos.imagem10 = img10.value;
        pos.op110 = op110.value;
        pos.op210 = op210.value;
        pos.op310 = op310.value;
        pos.op410 = op410.value;

        console.log(pos);
    })

    var jsonQuestao = JSON.stringify(questao);

    console.log(jsonQuestao);

})