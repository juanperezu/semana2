function multiplicar(x1,x2){
return x1*x2;
}
function restar(x1,x2){
   return x1-x2;
 }
 function sumar(x1,x2){
    return x1+x2;
  }

  function dividir1(x1,x2){
    if (x1==0 || x2==0){
      console.log('x1  y x2 <> 0');
    }
    return (x1/x2);
  }
  function dividir2(x1,x2){
    if (x1==0 || x2==0){
      console.log('x1  y x2 <> 0');
    }
    return (x1%x2);
  }
   
  exports.dividir1=dividir1;
  exports.dividir2=dividir2;
  exports.multiplicar=multiplicar;
  exports.sumar= sumar;
 /*Crear una funcion que permita evaluar siguiet expresión
 2x-5(YZ)+ 7Y-3Z
 */ 

/*
console.log(multiplicar(3,5));
console.log(dividir1(0,5));
console.log(dividir2(1,1));
console.log(dividir2(3,4));

*/