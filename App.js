const quickSort = (array) => {
    if(array.length <= 1){
        return array;

    } //Caso o array tenha apenas uma casa ou menos ele já está ordenado
    const pivo = array[Math.floor(array.length / 2)];  // seleciona o array do meio
    const left = [];                                   //elemento à esquerda  
    const right = [];                                   //Elemento à direita

    for (let i = 0; i < array.length; i++) {
        if (array[i] > pivo) {
            left.push(array[i]);
        } else if (array[i] > pivo) {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivo, ...quickSort(right)];
}


/*TESTE APLICAÇÃO*/
const array = [5, 8, 2, 1, 6, 3, 9, 4, 7];
const teste = quickSort(array);
console.log(teste)