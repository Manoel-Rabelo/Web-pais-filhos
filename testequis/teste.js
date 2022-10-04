const btn = document.querySelector('#btn');
const main = document.querySelector('.container');

// colocando mensagem acima do botão principal
const msg = pageEles(main,'div','Aperte o Botão','msg');


// saida de dados das quetões
const output = pageEles(main,'div','','game');

const url = "./../testequis/teste.json";

// Chamando AJAX request

btn.onclick = loadData;

// AJAX request

function loadData(){
    btn.style.display = 'none';

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const temp = {                  /* Variavel temporaria para contagem de questões */
                total: data.length,
                q: data,
                pontuacao: 0,
                cont: 0
            } 
            createPergunta(temp);
        })
}

function createPergunta(data){
    const el = pageEles(output, 'div', '', 'pergunta'); //criando elemento principal da questão

    

    if (data.q.length == 0){
        msg.textContent = 'Game Over';
    }else{
        const pergunta = data.q.shift ();
        data.cont++;
        msg.textContent = `Pergunta ${data.cont} de ${data.total}`;
        outputPergunta(pergunta, el);
    }
}

function outputPergunta(pergunta, parent){
    console.log(pergunta);
    const que = pageEles(parent, 'div', pergunta.pergunta, 'stpergunta');
    const arr = pergunta.opcoes;
    arr.push(pergunta.resposta);
    arr.sort(() => {
        return Math.random() -0.5;
    })
    console.log(arr);
}

// Criar elementos na pagina

function pageEles(parent,t,html,c){
    const ele = document.createElement(t);
    ele.innerHTML = html;
    ele.classList.add(c);
    return parent.appendChild(ele);
}