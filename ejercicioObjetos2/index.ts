import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';
import { RegistroAutomotor } from './registroAutomotor';

const registro = new RegistroAutomotor(0);



registro.AddAuto("ABC", "corolla", 2020);
if(registro.AddAuto("ABC", "corolla", 2020)){
    console.log(" carga exito")
} else {
    console.log("error en la carga de ABC, corolla, 2020")
}

if(registro.AddAuto("ACC", "mondeo", 2020)){
    console.log(" carga exito")
} else {
    console.log("error en la carga de ACC, mondeo, 2020")
}

if(registro.AddAuto("ABC", "corolla", 2020)){
    console.log(" carga exito")
} else {
    console.log("error en la carga de ABC, corolla, 2020")
}
console.log("los registros guardados son: ", registro);

registro.deleteAuto("ABC");

console.log("luego de borrar quedaron: ", registro);

registro.AddCamion("DEF456", 7000, 6);
if (registro.AddCamion("DEF456", 7000, 6)) {
    console.log("Carga exitosa");
} else {
    console.log("Error en la carga de DEF456, 7000, 6");
}

if (registro.AddCamion("GHI789", 8000, 8)) {
    console.log("Carga exitosa");
} else {
    console.log("Error en la carga de GHI789, 8000, 8");
}

if (registro.AddCamion("DEF456", 7000, 6)) {
    console.log("Carga exitosa");
} else {
    console.log("Error en la carga de DEF456, 7000, 6");
}

console.log("Los registros guardados son: ", registro);

registro.deleteCamion("DEF456");

console.log("Luego de borrar quedaron: ", registro);

registro.AddMoto("XYZ789", 250, "Deportiva");
if (registro.AddMoto("XYZ789", 250, "Deportiva")) {
    console.log("Carga exitosa");
} else {
    console.log("Error en la carga de XYZ789, 250, Deportiva");
}

if (registro.AddMoto("LMN456", 150, "Scooter")) {
    console.log("Carga exitosa");
} else {
    console.log("Error en la carga de LMN456, 150, Scooter");
}

if (registro.AddMoto("XYZ789", 250, "Deportiva")) {
    console.log("Carga exitosa");
} else {
    console.log("Error en la carga de XYZ789, 250, Deportiva");
}

console.log("Los registros guardados son: ", registro);

registro.deleteMoto("XYZ789");

console.log("Luego de borrar quedaron: ", registro);




