/*Obtén del 1 al 255: Escribe una función que devuelve un 
array con todos los números del 1 al 255.*/

function array_1_a_255() {
var array = [];
for (var x = 1; x <= 255 ; x++) {
    array.push(x);
}
return array
}

/*Consigue pares hasta 1000: Escribe una función que entregue la suma 
de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.*/

function numeros_pares_0_a_1000() {
var sum = 0;
    for (var x = 2; x <= 1000; x=x+2) {
    sum = sum + x;
    }
return sum;
}

/*Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los
 números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).*/

function numeros_impares_0_a_5000() {
    var sum = 0;
        for (var x = 0; x <= 5000; x=x+2) {
        sum += x;
        
    }
    return sum;
    }

/*Itera un array: Escribe una función que devuelva la suma de todos 
los valores dentro de un array (ej:  [1,2,5] retorna 8.
[-5,2,5,12] retorna 14).*/

function suma_array(y) {
var sum = 0;
for(var x = 0; x < y.length; x++){
sum += y[x];
}
return sum;
}

/*Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que 
devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).*/

function valor_max_array(x){
    var max = 0;
    for (var i=0; i<x.length; i ++){
       if( x[i] > max){
        max = x [i];}   
     }
     return max;
    }
   
/*Encuentra el promedio (avg): Dado un array con múltiples valores, escribe 
una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20]
el promedio es 7.2).*/

function valor_promedio_array(x){
    var suma = 0;
    var prom = 0;
    for (var i=0; i<x.length; i ++){
        suma += x[i];  
        prom = suma / x.length;
     }
     return prom;
    }

/*Array de impares: Escribe una función que devuelva un array de todos los números
impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.*/

function array_impares_1a_50() {
var array = [];
for (var x = 1; x <= 50 ; x+=2) {
    
    array.push(x);
}
return array
}

/*Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve
los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función
devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7).*/

function numero_mayores_que(arr, y) {
        var array = [];
       for( var x = 0; x < arr.length; x++){
        if( arr[x] > y){
           array.push(arr[x]);     
        }
    }
  return array; 
}

/*Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace
cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).*/

function cuadrados_de_array(arr) {
    var array= [];
    var cuadrado =0;
    for(varx=0; x < arr.length; x++){
        cuadrado = arr[x] * arr[x]
 array.push(cuadrado);      
}
return array;
}

/*Negativos: Dado un array con múltiples valores, escribe una función que reemplace
cualquier número negativo dentro del array por 0. Cuando el programa esté listo,
el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en
[1,5,10,0]).*/

function reemplazo_negativos (arr){
for(var x=0; x < arr.length; x ++){
    if( arr[x] < 0){
        arr[x] = 0;
    }
}
return arr;
}

/*Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva
un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio 
(avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).*/

function max_min_prome(arr){
    var sum = 0;
    var max = 0;
    var min = arr[0];
    var promedio = 0;
    var nuevoarreglo = [];
for(var x = 0; x < arr.length; x++){
    if( arr[x] > max){
        max = arr[x];
    }
   
    if( arr[x] < min){
        min = arr [x];
    }
    
    sum += arr[x];
    promedio = sum / arr.length;
    ; 
}
nuevoarreglo.push(max); 
nuevoarreglo.push(min);
nuevoarreglo.push(promedio)
return nuevoarreglo
}

/*Intercambia Valores: Escribe una función que intercambie el primer y el último
valor de cualquier array. La extensión mínima predeterminada del array es 2 
(ej: [1,5,10,-2] será [-2,5,10,1]). */

function intercambio(arr){
for( var x = 0; x < (arr.length-1)/2; x++){
var temp = 0;
var y = arr.length-x-1;
temp = arr[x]
arr[x] = arr[y]; 
arr[y] = temp;
}
return arr;
}

/*De Número a String: Escribe una función que tome un array de números y reemplace
cualquier valor negativo por el string ‘Dojo’. Por ejemplo,
dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].*/

function reemplazo_por_string(arr){
for(var x = 0; x < arr.length-1; x++){
  
    if( arr[x] < 0) {
        arr[x] = 'Dojo';
    }
}
return arr;
}




