//parte 3 clase 14
//api ricky y morty

fetch('https://rickandmortyapi.com/api/character') //url api
.then(datos=>datos.json()) //la url ahora es datos, y datos .json convierte el json en objeto
.then(pepe=> mostrarDatos(pepe)) // datos es ahora pepe, llamo a la fuuncion y en el parametro pongo pepe


function mostrarDatos(info){
    console.log(info.results)
  //imagen, nombre, estado
}