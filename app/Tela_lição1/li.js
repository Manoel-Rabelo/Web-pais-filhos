// Conteudo inicial
const btnStart = document.querySelector('#btn-start');
const ctdInicial = document.querySelector('#conteudo-inicial');
const ctdLicao = document.querySelector('#conteudo-da-licao');

// Criando msg
const localMsg = document.querySelector('#local-msg');
const msg = criarElementos(localMsg, 'div', '', 'msg');

// saida de dados
const localQuestao = document.querySelector('#local-questao');

const saidaQuestao = criarElementos(localQuestao, 'div', '', 'grid-principal');

// Marcador de Pontuação
const game = { pontuacao: 0 }

// chamando o json
const url = "./li.json";

// mudando a pagina ao clicar e carregando o conteudo
btnStart.onclick = carregar;

// Ajax pegando json - e mudando a pagina
function carregar () {
    ctdInicial.style.display = 'none';
    ctdLicao.style.display = 'block';


    fetch(url)
        .then(res => res.json())
        .then(data => {
            const temp = {
                total: data.length,
                q: data,
                cont: 0
            }
            criarPergunta(temp);
        })
}

// Criação dos elementos para a formação e funcionamento da Questão
function criarPergunta (data) {
     const obj = criarElementos(saidaQuestao, 'div', '', 'obj-questao');

     if (data.q.length == 0) {
        msg.textContent = 'game over'; //mudar local da mensagem de gameover (retirar o comentario ao fazer!)
     }else {

        const proximaPerguntaArea = document.querySelector('#btn-proxima');
        const proximaPergunta = criarElementos(proximaPerguntaArea, 'button', 'Proxima', 'proxima-pergunta');

        //Função apagar
        proximaPergunta.onclick = () => {
            obj.remove();
            proximaPergunta.remove();
            criarPergunta(data);
            modal.style.display = "none";
        }

        const pergunta = data.q.shift ();
        data.cont++;
        //msg.textContent = `Pergunta ${data.cont} de ${data.total}`;
        msg.innerHTML = `<span id="tx1">Pergunta <span id="tx2">${data.cont}</span> de <span id="tx3">${data.total}</span> </span>`;
        
        if(data.q.length == 0) proximaPergunta.textContent = 'Fim';

        outputQuestao(pergunta, obj, proximaPergunta);
     }
}

function outputQuestao(pergunta, parent) {

    console.log(pergunta);

    // Enunciado
    const qEnunciado = criarElementos(parent, 'p', `${pergunta.pergunta}?`, 'que-enunciado');

    // Imagem
    const qImg = criarElementos(parent, 'div', '', 'q-img');

    // Array com as alternativas
    const arr = pergunta.opcoes;
    arr.push(pergunta.resposta);
    arr.sort(() => {
        return Math.random() -0.5;
    })

    // Opcoes de respostas
    const queOpcoes = criarElementos(parent, 'div', '', 'q-opcoes');

    arr.forEach(e => {
        const botaoOpcoes = criarElementos (queOpcoes, 'button', e,'q-btn-opcoes');

        botaoOpcoes.onclick = () => {
            if (pergunta.resposta == e) {
                document.getElementById("status-resposta").textContent = "Certo";

                modal.style.display = "block";
                
                game.pontuacao++;
            }else {

                document.getElementById("status-resposta").textContent = "Errado";

                modal.style.display = "block";
            }

            const desabilitarBtn = parent.querySelectorAll('.q-btn-opcoes');

            desabilitarBtn.forEach(el => {
                el.disabled = true;

                console.log(el);
                const bgcolorR = (pergunta.resposta == el.textContent) ? 'green' : 'red'; //Mudando a cor do background após responder
                el.style.backgroundColor = bgcolorR;

                
            })

        }
        
    })

    const btns = document.querySelectorAll('.q-btn-opcoes');   
    
    if (btns[0]) {
        let btnColor1 = btns[0].classList;
        btnColor1.add("btn-color1");
        console.log(btnColor1);
    }
    if (btns[1]) {
        let btnColor2 = btns[1].classList;
        btnColor2.add("btn-color2");
        console.log(btnColor2);
    }
    if (btns[2]) {
        let btnColor3 = btns[2].classList;
        btnColor3.add("btn-color3");
        console.log(btnColor3);
    }
    if (btns[3]) {
        let btnColor4 = btns[3].classList;
        btnColor4.add("btn-color4");
        console.log(btnColor4);
    }
    
    
}

// Modal - respnder peerguntas

// Get the modal
const modal = document.getElementById("myModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "block";
  }
}
// fim modal

function criarElementos(parent,t,html,c) {
    const elemento = document.createElement(t);
    elemento.innerHTML = html;
    elemento.classList.add(c);
    return parent.appendChild(elemento);
}