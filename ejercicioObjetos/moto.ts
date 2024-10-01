export class Moto {
    private patente: string;
        private cilindrada: number;
        private tipo: string
    constructor(patente: string, cilindrada: number, tipo: string) {
            this.patente = patente;
            this.cilindrada = cilindrada;
            this.tipo = tipo;
    }

    getPatente(): string {
        return this.patente;
    }

    getCilindrada(): number {
        return this.cilindrada;
    }

    getTipo(): string {
        return this.tipo;
    }

    setPatent(patente: string): void {
        this.patente = patente;
    }

    setCilindrada(cilindrada: number): void {
        this.cilindrada = cilindrada;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }
}