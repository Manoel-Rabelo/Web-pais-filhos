const btn = document.querySelector('#btn');
const main = document.querySelector('.container');

// colocando mensagem acima do botão principal
const msg = pageEles(main,'div','Aperte o Botão','msg');


// saida de dados das quetões
const output = pageEles(main,'div','','game');

//Contador de Pontuacão

const game = { pontuacao: 0 }

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
                total: data.length, //numero de questões
                q: data, // Quetões
                cont: 0 //contador
            } 
            createPergunta(temp);
        })
}

function createPergunta(data){
    const el = pageEles(output, 'div', '', 'pergunta'); //criando elemento principal da questão

    if (data.q.length == 0){
        msg.innerHTML = `<h1> Fim de Jogo</h1><div> Você acertou ${game.pontuacao} de ${data.total} perguntas!</div>`;
    }else{

        const proximaP = pageEles(el, 'button', 'Proxima', 'proximaP'); //Criando botão para a proxima pergunta

        proximaP.onclick = () => { //Passando para a proxima questão 
            el.remove();    // Limpando os dados!
            createPergunta(data); // Passando para a proxima
        }

        const pergunta = data.q.shift ();
        data.cont++;
        msg.textContent = `Pergunta ${data.cont} de ${data.total}`;

        if(data.q.length == 0) proximaP.textContent = 'Fim';
        proximaP.style.display = 'none'; // Econdendo o botão para a proxima pergunta

        outputPergunta(pergunta, el, proximaP);
    }
}

function outputPergunta(pergunta, parent, proximaP){
    console.log(pergunta);
    const que = pageEles(parent, 'div', `${pergunta.pergunta}?`, 'stpergunta'); // `${pergunta.pergunta}?` seve para colocar dados juntamente com caracteres
    const arr = pergunta.opcoes;
    arr.push(pergunta.resposta);
    arr.sort(() => {
        return Math.random() -0.5;
    })

    const aOpcoes = pageEles(parent, 'div','', 'aOpcoes');  // Alternativas ou opções que vão estar dentro dos botões - aOpcoes 
    arr.forEach( e => {
        const btnOpcao = pageEles(aOpcoes, 'button', e, 'btnOpcao'); //Botão que tera as opçoes de respostas
         
        btnOpcao.onclick = () => {  // Verificar se as questão esta certa ou errada
            if (pergunta.resposta == e) {
                msg.textContent = 'Está Correto';
                game.pontuacao++;
            }else{
                msg.textContent = 'Está Errado';
            }

            const desabilitarBtn = parent.querySelectorAll('.btnOpcao'); //Desabita os botões apos uma das respostas ser clicadas

            desabilitarBtn.forEach(el => {
            el.disabled = true;

            const bgcolor = (pergunta.resposta == el.textContent) ? 'green' : 'red'; //Mudando a cor do background após responder
            el.style.backgroundColor = bgcolor;

            proximaP.style.display = 'block'; //Mostrando o botão para a proxima pergunta

            parent.appendChild(proximaP);

            })


        }
     
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