import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

export class RegistroAutomotor {
    private nroReg: number;
    private autos: Auto[];
    private motos: Moto[];
    private camiones:  Camion[];

       constructor(nroReg: number) {
        this.autos = [];
        this.nroReg = nroReg;
        this.motos = [];
        this.camiones = [];
       }
    
    getNroReg(): number { return this.nroReg; }
    getAutos(): Auto[] { return this.autos; }
    getMotos(): Moto[] { return this.motos; }
    getCamiones(): Camion[] { return this.camiones; }

    setNroReg(nroReg: number) {
        this.nroReg = nroReg;
    }
    setAutos(autos: Auto[]){
        this.autos = autos;
    }
    setMotos(motos: Moto[]) {
        this.motos = motos;
    }
    setCamiones(camiones: Camion[]) {
        this.camiones = camiones;
    }

    AddAuto(patente: string, modelo: string, anio: number): boolean{

    const autoExistente = this.autos.find(auto => auto.getPatente() === patente);
        console.log(autoExistente);
    if (autoExistente) {
        return false;
    }
    if(autoExistente === undefined || autoExistente && modelo !== undefined && modelo !== null && anio !== undefined && anio !== null){
        const newAuto: Auto = new Auto(patente, modelo, anio);
        this.autos.push(newAuto);
        return true;
    } else {
        return false
    }
    
    }

    deleteAuto(patente: string): boolean{
        const autosLength: number = this.autos.length;
         this.autos = this.autos.filter(auto => auto.getPatente() !== patente);
         if(autosLength > this.autos.length){
            return true
         } else {
            return false;
         }
    }

    modifyAuto(patente: string, modelo: string, anio: number): boolean {
        const indice = this.autos.findIndex(auto => auto.getPatente() === patente);
        if(indice === -1){
            return false
        } else {
            if(modelo !== undefined && modelo !== null){
                this.autos[indice].setModelo(modelo);
            }
            if(anio !== undefined && anio !== null){
                this.autos[indice].setAnio(anio);
            }
            return true;
        }
    }

    AddCamion(patente: string, capacidadCarga: number, numeroEjes: number): boolean {
        const camionExistente = this.camiones.find(camion => camion.getPatente() === patente);
        console.log(camionExistente);

        if (camionExistente) {
            return false;
        }

        if (camionExistente === undefined || (camionExistente && capacidadCarga !== undefined && capacidadCarga !== null && numeroEjes !== undefined && numeroEjes !== null)) {
            const newCamion: Camion = new Camion(patente, capacidadCarga, numeroEjes);
            this.camiones.push(newCamion);
            return true;
        } else {
            return false;
        }
    }

    deleteCamion(patente: string): boolean {
        const camionesLength: number = this.camiones.length;
        this.camiones = this.camiones.filter(camion => camion.getPatente() !== patente);

        if (camionesLength > this.camiones.length) {
            return true;
        } else {
            return false;
        }
    }

    modifyCamion(patente: string, capacidadCarga: number, numeroEjes: number): boolean {
        const indice = this.camiones.findIndex(camion => camion.getPatente() === patente);

        if (indice === -1) {
            return false;
        } else {
            if (capacidadCarga !== undefined && capacidadCarga !== null) {
                this.camiones[indice].setCapacidadCarga(capacidadCarga);
            }
            if (numeroEjes !== undefined && numeroEjes !== null) {
                this.camiones[indice].setNumeroEjes(numeroEjes);
            }
            return true;
        }
    }

    AddMoto(patente: string, cilindrada: number, tipo: string): boolean {
        const motoExistente = this.motos.find(moto => moto.getPatente() === patente);
        console.log(motoExistente);

        if (motoExistente) {
            return false;
        }

        if (motoExistente === undefined || (motoExistente && cilindrada !== undefined && cilindrada !== null && tipo !== undefined && tipo !== null)) {
            const newMoto: Moto = new Moto(patente, cilindrada, tipo);
            this.motos.push(newMoto);
            return true;
        } else {
            return false;
        }
    }

    deleteMoto(patente: string): boolean {
        const motosLength: number = this.motos.length;
        this.motos = this.motos.filter(moto => moto.getPatente() !== patente);

        if (motosLength > this.motos.length) {
            return true;
        } else {
            return false;
        }
    }

    modifyMoto(patente: string, cilindrada: number, tipo: string): boolean {
        const indice = this.motos.findIndex(moto => moto.getPatente() === patente);

        if (indice === -1) {
            return false;
        } else {
            if (cilindrada !== undefined && cilindrada !== null) {
                this.motos[indice].setCilindrada(cilindrada);
            }
            if (tipo !== undefined && tipo !== null) {
                this.motos[indice].setTipo(tipo);
            }
            return true;
        }
    }

}