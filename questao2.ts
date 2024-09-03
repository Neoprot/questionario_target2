function countAInString(input: string): number {
    let count = 0;
    for (let char of input) {
        if (char.toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

const texto = "Abracadabra";
const quantidade = countAInString(texto);
console.log(`A letra 'a' aparece ${quantidade} vezes na string "${texto}".`);
