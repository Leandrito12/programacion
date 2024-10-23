export class Vehiculo {
    protected patente: string;

    constructor(patente: string) {
        this.patente = patente;
    }

    getPatente(): string {
        return this.patente;
    }

    setPatente(patente: string): void {
        this.patente = patente;
    }
}