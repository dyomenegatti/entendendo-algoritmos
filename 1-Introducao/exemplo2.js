// Cenário: Imagine que temos uma lista ordenada com os preços dos produtos disponíveis. Queremos verificar se um determinado preço está na lista e, se sim, retornar sua posição.

function binarySearchPrice(prices, id) {
  let left = 0;
  let right = prices.length -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if(prices[mid] === id) {
      return `Preço encontrado: R$ ${id},00 na posição ${mid}`;
    } else if(prices[mid] < id) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return `Preço ${id} não encontrado.`;
}


const prices = [1, 25, 38, 42, 54];
const id = 38;
const result = binarySearchPrice(prices, id);

console.log(result);