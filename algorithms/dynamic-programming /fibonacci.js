/**
 * A sequência de Fibonacci é uma série matemática onde cada número é a soma dos dois anteriores.
 *
 * Recursivo Simples	O(2^n) (exponencial)
 * Recursão com Memoização	O(n)
 * Iterativo	O(n)
 * Fórmula de Binet	O(1)
 *
//  * F(n)=F(n−1)+F(n−2)
 */

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8
