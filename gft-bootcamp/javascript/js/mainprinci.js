function load(){
    alert("Página carregada")
}


function clicou() {
    //alert("Obrigado por clicar")
    console.log(document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>")
}

function redirecionar() {
    window.open("https://www.letras.mus.br/apparat/a-violent-sky/#radio:apparat");
    //window.location.href = "https://www.letras.mus.br/apparat/a-violent-sky/#radio:apparat";
}



function trocar0() {
    document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";

}

function voltar0(){
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui"
}



function trocar(elemento) {
    elemento.innerHTML = "Obrigado novamente";

}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
}

function change(elemento){
    console.log(elemento.value)
}
