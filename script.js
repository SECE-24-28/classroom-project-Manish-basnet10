/* way to decclare function
1.function keyword
2.using arrow function*/
// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2))
// //anoymous function
// var sub=function(a,b){
//     return a-b;
// }
// //arrow function 
// console.log(sub(5,3));
//  var mul=(a,b)=>{
//     return a*b;
//  }
//  console.log(mul(2,3));

//  var sum= a =>a+10;
//     console.log(sum(5));

//     for(let i=2;i<=20;i+=2){
//         console.log("number is",i);
//     }
//     let j=2;
//     while(j<=20){
//         console.log(j);
//         j+=2;
//      }
//     var arr =["manish",2,"basnet"];
//     console.log(arr.length);
//     arr.push(5);
//     arr.pop();
//     arr.reverse();
//     arr.unshift("a");
//     console.log(arr);
    

//    for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
//    }

    // var arr1= new Array("apple","banana","mango");
    // for (let i=0;i<arr1.length;i++){
    //     console.log(arr1[i]);
    //     arr.push("orange");
    // }

    // function a(arg1 ,arg2, arg3 ){
    //     console.log('inside function a',arg2);
    //     arg1(arg3);
    // } function b(arg) {
    //     console.log('inside function b',arg);
    // }
    // a(b,10,20)

    // function multiply(factor){
    //     return function(x){
    //         return x*factor;
    //     };
    // }
    // const mulby3=multiply(3);
    // const mulby4=multiply(4);

    // console.log(mulby3(20));
    // console.log(mulby4(30));

    // const arr=[1,2,3,4,5,]
    // arr.forEach((el)=>{
    //     console.log(el*2);
    // })

    // const arr=[1,2,3,4,5,]
    // const newArr=[]
    // arr.forEach((el)=>{
    //     newArr.push(el*2);
    // })
    // console.log(newArr);
    const Array=[1,2,3,4,5,]
    const res = Array.map((el)=>{
        return el*2;
    })
    console.log(res);