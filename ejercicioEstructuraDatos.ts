let arrNum: number[] = [4, 7, 9, 3, 45, 67, 23, 29, 78, 11, 16];

let maxNumber: number = numeroMasGrande(arrNum);


function numeroMasGrande(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function esPar(num: number): string {
    if (num % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

console.log("El número más grande es: " + maxNumber);

console.log("El número " + maxNumber + " es " + esPar(maxNumber));
