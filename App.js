const quickSort = (array) => {
    array.length <= 1 ? array : 0  //Caso o array tenha apenas uma casa ou menos ele já está ordenado

    const array = [];
    const pivo = array[Math.floor(array.length / 2)];  // seleciona o array do meio
    const left = [];                                   //elemento à esquerda  
    const right = [];                                   //Elemento à direita

    for (let i = 0; i < array.length; i++) {

        array[i] > pivo ? left.push(array[i]) : 0;

        array[i] < pivo ? right.push(array[i]) : 0;
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}


                                                     /*TESTE APLICAÇÃO*/