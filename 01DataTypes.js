//Bismillahir Rahmanir Rahim .
//In this program we will learn about Data type and its declaration .
//There is three way to declare variable in JS . 
//let , const and var . let is vary popular and modern way , var is older mathod & const for constant .
//So let's go .

//1
let myName = "Abdullah Al Masum .";                             //Its a string Data Type .
console.log (myName);                                           //It will print the string . Like print() .
//2
const pi = 3.1416 ;                                             //Its a Number Data with Constant value .
console.log (pi);                                               //It will print the Number .
//3
var Boolean1 = true ;                                           //Its a Boolean Data Type .
let Boolean2 = false;
console.log (Boolean1,Boolean2);                                //It will print the data .
//4
let varnull;                                                    //This variable does not contain any data .
console.log (varnull);                                          //It will print undefined .
//5
let Null = null ;                                               //Its a null variable .
console.log (Null);                                             //It will print null .
//6
let male = {
    Name : "Muhammad",                                          //Its an objective data .
    Age  : 14 
};
let female={
    Name : "Aysha",                                             //An Object can store many data .
    Age  : 12
}
console.log (male,female);                                      //It will print all data about male & female .
//7
let symbol1 = Symbol("@@");                                     //Its an unique symbol value .
let symbol2 = Symbol("##");                                     //Realy i don't understand this .
console.log (symbol1==symbol2);                                 //It will print false .
console.log (symbol1,symbol2);                                  //It will print the information .