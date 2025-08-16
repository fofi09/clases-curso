//url de la api, esto lo explico enapiclase14
//esto es GET ya q obtenemos datos a travez de ffetch
fetch('https://jsonplaceholder.typicode.com/users')
//la uurl ahora es datos, y datos.json traduce/convierte json en objeto array
.then(datos=> datos.json())
// .then(pepe=>console.log(pepe))
//pepe ahora es datos y hago console log pepe para visualizar td (ya convertido a array de objeto
//yaq pepe es datos y datos es la url y .json convirtio el json en objeto)

//2:19
.then(pepe=>mostrarDatos(pepe))
//es lo mismosolo q en vez de console log es l funcion
//la funcion solo llama a un paramero info no sabe lo q es,
//sale biien ya q se llama a la funcion aqui .then(pepe=>mostrarDatos(pepe))
function mostrarDatos(info){
    console.log(info)
    //quiero q me muestre todos los nombres
    // for(let i=0;i<info.length;i++){
    //     console.log(info[i].name)
    // }
    //esa forma es vieja, esta bien pero hoy en dia se utiliza ora froma

    for(const persona of info){ //for of,este es el q se usa o el q el profe quiere
        //creo constante persona
        //info es elparametro de la funcion
        console.log(persona.name)
        //muestro todos los nombres 
        //2:30
    }
}
