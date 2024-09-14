import fs from 'node:fs';

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["leche", "galletitas", "harina", "queso"];

const saveData = (array: any[], name: string) =>{
    let dataStr: string = array.join(" ");
fs.writeFileSync(`./${name}.txt`,dataStr);
}

saveData(precios, "precios");
saveData(productos, "productos");

const datosNombres:string = fs.readFileSync("./productos.txt","utf8");
const datosPrecios:string = fs.readFileSync("./precios.txt","utf8");


const nuevoArrayNombre : string[] = datosNombres.trim().split(" ");
const nuevoArrayPrecios: number[] = datosPrecios.trim().split(" ").map(numStr => parseInt(numStr, 10));
console.log(nuevoArrayNombre, nuevoArrayPrecios);



