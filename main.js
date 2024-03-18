const botoes = document.querySelectorAll(".botao");

for(let i=;i <botoes.length;++){
    botoes[i].onclick = function(){
        
        botoes[i].classList.add("ativo");
    }
    console.log()
}