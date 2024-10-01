export class Camion {
        private patente: string;
        private capacidadCarga: number;
        private numeroEjes: number;
    constructor(patente:string, capacidadCarga:number,numeroEjes:number) {
            this.patente = patente;
            this.capacidadCarga = capacidadCarga;
            this.numeroEjes = numeroEjes;

    }

    getPatente(): string {
        return this.patente;
    }

    getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    getNumeroEjes(): number {
        return this.numeroEjes;
    }

    setPatente(patente: string): void {
        this.patente = patente;
    }

    setCapacidadCarga(capacidadCarga: number): void {
        this.capacidadCarga = capacidadCarga;
    }

    setNumeroEjes(numeroEjes: number): void {
        this.numeroEjes = numeroEjes;
    }
}