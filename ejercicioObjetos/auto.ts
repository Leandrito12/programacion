export class Auto {
        private patente: string;
        private modelo: string;
        private anio: number;

        constructor(patente:string, modelo:string,anio:number) {

            this.patente = patente;
            this.modelo = modelo;
            this.anio = anio;

        }

    getPatente(): string {
        return this.patente;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    setPatente(patente: string): void {
        this.patente = patente;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    setAnio(anio: number): void {
        this.anio = anio;
    }
}