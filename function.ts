function add(n1:number, n2:number){
    return n1+n2 ;
}
 
function printResult(num: number): void{
    console.log("Result" +num);

}
 
function addHandler(n1: number, n2:number , cd:(num:number) =>void){
    const result = n1+n2;
    cd(result)

}

printResult(add(10, 5));


let combineValue:(a: number , b:number) => number;

combineValue=add;

console.log(combineValue(10,11))

addHandler(2, 3,(result)=>{
    console.log(result);
})