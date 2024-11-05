// Função para encontrar o intervalo de índices em que um número aparece em um array ordenado. Se o número não aparecer, retorne [-1, -1]. 
// O objetivo é que, em um array com elementos repetidos, você retorne o índice da primeira e da última ocorrência do número alvo.

function findRangeInArray(sortedArray, target) {
  function findFirstOccurrence(array, target) {
      let left = 0;
      let right = array.length - 1;
      let firstIndex = -1; 

      while (left <= right) {
          let mid = Math.floor((left + right) / 2);

          if (array[mid] === target) {
              firstIndex = mid; 
              right = mid - 1; 
          } else if (array[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1; 
          }
      }

      return firstIndex;
  }

  function findLastOccurrence(array, target) {
      let left = 0;
      let right = array.length - 1;
      let lastIndex = -1;

      while (left <= right) {
          let mid = Math.floor((left + right) / 2);

          if (array[mid] === target) {
              lastIndex = mid; 
              left = mid + 1; 
          } else if (array[mid] < target) {
              left = mid + 1; 
          } else {
              right = mid - 1;
          }
      }

      return lastIndex;
  }

  const firstIndex = findFirstOccurrence(sortedArray, target);
  const lastIndex = findLastOccurrence(sortedArray, target);

  if (firstIndex === -1 || lastIndex === -1) {
      return [-1, -1];
  }

  return [firstIndex, lastIndex];
}

const array = [1, 2, 2, 2, 3, 4, 5];
const target = 2;
console.log(findRangeInArray(array, target));
