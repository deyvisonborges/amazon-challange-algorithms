/**
 * é um algoritmo de ordenação baseado na distribuição dos
 * elementos em diferentes "baldes" (buckets). Ele é especialmente
 * eficiente para conjuntos de dados distribuídos
 * uniformemente dentro de um intervalo conhecido.
 *
 * -Criar baldes: Criamos n baldes (arrays) para agrupar os elementos.
 * - Distribuir os elementos: Cada elemento do array original é colocado em um balde apropriado.
 * - Ordenar cada balde: Cada balde é ordenado individualmente (geralmente usando um algoritmo interno, como Insertion Sort ou Quick Sort).
 * - Concatenar os baldes ordenados: No final, unimos os baldes para formar o array ordenado.
 *
 * Complexidade
 * - Melhor caso: O(n + k) → quando os elementos são distribuídos uniformemente e o algoritmo interno de ordenação é eficiente.
 * - Pior caso: O(n²) → se todos os elementos caírem no mesmo balde e precisarmos de um algoritmo O(n²) para ordenar.
 * - Espaço extra necessário: O(n + k), pois precisamos de memória adicional para os baldes.
 */

function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) return arr; // Se o array estiver vazio, já está ordenado

  // Encontrar os valores mínimo e máximo no array
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);

  // Criar baldes vazios
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = new Array(bucketCount).fill().map(() => []);

  // Distribuir elementos nos baldes
  for (let num of arr) {
    let index = Math.floor((num - minValue) / bucketSize);
    buckets[index].push(num);
  }

  // Ordenar cada balde e concatenar os resultados
  return buckets.reduce((sortedArray, bucket) => {
    return sortedArray.concat(bucket.sort((a, b) => a - b)); // Aqui usamos sort(), mas podemos trocar por Insertion Sort
  }, []);
}

// Exemplo de uso:
const arr = [29, 25, 3, 49, 9, 37, 21, 43];
console.log(bucketSort(arr)); // [3, 9, 21, 25, 29, 37, 43, 49]
