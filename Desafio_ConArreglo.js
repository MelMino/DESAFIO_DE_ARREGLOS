/*Siempre hambriento
Escribe una función a la que se le asigne un arreglo, 
y cada vez que el valor sea "comida" debería mostrar 
"delicioso"en la consola. Si "comida" no estaba presente 
en el arreglo, que la consola registre "Tengo hambre" una vez. */

function siempreHambriento(arr) {
    var comidaEncontrada = false;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === "comida"){
            console.log("delicioso");
            comidaEncontrada = true;
        }
    }
    if(!comidaEncontrada){
        console.log("Tengo hambre");
    }
}

/*Filtro paso alto
Dado un arreglo y un valor cutoff, devuelve un nuevo 
arreglo que contenga solo los valores mayores a cutoff.*/ 

function highPass(arr,cutoff){
    var filteredAdd = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredAdd.push(arr[i]);
        }
    }
    return filteredAdd;
}

/* Mejor que el promedio
Dado un arreglo de números, devuelve un recuento de 
cuántos de los números son mayores que el promedio.*/

function betterThanAverage(arr) {
    var sum = 0;
    for(var i= 0; i <arr.length;i++){
        sum += arr[i];
    }
    var average = sum / arr.length;

    var count = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > average){
            count++;
        }
    }
    return count;
}

/*Arreglo invertido
Escribe una función que invierta los valores de un arreglo y los devuelva.*/ 
function reverse(arr) {
    var reverseArr = [];
    for(var i=arr.length -1; i >=0; i--){
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

/*Arreglo de Fibonacci
Los números de Fibonacci se han estudiado durante años y 
aparecen a menudo en la naturaleza. Escribe una función que 
devuelva un arreglo de números de Fibonacci hasta una longitud 
dada n. Los números de Fibonacci se calculan sumando los dos últimos 
valores de la secuencia. Entonces, si el cuarto valor es 2 y el quinto 
valor es 3 entonces el siguiente valor en la secuencia es 5.*/ 

function fibonacciArray(n) {
    var arr = [0,1];
    for(var i = 2; i < n; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr;
}
