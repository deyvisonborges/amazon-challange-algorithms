/**
 * O Counting Sort é um algoritmo de ordenação eficiente que
 * funciona contando o número de ocorrências de cada elemento em uma lista.
 * Ele é especialmente útil para ordenar listas de números inteiros em um intervalo conhecido.
 *
 * Contagem: Cria um array de contagem (count) com tamanho igual ao intervalo dos elementos da lista. Percorre a lista original e incrementa a contagem de cada elemento no array count.
 * Soma Cumulativa: Modifica o array count para armazenar a soma cumulativa das contagens. Isso significa que cada elemento do array count representará a posição final do elemento correspondente na lista ordenada.
 * Ordenação: Cria um array de saída (output) com o mesmo tamanho da lista original. Percorre a lista original de trás para frente e coloca cada elemento na posição correta no array output, usando o array count para determinar a posição.
 * Substituição: Copia os elementos do array output para a lista original, resultando em uma lista ordenada.
 */

function countingSort(lista) {
  if (lista.length <= 1) {
    return lista; // Lista já ordenada ou vazia
  }

  const max = Math.max(...lista);
  const min = Math.min(...lista);
  const range = max - min + 1;

  const count = Array(range).fill(0);
  const output = Array(lista.length).fill(0);

  // Contagem
  for (let i = 0; i < lista.length; i++) {
    count[lista[i] - min]++;
  }

  // Soma Cumulativa
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  // Ordenação
  for (let i = lista.length - 1; i >= 0; i--) {
    output[count[lista[i] - min] - 1] = lista[i];
    count[lista[i] - min]--;
  }

  // Substituição
  for (let i = 0; i < lista.length; i++) {
    lista[i] = output[i];
  }

  return lista;
}

// Exemplo de uso
const listaDesordenada = [4, 2, 2, 8, 3, 3, 1];
const listaOrdenada = countingSort(listaDesordenada);

console.log(listaOrdenada); // [1, 2, 2, 3, 3, 4, 8]
