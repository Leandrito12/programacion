import { Vehiculo } from './vehiculo';
export class Camion extends Vehiculo {
    private capacidadCarga: number;
    private numeroEjes: number;

    constructor(patente: string, capacidadCarga: number, numeroEjes: number) {
        super(patente);
        this.capacidadCarga = capacidadCarga;
        this.numeroEjes = numeroEjes;
    }

    getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    getNumeroEjes(): number {
        return this.numeroEjes;
    }

    setCapacidadCarga(capacidadCarga: number): void {
        this.capacidadCarga = capacidadCarga;
    }

    setNumeroEjes(numeroEjes: number): void {
        this.numeroEjes = numeroEjes;
    }
}