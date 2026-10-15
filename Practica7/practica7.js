// paso2
const textoCafe = `{
    "title":"Latte",
    "description":"As the most popular coffee drink out there, the latte is made with a shot of espresso and steamed milk, with just a touch of foam. It can be ordered plain or flavored with everything from vanilla to pumpkin spice.",
    "ingredients":["Espresso","Steamed milk"],
    "image":"https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
    "id":2
 }`;

// paso 3
const cafe = JSON.parse(textoCafe);
console.log(cafe);

// paso 4
console.log("Nombre: ", cafe.title);
console.log("Descripcion: ", cafe.description);
console.log("Ingredientes: ", cafe.ingredients);
console.log("Imagen: ", cafe.image);
console.log("Id: ", cafe.id);

// paso 5
const fichaCafe = {
    id: cafe.id,
    nombre: cafe.title,
    ingredientes: cafe.ingredients,
    imagen: cafe.image
};

// paso 6
document.body.innerHTML=`<h1>${fichaCafe.nombre}</h1>`;
document.body.innerHTML += `<img src="${fichaCafe.imagen}" alt="${fichaCafe.nombre}" style="height: 300px;">`;

// paso 7
const fichaCafe2 = {
    id: fichaCafe.id,
    nombre: fichaCafe.nombre,
    ingredientes: fichaCafe.ingredientes
};

const fichaSangria = JSON.stringify(fichaCafe2, null, 2);

// paso 8
console.log(fichaSangria);
const fichaSangriaObjeto = JSON.parse(fichaSangria);

document.body.innerHTML += `<h2>Ficha en formato JSON</h2>`;
document.body.innerHTML += `<pre>${fichaSangria}</pre>`;
console.log("Ficha recuperada: ", fichaSangriaObjeto);

console.log("¿Incluye imagen?", "image" in fichaSangriaObjeto);