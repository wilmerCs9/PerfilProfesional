console.log("prueba de conexion"); 
// tipos de variables 
//cons : variables constantes 
const p1 = 301416; 
const pilgada = 2.54; 
const name = "Wilmer Casadiegos"; 
//var : vairiables goblales 
var cal_days = 15; 
//let :  
let j = 0; 
let count = 1; 
 
//Formas de impresion  
// alert 
//alert(name); 
//console  
console.log(name); 
console.log(cal_days); 
console.log("15") 
console.log(true) 
//Pantalla - body 
document.write(name); 
document.getElementById("box_one").innerHTML = "<h1>Wilmer Casadiegos</h1>" 
document.getElementById("box_two").innerHTML = "<h1>Wilmer Casadiegos</h1>" 
// librerias 
Swal.fire( {
    icon: "info",
    tittle: "Wilmer",
    footer:name,
    showconfirmButton: false,
    timer: 2000,
    position:"center-end",
}) 
  // swal.fire(name)

  // TIPOS DE DATOS

  //NUMERICOS

  var number_one = 10;
  var number_two = 2.5;
  //String
  var text = "soy un texto";

  //Booleanos

  var boolean = true; //false

  //Array

var array_num = [1,2,3,4,5,6];
var array_text  = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
let array_mix = [1,"a",2.5,"c"];
var array_multi = [
    {name:"wilmer", last_name:"Casadiegos",age:"23"},
    {name:"wilmer", last_name:"Casadiegos",age:"23"},
    {name:"wilmer", last_name:"Casadiegos",age:"23"},
    {name:"wilmer", last_name:"Casadiegos",age:"23"},

];

//OPERADORES BASICOS

// SUMA + 

var suma = number_one + number_two;
console.log("suma =" +suma)

//RESTA -

var resta = number_one - number_two;
console.log("resta = " + resta)

// Multiplicacion

var multiplicacion = number_one * number_two;
console.log("multiplicacion = " + multiplicacion)

//DIVISION
var division = number_one / number_two;
console.log("division = " + division)

//MODULO

var modulo = number_one % number_two;
console.log("modulo = " + modulo)


console.log("suma = " +suma + "\n" +
    "resta = " + resta + "\n" +
    "multiplicaion = " + multiplicacion + "\n" +
    "division = " +division + "\n" +
    "modulo = " + modulo
);

var respuesta =
    "suma = " +suma + "<br>" +
    "resta = " + resta + "<br>" +
    "multiplicaion = " + multiplicacion + "<br>" +
    "division = " +division + "<br>" +
    "modulo = " + modulo;

    swal.fire(respuesta);

    swal.fire({
        showconfirmButton: false,
        background: "#fff",
        icon: "success",
        tittle: "respuesta",
        html: respuesta,
    })
 
