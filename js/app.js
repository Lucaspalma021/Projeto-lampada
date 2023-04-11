//Declarando variáveis DOM

var imagem = document.getElementById('img')
var on = document.getElementById('on')
var off = document.getElementById('off')

//Pegando o funcionamento do mouse

on.addEventListener('click', acender)

function acender(){
    imagem.src="images/acesa.gif"
}

off.addEventListener('click', apagar)

function apagar(){
    imagem.src="images/apagada.gif"
}

imagem.addEventListener('dblclick', ()=> {
    imagem.src="images/quebrada.jpg"
})
