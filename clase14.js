//objetos: coleccion de datos estructurados, que se rpresentan mediante palabras claves y el valor
//
//darle nombre el objeto let persona= {objeto}
//es parecido a array per es clave valor

let persona= {
    nombre: 'romina',
    edad: 20,
    profesion: 'desarrollador'
    //clave edad, valor 20
    //clave nombre,valor romina
    //cada clave-valor se separa con una coma
}
console.log(persona) //toma todos
//si quiro saber solo uno, es decir q valor tiene nombre o edad es asi:
console.log(persona.nombre)

//array de objeto, es una lista en donde cada elemento es un objeto, 
// es util cuando tenemos multiples entidades similares, como usuarios productos etc
//personaS, van corchete de array y llave de  objeto [{}]

let clientes= document.getElementById('clientes')
console.log(clientes)

let personas=[
   {nombre:'sofi',edad:'20',profesion:'tester'},
      {nombre:'karen',edad:'20',profesion:'desarrollaor'},
         {nombre:'ana',edad:'19',profesion:'tester'},
    ]

console.log(personas)
//para llamar a una cosa en un array de objetos pones el nombre q seria personas
//luego la posicion, va desde 0, y luego .nombre o lo q quieras
console.log(personas[1].nombre)


//for tradicional
for(let i=0; i<personas.length; i++){
    console.log(personas[i].nombre)
    //asi se inserta elementos desde el js al html

    // clientes.textContent += personas[i].nombre

    //asi se hace +=para q acumule y sume, asi me muestre tododos los nombres,
    //pq sino van desapareciendo, queda en caa pasada el ultimo
    //es como q el ultimo reemlaza entonces no se muestra t
    //con += se acumula digamos

//  clientes.innerHTML += `<li>${personas[i].nombre}</li>`

    clientes.innerHTML += `<tr>
                            <td>${personas[i].nombre}</td>
                            </tr>`

//   min 34, en realidad es un poco mas antes jsj
// desde 53 a 1:22 mira en 2 o 1.75 ya q es pura teoria
}