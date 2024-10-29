class Mago extends Personaje {
    constructor(nombre: string, nivel: number) {
        super(nombre, nivel, ['Hechicería', 'Conjuración']);
    }

    evolucionar(): void {
        super.evolucionar();
        this.habilidades.push('Hechicería suprema');
        console.log(`${this.nombre} ahora tiene nuevas habilidades: ${this.habilidades.join(', ')}`);
    }

    atacar(): void {
        console.log(`${this.nombre} lanza un hechizo de fuego.`);
    }
}