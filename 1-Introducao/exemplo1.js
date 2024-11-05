function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length -1;

  while(left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Verifica se o elemento do meio é o alvo
    if (sortedArray[mid] === target) {
      return mid; // Retorna o índice onde o valor foi encontrado
    }

    // Se o valor do meio é menor que o alvo, ignora a metade esquerda
    if(sortedArray[mid] < target) {
      left = mid;
    }

    // Se o valor do meio é maior que o alvo, ignora a metade da direita
    else {
      right = mid - 1;
    }
  }

  return -1; // Retorna -1 se o valor não foi encontrado
}


// Exemplos de uso
const array = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const result = binarySearch(array, target);

console.log(result);