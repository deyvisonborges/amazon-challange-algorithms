/**
 * É um algoritmo eficiente para encontrar um elemento em um array ordenado.
 * Ele funciona dividindo repetidamente o array ao meio até encontrar o
 * elemento desejado ou determinar que ele não está presente
 *
 * Complexidade:
 * Melhor caso:  O(1) → O elemento está no meio na primeira tentativa.
 * Pior caso e caso médio: O(logn) → O número de elementos é reduzido pela metade a cada iteração.
 *
 * - A busca binária exige que a lista esteja ordenada em ordem crescente ou decrescente.
 * - O algoritmo começa encontrando o elemento do meio da lista.
 * - O elemento do meio é comparado com o elemento de busca.
 * - Se o elemento do meio for igual ao elemento de busca, a pesquisa termina.
 * - Se o elemento de busca for menor que o elemento do meio, a pesquisa continua na metade inferior da lista.
 * - Se o elemento de busca for maior que o elemento do meio, a pesquisa continua na metade superior da lista.
 */

function binarySearch() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target = 5;

  for (let i = 0; i < arr.length; i++) {
    const mid = Math.floor(arr.length / 2);

    console.log(mid);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      arr = arr.slice(mid + 1);
    } else {
      arr = arr.slice(0, mid);
    }
  }

  console.log(arr);
}

binarySearch();
