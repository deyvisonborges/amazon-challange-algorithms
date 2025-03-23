// é um algoritmo de ordenação que divide o array em duas metades, ordena cada uma e depois as combina.
// O merge sort é um exemplo de algoritmo de divisão e conquista.

/**
 * - divede o array em duas metades
 * - Cada metade é ordenada recursivamente.
 * - As metades ordenadas são mescladas (merge) de forma ordenada.
 *
 * Complexidade:
 * - Pior caso: O(n log n)
 * - Melhor caso: O(n log n)
 * - Caso médio: O(n log n)
 * - Espaço extra necessário: O(n), pois usamos um array auxiliar para mesclar os valores.
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Caso base: arrays unitários já estão ordenados

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Ordena a metade esquerda
  const right = mergeSort(arr.slice(mid)); // Ordena a metade direita

  return merge(left, right); // Combina as metades ordenadas
}

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Adiciona os elementos restantes de left ou right (se houver)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Exemplo de uso:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // [3, 9, 10, 27, 38, 43, 82]
