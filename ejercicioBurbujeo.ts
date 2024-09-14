import * as rls from 'readline-sync'

function generarArray(length: number): number[] {
    let array: number[] = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log("Array original: ", array);
    return array;
}

function ordenarBurbuja(array: number[]): void {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log("Array ordenado de mayor a menor: ", array);
}

function programa() {
    let number = rls.questionInt("ingrese un numero")
    let array = generarArray(number);
    ordenarBurbuja(array);
}

programa();