class Gnomo extends Personaje {
    constructor(nombre: string, nivel: number) {
        super(nombre, nivel, ['Ingeniería', 'Alquimia']);
    }

    evolucionar(): void {
        super.evolucionar();
        this.habilidades.push('Tecnología avanzada');
        console.log(`${this.nombre} ahora tiene nuevas habilidades: ${this.habilidades.join(', ')}`);
    }

    atacar(): void {
        console.log(`${this.nombre} lanza una bomba alquímica.`);
    }
}