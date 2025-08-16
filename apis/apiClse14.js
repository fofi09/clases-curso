//continuacion de la clase 14, comienzo de apis

//api. puente de comunicacion entre 2 sistemas
//api rest tipo de api q sigue reglas para trabajar con recursos

//get obtener datos
//post enviar datos
//put actualizar datos
//delete eliminar datos

//api necesita devolucion, en un formato json: javascript object notation

// {
//     'nombre':'ana',
//     'edad':13
// }

//javascript NO entiende json. 

//front envia al back, sale en formato json, llega al back, el back lo tiene q traducir
//cuando sale del back tmb traduce a json, y cuando vuelve a llegar al front traducimos a array de objetos,

//arrays de objetos se traduce a json, javascriptt no entiende json por eso se una array de objeto en 
//entrada y salida y se traduce a json

//las apis se dividen en dinamicos y estaticos
//estatico signidfica q siempre va a ser lo mismo es muy raro se cambie
//dinamica se actualizan por minuto, dias etc, tiempo real, esas son dinamicas

//api key pra poe hacer get post put y elete, con un clave, pero no siempre

//1:31

//como consumo o traigo api? con fetch('y aqui adentro la url de la api q quiero consumir')

fetch('https://jsonplaceholder.typicode.com/posts/1')
//ahora traducirla
.then(datos=>datos.json()) //y entonces hace esto
//siempre es lo mismo se supone
//.then(datos) datos ahora es la url de la api
//datos.json() esto transforma el json en objeto literal

//acordate q deciamos lo de traducir, bueno garramos la url ahoraes datos, y datos.js traduce, 
// es decir convierte json en objeto literal

// .then(pepe=>console.log(pepe))

//y esto ice, enonces (.them) pepe, datos ahora es pepe entonces pepe toma el json transformado
//y en este caso lo mostramos en consola, pero no mostramos datos, sino peope q es datos jsjs

//el fetch es como una funcion, una caja, por lo q si llamas algo afuera como pepe no existe
//como hago ? hacienddo una funcion

.then(pepe=>mostrarDatos(pepe))

let r
function mostrarDatos(info){
    console.log(info)
     console.log(info.title)
      console.log(info.body)
      //title y body son parte del json e esta api, no salen pq si estan en este caso en la api, 
      //pero sino llamas a lo q necesites e las apis, nombres edad qsyo clima o lo q tengan,
      //asi acedes a las popiedades

}
// mostrarDatos('juan')
//viste q usualmente se hace eso, la funcion vcon los parametros en este caso info
//y completas al llamarlla, bueno ahora
//en las apis tmb laa llamas y en el parametro en vez de poner cualquier cosa
//se pone la var en este caso pepe q contiene a datos q contiene la url de la api .then(pepe=>mostrarDatos(pepe))
//     1:38/39
//2:2