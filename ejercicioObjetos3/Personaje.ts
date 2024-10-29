class Personaje {
    nombre: string;
    nivel: number;
    habilidades: string[];

    constructor(nombre: string, nivel: number, habilidades: string[]) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.habilidades = habilidades;
    }

    mostrarHabilidades(): void {
        console.log(`${this.nombre} tiene las siguientes habilidades: ${this.habilidades.join(', ')}`);
    }

    evolucionar(): void {
        console.log(`${this.nombre} ha evolucionado!`);
    }

    atacar(): void {
        console.log(`${this.nombre} ataca con una habilidad básica.`);
    }
}