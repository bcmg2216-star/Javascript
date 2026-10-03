
const cont = "hola";

while (true){
    let pa = prompt("Introduce la contraseña");

    if(cont === pa){
        alert("contraseña correcta");
        break
    }else {
        alert("contraseña incorrecta");
    }
}
