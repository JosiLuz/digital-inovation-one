/*
var name = "Josi";
var idade = 26;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(name + " tem " + idade);
console.log(name);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/



/*
var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista[1]);
console.log(lista)
console.log(lista.length)
console.log(lista.reverse());

console.log(lista[0]);
console.log(lista.toString()[0]);

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/



/*
var fruta = {nome:"maça", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/



/*
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutas);
alert(frutas[1].nome);
*/




/*
var age = prompt("Qual sua idade?");
if (age >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/




/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count = count + 1;
}
*/



/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count)
}
*/



var d = new Date();

//alert(d)

/*
var dia_semana
if (d.getDay() + 1 == 1) {
    dia_semana = "domingo"
}
if (d.getDay() + 1 == 2) {
    dia_semana = "segunda-feira"
}
if (d.getDay() + 1 == 3) {
    dia_semana = "terça-feira"
}
if (d.getDay() + 1 == 4) {
    dia_semana = "quarta-feira"
}
if (d.getDay() + 1 == 5) {
    dia_semana = "quinta-feira"
}
if (d.getDay() + 1 == 6) {
    dia_semana = "sexta-feira"
}
if (d.getDay() + 1 == 7) {
    dia_semana = "sábado"
}

alert("Hoje é dia: "+ d.getDate()+"/"+ (d.getMonth()+1) +"/"+ d.getFullYear() + "." + "\n" + "Agora é exatamente: " + d.getHours() + "h e " + d.getMinutes() + " minutos de uma " + dia_semana + ".");
*/



/*
dias_semana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
function day_name() {

    return dias_semana[d.getDay()]

}
mensagem = "Hoje é dia: " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + "." + "\n" + "Agora é exatamente: " + d.getHours() + "h e " + d.getMinutes() + " minutos de uma " + day_name() + "."
alert(mensagem)
*/



/*
dias_semana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]

function day_name() {

    return dias_semana[d.getDay()]
}

var temp_message

if (d.getDay() == 0) {
    temp_message = "ieeee"

} else {
    temp_message = "Hoje é dia: " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + "." + "\n" + "Agora é exatamente: " + d.getHours() + "h e " + d.getMinutes() + " minutos de uma " + day_name() + "."
}

mensagem = temp_message

alert(mensagem)
*/



/*
function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


/*
function soma(n1,n2){
    return n1+n2;
}

alert(soma(5,10));
*/



function validaidade(idade){
    var validar
    if (idade>=18){
        validar= true
    }else{
        validar=false
    }
    return validar
}

idade=prompt("Digite aqui sua idade")
console.log(validaidade(idade))