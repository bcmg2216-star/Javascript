class Libro{
    constructor(titulo, autor, numPag) {
        if(titulo === null || titulo === undefined || titulo === ""){
            throw new Error("El titulo no puede estar vacio");
        }
        if(autor === null || autor === undefined ||autor === ""){
            throw new Error("El autor no puede estar vacio");
        }
        if(isNaN(numPag) || numPag<=0){
            throw new Error("Numero de paginas invalido");
        }

        this.titulo = titulo;
        this.autor = autor;
        this.numPag = numPag;
    }

    describir(){
        document.body.innerHTML += ("<h1>"+this.titulo+"</h1>");
        document.body.innerHTML += ("<p>"+this.autor+"</p>");
        document.body.innerHTML += ("<p>"+this.numPag+"</p>");
    }

    esExtenso(){
        if(this.numPag >= 300){
            return true;
        }else {
            return false;
        }
    }
}

class Catalogo {
    constructor(...libros) {
        this.libros = [];
    }

    anadir(libroN){
        this.libros.push(libroN);
    }

    eliminar(titulo){
        let encontrado = false;
        for (let i = 0; i < this.libros.length; i++) {
            if(this.libros[i].titulo === titulo){
                this.libros.splice(i, 1);
                alert("Libro eliminado");
                encontrado = true;
                break
            }
        }
        if(encontrado === false){
            alert("No existe ese libro");
        }
    }

    consultar(titulo){
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].titulo === titulo) {
                return this.libros[i];
            }
        }
        return null;
    }

    listar(){
        for (let i = 0; i<this.libros.length; i++){
            this.libros[i].describir();
        }
    }
}

let libro1 = new Libro("Don Quijote", "Cervantes", 299);
let libro2 = new Libro("Cien años de soledad", "Gabo", 300);
let libro3 = new Libro("El Principito", "Saint-Exupéry", 120);

libro1.describir();
console.log("Libro1:", libro1.esExtenso());

libro2.describir();
console.log("Libro2:", libro2.esExtenso());

libro3.describir();
console.log("Libro3:", libro3.esExtenso());

libro1.titulo = "Don Quijote (Edicion Especial)";
console.log("T1tulo libro 1 cambiado a:", libro1.titulo);

let miCatalogo = new Catalogo();
miCatalogo.anadir(libro1);
miCatalogo.anadir(libro2);
miCatalogo.anadir(libro3);

document.body.innerHTML += "<h2>PRIMERA VEZ QUE LISTAMOS</h2>";
miCatalogo.listar();

miCatalogo.eliminar("El Principito");

document.body.innerHTML += "<h2>SEGUNDA VEZ QUE LISTAMOS</h2>";
miCatalogo.listar();

miCatalogo.anadir(libro2);

console.log("Consulta Harry Potter:", miCatalogo.consultar("Harry Potter"));
miCatalogo.eliminar("Libro Fantasma");
