// //funcion: bloque de codigo para realizar una tarea especifica.

// function holaMundo(){
//     console.log('hola mundo');
// }
// holaMundo();

// function saludar(nombre){
//     console.log("hola " + nombre);
// }
// saludar('sof');

// function sumar(num1, num2){
//    let result= num1|+ num2;
//    //creo variable y le asigo valor
//    console.log(result);
//    //para mostar en consola

//    return result;
//    //y esto es lo q devuelve la funcion (el resulado de la suma)
// }
//  sumar(1,2)

// function formaSimple(a,b){
//     return a + b
// }
// // formaSimple(3,4)
// //aqui asi ya no funciona, se hace asi:

// let simple= formaSimple(3,4);
// console.log(simple);



// //ejercicios para resolver
// //1. funcion q calcule el doble de un numero
// //2. funcion que calcule el promedio de 3 notas
// //3. crear un programa que el cual seteemos usuando su nombre y tres notas. usar una funcion para calcular el promedio y otra para mostrar si aprobe o no.

// function ejercicio1(num){
//     doble= num * 2;
//     console.log('el doble del numero es: ' + doble);

// }
//  ejercicio1(16);

//  function ejercicio2(nota1, nota2, nota3){
//   let  promedio= (nota1+nota2+nota3)/3
//     console.log('el promedio de tus notas es: ' + promedio);
//     return promedio

//  }
// let elPromedio=ejercicio2(6,8,10);
// console.log(elPromedio);

// function ejercicio3(n1,n2,n3){
//    let promedio=(n1+n2+n3)/3;
//     // console.log(promedio);
//     return promedio
// }
// let nom='sofi';
// let ej3=ejercicio3(4,5,4);
// // console.log(ej3);

// // let mensaje=""
// // if (ej3>=6){
// //     mensaje='aprobaste';
// // }
// // else{
// //     mensaje='desaprobaste';
// // }

// // console.log('hola ' + nom + ' tu nota es: ' + ej3 + '. ' + mensaje );

// //funciona re bien pero lo haremos con operador ternario

// //  ej3>=6 ? 'aprobaste' : 'desaprobaste'
// //asi esta bien pero al ejecutar no se vera, asiq se pone console

//  ej3>=6 ? console.log('aprobaste') : console.log('desaprobaste')


 //arrays: lista de elementos ue sirve para almacenar varios elemmentos en una solavariable

 let fruta=['manzana','banana','pera'];

 console.log(fruta); 
 //muestra el array completo

 console.log(fruta[1]); 
 //banana, posicion 1. acordate es 0 1 2 etc, empieza en 0

 //funciones nativas
 //length cantidad
 
//  for(let i=0; i<fruta.length;i++){
//     console.log(fruta[i])
//  }
//bueno esta es la forma en la q yo la hago, y esta mal segund el profe no queda prolijo
//lo q se hace es muy parecido a mensaje de if

let cantidad= fruta.length;

//y en el for pongo directamente elnombre de la vaiable cantidad
 for(let i=0; i<cantidad;i++){
    console.log(fruta[i])
 }

 //metodo para array
 //push: agrega elemento al final
 fruta.push('naranja')
 console.log(fruta)

 //pop: elimina el ultimo elemento
 fruta.pop()
 console.log(fruta)

 //unshift: agrega elemneto al principio
  fruta.unshift('uva')
  console.log(fruta)

   //shift: elimina el primer elemento
  fruta.shift()
  console.log(fruta)

  //los q eliminan van con () sin info, los q agregagan van con () con info,
  //  tiene sentido ya q eben agregar lo q se pone entre parentesis,
  // en cambio al eliminar no se pone nada ya q elimina el ultimo o primer elemento segun el metodo q se este usando


  //indexOf: me dce en q posicion esta un elemento
  console.log(fruta.indexOf('pera'));

//  includes: me dice si un elemento esta o no con true o false
 console.log(fruta.includes('manzana'));

 //join lo toma como un solo string, "" las comillas eliminan la coman, -, el guion
 //pone guines entre cada elemento
  console.log(fruta.join(' - '));

  //reverse: pone el array al reves, osea los elementos, lo imprime al reves
   console.log(fruta.reverse('manzana'));
 









   //ejercicios
   //crear un array de nombres y mostrar cuantos array hay en total
   //agregar un nuevo producto al final del array y mostrar el array actualizado
   //eliminar el ultimo producto del array y mostrar cual fue eliminado y como quedo el array.
   //agregar un pais al inicio del array de paises y mostrar el nuevo array.
   //eliminar el primer pais del array y mostrar cual fue eliminado y el resultado final
   //buscar la posicion de un color dentro de un array, si no existe, mostrar un mensaje indicando q no esta.
   //verificar si un nombre especifico esta dentro de una lista de inscriptos.
   //unir las palabras de un array para formar una frase completa como string.
//1:56 los ehjercicuos

   //DESARROLLO
   //1 muestro td el array
   let nombres=['sofia','karen','valen','ana','viki','agus','aye','jess'];
   let cantNombres=nombres.length
   console.log(cantNombres);
   //2 agrego ultimo y muestro
   nombres.push('any')
   console.log(nombres)
   //3 elimino ultimo y muestro
   nombres.pop()
   console.log(nombres)
   //4 agrego al principio y muestro
   nombres.unshift('londres')
    console.log(nombres)
   //5 elimino el primero y muestro
   nombres.shift()
    console.log(nombres)
//6 posicion y si no estar decir q no esta
  let esta=(nombres.indexOf('pan'))
  if (esta===-1){
    console.log('el elemento no esta')
  }
//7 si esta o no 
  console.log(nombres.includes('pan'))
  //8
    console.log(nombres.join(''))


//funciones flecha
let saludeo=(nombre)=>{
    return 'hola ' + nombre
}
 console.log(saludeo('juan'))

     










