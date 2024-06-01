--1
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
--2
function esPalindromo(cadena) {
    // Eliminar espacios y convertir a minúsculas
    cadena = cadena.replace(/\s+/g, '').toLowerCase();
    
    // Comparar la cadena original con su reverso
    let reverso = cadena.split('').reverse().join('');
    return cadena === reverso;
}

// Ejemplo de uso
let cadena1 = "anilina";
let cadena2 = "A man a plan a canal Panama";

console.log(esPalindromo(cadena1)); // true
console.log(esPalindromo(cadena2)); // true

--3
function esPrimo(numero) {
    // 1 y números negativos no son primos
    if (numero <= 1) {
        return false;
    }

    // Iterar desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Si el número es divisible por algún otro número, no es primo
        if (numero % i === 0) {
            return false;
        }
    }

    // Si no se encontró ningún divisor, el número es primo
    return true;
}

// Ejemplo de uso
console.log(esPrimo(7)); // true
console.log(esPrimo(10)); // false
console.log(esPrimo(23)); // true

--4

function buscarElemento(arreglo, elemento) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === elemento) {
            return i; // Retorna el índice si encuentra el elemento
        }
    }
    return -1; // Retorna -1 si no encuentra el elemento
}

// Ejemplo de uso
let arreglo = [2, 4, 6, 8, 10];
console.log(buscarElemento(arreglo, 6)); // 2
console.log(buscarElemento(arreglo, 5)); // -1