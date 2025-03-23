/**
 * Ele funciona comparando elementos adjacentes e
 * trocando-os de posição caso estejam fora de ordem.
 * Esse processo se repete até que a lista esteja ordenada.
 *
 * 1. Percorre a lista do início ao fim.
 * 2. Compara cada par de elementos adjacentes.
 * 3. Se o primeiro for maior que o segundo, os troca de posição.
 * 4. Após uma passagem completa pela lista, o maior elemento estará na última posição.
 * 5. Repete o processo para os elementos restantes, excluindo os já ordenados.
 */

function bubbleSort() {
  const arr = [5, 3, 8, 1, 2, 7];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    console.log(`Passagem ${i + 1}:`);

    for (let j = 0; j < n - 1 - i; j++) {
      console.log(`  Comparando ${arr[j]} e ${arr[j + 1]}`);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log(`  ➝ Trocou: ${arr}`);
      }
    }
  }

  console.log(arr);
  return arr;
}

bubbleSort();

/**
 * Se uma passagem completa for feita sem trocas, significa que o
 * array já está ordenado, então podemos parar mais cedo.
 *
 * Essa versão reduz o número de comparações quando o array já está ordenado,
 * aproximando-se de O(n) no melhor caso. 🚀
 */
function bubbleSortOptimized() {
  const array = [5, 3, 8, 1, 2, 7];
  let n = array.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
    n--; // Reduz a quantidade de elementos a serem comparados
  } while (swapped);

  console.log(array);
}

bubbleSortOptimized();

function bubbleSortWrong() {
  const array = [5, 3, 8, 1, 2];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
  }

  console.log(array);
}

bubbleSortWrong();
