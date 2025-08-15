// //1 hora 29 empieza ya q antes estuvieron resolviendo ejercicios en grupo y no se ve ni escucha nd
// console.log(Math.PI)

// //redondea
// //round redondea hacia el mas cercano, daria 5 en este caso
// console.log(Math.round(4.7))
// //floor redondea hacia abajo, daria 4 en este caso
// console.log(Math.round(4.7))
// //round redondea hacia arriba, daria 5 en este caso
// console.log(Math.round(4.7))

// //minimo y maximo
// // min da el valor minimo, 6 en este caso
// console.log(Math.min(10,7,6))
// // min da el valor miximo, 10 en este caso
// console.log(Math.max(10,7,6))

// // random hace q de un num random entre el valor 0 hasta (en este caso) 10
// console.log(Math.random()*10)

// // random hace q de un num random entre el valor 0 hasta (en este caso) 10
// console.log(Math.random()*10)+1 //es lo mismo pero aqui le decimos q desde 1 hasta 10

// //y esto lo mism pero redondea, num desde 1 hasta 10, pero en vez q de no se x num ,827309
// //lo dara reorndeado. acordate q floor redondea
// console.log(Math.floor(Math.random()*10)+1)

// //objeto date
// //da la fecha hora y año, ejecura con node clase12 y vas a ver
// let ahora= new Date()
// console.log(ahora)

// //da el año
// console.log(ahora.getFullYear())
// //mes (acordate q empoieza desde 0, enero seria 0 por ej, si vs queres q te devuelva bien onda 
// //como nuestro lenguaje, sumas 1 jsj)
// console.log(ahora.getMonth()+1)
// //fecha de hoy, es decir dia del mes
// console.log(ahora.getDate())
// //dia de la semana, empiza desde 0 si queres se vea normal umas1
// console.log(ahora.getDay()+1)
// //PARA LA HORA
// console.log(ahora.getHours())
// //para los minutos
// console.log(ahora.getMinutes()+1)
// //1 55 hora de clase   

// //dom 2:15
// //acceso a los elementos del html, modifico estilos y estructura

//buena practica ponerle el nombre el mismo o casi mismo nombre del id jsj
// let tituloo= document.getElementById("titulo");
// console.log(tituloo)

// //cambio el contenido, texto comun sin etiquetas
// titulo.textContent="adios"

// //tmb cambia el contenido pero aqui se pueden utilizar etiquetas
// //en este caso la etiqueta i pone en cursiva
// titulo.innerHTML="<i>adios</i>"

// //no dijo nd pero aqui le pone 2 comillas
// let miBoton=document.getElementById("miBoton")

let reloj=document.getElementById('reloj')
let tiempo=new Date()
let hora=tiempo.getHours()

console.log(hora)
reloj.textContent=hora


