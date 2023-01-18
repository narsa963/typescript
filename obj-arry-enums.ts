type Combinable=number |string ;
type Conversionable= 'as-number' | 'as-text';



function combine(num1: Combinable, num2:Combinable , resultConversion:Conversionable){
   let result;
   if(typeof num1=== 'number' && typeof num2==='number' || resultConversion=== 'as-number' ){
     result = +num1 +  +num2 ;
   }else{
    result=  num1.toString() +num2.toString();
   }
   return result;
}
const combineAge=combine(30,20, 'as-number');
console.log(combineAge);

const combineStringAges=combine('30','20',  'as-number');
console.log(combineStringAges);

const combineName=combine('adwith', 'nara', 'as-text');
console.log(combineName);