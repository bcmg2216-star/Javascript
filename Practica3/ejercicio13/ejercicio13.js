const num = Number.parseInt(prompt("introduce un numero"));

console.log("los divisores del numero son:");
for(let i = 1; i <= num; i++){
    if(num % i === 0){
        console.log(i);
    }
}
