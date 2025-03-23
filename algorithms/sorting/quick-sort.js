/**
 *  é um dos algoritmos de ordenação mais eficientes, baseado no
 * paradigma "Divide and Conquer" (Dividir e Conquistar).
 * Ele funciona escolhendo um pivô, reorganizando os elementos ao
 *  redor desse pivô e recursivamente ordenando as partes menores.
 *
 * - Escolha um pivô: Pode ser o primeiro, último, um aleatório ou o elemento do meio.
 * - Particionamento: Todos os elementos menores que o pivô vão para a esquerda e os maiores para a direita.
 * - Recursão: O processo se repete para as partes esquerda e direita até que a lista esteja ordenada.
 *
 * Complexidade
 * - Pior caso: O(n²) (quando o pivô escolhido é sempre o menor ou maior elemento)
 * - Melhor caso: O(n log n)
 * - Caso médio: O(n log n)
 * - Espaço extra necessário: O(log n) devido às chamadas recursivas
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr; // Caso base: array já ordenado ou com um único elemento

  const pivot = arr[arr.length - 1]; // Escolhe o último elemento como pivô
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elementos menores vão para a esquerda
    } else {
      right.push(arr[i]); // Elementos maiores vão para a direita
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Exemplo de uso:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(arr)); // [3, 9, 10, 27, 38, 43, 82]
