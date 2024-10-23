import { Vehiculo } from './vehiculo';

export class Auto extends Vehiculo {
    private modelo: string;
    private anio: number;

    constructor(patente: string, modelo: string, anio: number) {
        super(patente);
        this.modelo = modelo;
        this.anio = anio;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    setAnio(anio: number): void {
        this.anio = anio;
    }
}