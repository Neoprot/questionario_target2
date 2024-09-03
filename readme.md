# questionário

### 1) Programa para verificar se um número pertence à sequência de Fibonacci

```typescript
function isFibonacci(num: number): boolean {
  let a = 0,
    b = 1;
  if (num === 0 || num === 1) return true;

  while (b < num) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b === num;
}

// Exemplo de uso:
const numero = 13;
const pertence = isFibonacci(numero);
console.log(
  `O número ${numero} ${
    pertence ? "pertence" : "não pertence"
  } à sequência de Fibonacci.`
);
```

### 2) Programa para verificar a existência da letra 'a' (maiúscula ou minúscula) em uma string e contar a quantidade de ocorrências

```typescript
function countAInString(input: string): number {
  let count = 0;
  for (let char of input) {
    if (char.toLowerCase() === "a") {
      count++;
    }
  }
  return count;
}

// Exemplo de uso:
const texto = "Abracadabra";
const quantidade = countAInString(texto);
console.log(`A letra 'a' aparece ${quantidade} vezes na string "${texto}".`);
```

### 3) Cálculo do valor da variável SOMA

```typescript
let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);
```

**Resultado:** Após o processamento, o valor da variável `SOMA` será 78.

### 4) Descubra a lógica e complete o próximo elemento

a) **1, 3, 5, 7, \_\_\_**

- Lógica: Sequência de números ímpares crescentes.
- Próximo número: **9**

b) **2, 4, 8, 16, 32, 64, \_\_\_\_**

- Lógica: Cada número é o dobro do anterior.
- Próximo número: **128**

c) **0, 1, 4, 9, 16, 25, 36, \_\_\_\_**

- Lógica: Sequência dos quadrados dos números inteiros (0², 1², 2², 3², ...).
- Próximo número: **49** (7²)

d) **4, 16, 36, 64, \_\_\_\_**

- Lógica: Sequência dos quadrados dos números pares (2², 4², 6², 8², ...).
- Próximo número: **100** (10²)

e) **1, 1, 2, 3, 5, 8, \_\_\_\_**

- Lógica: Sequência de Fibonacci.
- Próximo número: **13**

f) **2, 10, 12, 16, 17, 18, 19, \_\_\_\_**

- Lógica: Números que começam com a Letra D.
- Próximo número: **200**

### 5) Desafio dos interruptores e lâmpadas

1. Ligo o primeiro interruptor e deixo ele ligado por alguns minutos. Após isso, desligo.
2. Ligo o segundo interruptor e vou até a sala das lâmpadas.
   - A lâmpada que estiver acesa é controlada pelo segundo interruptor.
   - A lâmpada que estiver apagada e quente é controlada pelo primeiro interruptor (pois ficou ligada e depois foi desligada).
   - A lâmpada que estiver apagada e fria é controlada pelo terceiro interruptor (que nunca foi ligado).
   - Nesse consigo 1 interruptor
3. Após isso ligo qualquer um dos interruptores e vou até um das outras sala
   - Se estiver ligada o interruptor que liguei controla a lâmpada daquela sala.
   - Se estiver desligada o interruptor que não liguei controla a lâmpada daquela sala.
   - Nesse consigo o 2 interruptor
4. sendo assim sobra apenas um interruptor para uma sala
