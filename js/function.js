// alert("foijnadsiuf");
// ####### tipo de variables
// const para valores constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var days = 10;
var name = "Johan";
// let para variables de bloqueo o locales
let count = 1;

// ####### formas de impresion
// alert
// alert(name);
console.log(name);
// body - pantalla
document.write(name + " cardenas");
document.getElementById("box_one").innerHTML = "<h1>Johan Cardenas </h1>";
document.getElementById("box_two").innerHTML = "<h1>Johan Cardenas </h1>";

// librerias

// Swal.fire(
//     'The Internet?',
//     'That thing is still around?',
//     'question'
//   )


// Swal.fire({
//     icon:'error',
//     showConfirmButton: false,
//     title: name,
//     text: name, 
//     footer: "footer " + name,
//     background: 'green',
//     position: 'top-start'
// });

// ########## tipos de datos

var number_one = 20;
var number_two = 5.5;
// texto
var class_type = "Electiva Tecnica 1";
// booleanos
var boolean = true;
// arrays
var array_num = [1,2,3,4,5,3.4,1.2];
var array_text = ["lunes", "martes","miercoles","jueves","viernes","sabado","domingo"];
var array_mix = [1,"a",2,"b"];
var array_mul = [
    {name:"Johan", last_name:"Cardenas",age:"21"},
    {name:"wilder", last_name:"sanchez",age:"12"},
    {name:"andrea", last_name:"rodriguez",age:"26"},
    {name:"david", last_name:"Cardenas",age:"30"}
]

// ########## Operadores basicos

// suma 
var suma = number_one + number_two;
console.log("suma = " + suma);
var resta = number_one - number_two;
console.log("resta = " + resta);
var multi = number_one * number_two;
console.log("multiplicacion = " + multi);
var divi = number_one / number_two;
console.log("division = " + divi.toFixed(2));
var modulo = number_one % number_two;
console.log("modulo = " + modulo);


//  OPERADORES LOGICOS Y ESTRUCTURAS condicionales (INVERSE, INCREMENTO)
// AND && CON IF - AMPERSAND

var bool = false;
var numeric = 10;
if(!bool && numeric == 10){
    console.log("ENTRA IF");
}
else{
    console.log("ENTRA ELSE");
}

if(!bool || numeric == 7){
        console.log("ENTRA IF");
        numeric++;
}else{
        console.log("ENTRA ELSE");
        numeric--;
}
console.log(numeric);

// FOR 

for(let j = 0; j<array_text.length; j++){
        console.log(array_text[j] + (j + 1));
}

// WHILE 
let f = 0;
while(f<array_text.length){
    console.log(array_text[f] + (f + 1));
    f++;
}

// DO WHILE 

let m = 0;
do{
    console.log(array_text[m] + (m + 1));
    m++;
}while(m<array_text.length);


// FUNCIONES Y EVENTOS

function load_page(){
    // alert("LA PAGINA SE HA CARGADO")

    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled=true;
    let date = new Date();
    console.log(date.getMinutes());
    for(let j=0;j>array_mul.length;j++){
        console.log(array_mul[j].last_name);
    }
}

function validate(){

    let nombres =  document.getElementById("nombres").value;
    let nombres_2 =  document.getElementById("nombres");
    if(nombres.length > 2){
        nombres_2.style.border = "2px solid green"
        document.getElementById("apellidos").disabled=false;
        document.getElementById("apellidos").focus();
        document.getElementById("nombres").value = "";
        alert(nombres.concat("Duarte"));

    }
}

function change_Color(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff";

}

// function clear_color(){
//     document.body.style.backgroundColor = "#fff";

// }

const clear_color = document.querySelector("#clear_color")

clear_color.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
});

// REGISTRO FORMULARIO

const form_register = document.getElementById("form_register");
const nombres       = document.getElementById("nombres");
const apellidos     = document.getElementById("apellidos");
const information   = document.getElementById("information");

form_register.addEventListener("submit", name_event => {
    name_event.preventDefault();
    let info = "";
    // console.log(nombres);
    if(nombres.value.length <=2 || apellidos.value.length <=2){
            info += "NOMBRES O APELLIDOS INVALIDOS";
            information.style.color = "red";
    }else{
        alert(nombres.value + " " + apellidos.value)
    }
    information.innerText = info;
// console.log();
})



