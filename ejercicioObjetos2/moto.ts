import { Vehiculo } from './vehiculo';
export class Moto extends Vehiculo {
    private cilindrada: number;
    private tipo: string;

    constructor(patente: string, cilindrada: number, tipo: string) {
        super(patente);
        this.cilindrada = cilindrada;
        this.tipo = tipo;
    }

    getCilindrada(): number {
        return this.cilindrada;
    }

    getTipo(): string {
        return this.tipo;
    }

    setCilindrada(cilindrada: number): void {
        this.cilindrada = cilindrada;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }
}