// reciba un arreglo de números y retorne la suma de todos los elementos

function sum(num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result = result + num[i]
  }
  return result;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

//retorne el número máximo, Si el arreglo está vacío debe retornar

function max(arreglo){
  let result = 0;
  let primera = arreglo [0];
  for (let i= 0; i < arreglo.length; i++){
    if (primera < arreglo[i]){
      primera = arreglo[i];
    }
  }
    return primera
}



console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined



// escribe la función maxIndex acá

function maxIndex(arreglo){
  let primer = arreglo[0];
  for (let i = 0; i < arreglo.length; i++){
    if (primer < arreglo[i]){
      primer = arreglo[i];
    }
   
  }
    return primer
}

function maxIndex(arreglo) {
  if (arreglo.length === 0) {
    return -1;
  }

  let max = arreglo[0];
  let maxIndex = 0;
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > max) {
      max = arreglo[i];
      maxIndex = i;
    }
  }

  if (max === 0) {
    return -1;
  }
   return maxIndex;
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1




