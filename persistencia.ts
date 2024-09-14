import fs from "node:fs";

//let contenido:string ="nuevo contenido";
//fs.writeFileSync('./test.txt',contenido);

// let contenido:number=9;
// fs.writeFileSync('./test.txt',contenido.toString());

const nombres:string[] = ["juan", "pedro", "maria"];

let nombresStr:string = "";
for (let i:number=0; i<nombres.length; i++) {
    nombresStr += `${nombres[i]} `;
}
fs.writeFileSync('./test.txt',nombresStr);

const datos:string = fs.readFileSync("./test.txt","utf8");

//const nuevoArray : string[] = datos.split(" ");

//ojo crea un elemento vacio al final
//para evitar esto usamos el trim

const nuevoArray : string[] = datos.trim().split(" ");
console.log(nuevoArray);