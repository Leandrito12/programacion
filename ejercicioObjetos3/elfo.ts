class Elfo extends Personaje {
    constructor(nombre: string, nivel: number) {
        super(nombre, nivel, ['Arquería', 'Magia de la naturaleza']);
    }

    evolucionar(): void {
        super.evolucionar();
        this.habilidades.push('Magia avanzada');
        console.log(`${this.nombre} ahora tiene nuevas habilidades: ${this.habilidades.join(', ')}`);
    }

    atacar(): void {
        console.log(`${this.nombre} dispara una flecha mágica.`);
    }
}