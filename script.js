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

    // const Array=[1,2,3,4,5,]
    // const res = Array.map((el)=>{
    //     return el*2;
    // })
    // console.log(res);

//     const arr=[1,2,3,4,5,6,]
//     const res=arr.filter((el)=>{
// return el%2==0;
//     })
//     console.log(res);

// const arr=[10,20,'j',30,'A','V','A']
// const res= arr.filter((el)=>{
//     return typeof el === 'string';
// })
// console.log(res);

// const arr=[10,false,1.2,-0.7,null,'',undefined,'hello',true]

// const res=arr.filter((el)=>{
//     return Boolean(el) &&  (typeof el ==='number' || typeof el ==='string' || typeof el ==='boolean');
// })
// console.log(res);

// const firstname="manish";
// const lastname="basnet";
// const fullname =`${firstname} ${lastname}`;
// console.log(fullname.toUpperCase());
// console.log(fullname.toLowerCase());
// console.log(fullname.substring(0,5));
// console.log(fullname.split(""));

// const countwords=(str)=>{
//     return str.split(" ").length;
// }
// console.log(countwords("the quick brown fox"));

// let person={
//     name:"manish",
//     Age: 25,
//     isstudent: true
// };
// const variable="age";
// console.log(person.name);
// console.log(person["Age"]);
// console.log(person[variable]);

// const person={name:"manish",age:25};
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let marks={
//     math:90,
//     science:80,
//     english:70
// }
// for(let subject in marks){
//     console.log(`${subject}=>${marks[subject]}`);
// }
//  const entries=Object.entries(marks);
//  for(let [subject,score] of entries){
//   console.log(`${subject}=>${score}`);
//  }


// let students =[
//     {name:"manish",age:20,grade:13},
//     {name:"ram",age:22,grade:12},
//     {name:"shyam",age:19,grade:11},
//     {name:"hari",age:21,grade:14},
// ]

// students.filter(el=>{
//     return el.grade>8;
// }).forEach(el=>{
//     console.log(el.name);
// })


// // DOM Manipulation

// // Accessing DOM element
// const headingElement = document.getElementById('heading');
// console.log(headingElement);

// // Initial changes
// headingElement.innerHTML = "No heading";
// headingElement.style.color = 'red';
// headingElement.style.border = '1px solid black';
// headingElement.className = "new-class";

// const btnElement = document.getElementById('btn');

// // Event Listener
// btnElement.addEventListener('click', () => {
//     headingElement.innerHTML = "Heading changed";
//     headingElement.style.color = 'blue';
//     headingElement.style.border = '2px solid green';
// });


// const nameInput = document.getElementById('name-input')
// const passwordInput = document.getElementById('password')
// const errorEl = document.getElementById('error')
// const submitBtn = document.getElementById('submit-btn')

// submitBtn.addEventListener('click', (event) => {
//     event.preventDefault()
//     errorEl.innerHTML = ""

//     console.log(nameInput.value, passwordInput.value)

//     if (nameInput.value.length < 3) {
//         errorEl.innerHTML = "Name must be at least 3 letters"
//     } 
//     else if (passwordInput.value.length < 6) {
//         errorEl.innerHTML = "Password must be at least 6 characters"
//     } 
//     else {
//         errorEl.innerHTML = ""
//     }
// })


// import {add,NUM} from './math.js'
// console.log(add(10,20))
// console.log('NUM',NUM)
// console.log(NUM)

// let a = 10;
// const checkEven = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num % 2 === 0) {
//             resolve("even");
//         } else {
//             reject("odd");
//         }
//     });
// };
// const checkLessThan10 = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num < 10) {
//             resolve("less than 10");
//         } else {
//             reject("greater than 10");
//         }
//     });
// };
// checkEven(a)
//     .then((res) => {
//         console.log("result:", res);
//         return checkLessThan10(a);
//     })
//     .then((res) => {
//         console.log("result:", res);
//     })
//     .catch((err) => {
//         console.log("error:", err);
//     });




// // ✔ Use both Promises
// const p1 = checkEven();

// p1.then((res) => {
//     console.log("result from checkEven:", res);
// })
// .catch((err) => {
//     console.log("error from checkEven:", err);
// });

// // ✔ Now use second Promise
// checkLessThan10()
//     .then((res) => console.log("checkLessThan10:", res))
//     .catch((err) => console.log("checkLessThan10:", err));

// async / await 
// const checkConditions = async()=>{
//     let a= 10;
//       console.log('starting ...');
//     try{

    
//     const res = await checkEven(a)
//     console.log("result",res);
   
//     }catch (err){
//         console.log("Error",err)
//     }
//     try{
//     const res2 = await checkLessThan10(a)
//     console.log("result2", res2)
//     }catch(err){
//         console.log("Error",err)
//     }
// };
// checkConditions()


// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(res => {
//       console.log(res);
//       return res.json();
//   })
//   .then(json => {
//       console.log(json);
//   })
//   .catch(err => {
//       console.log('Error:', err);
//   });
let currentUser = 1;

const fetchData = async () => {
    document.getElementById('details').innerHTML =
        '<div class="text-center text-gray-600">Loading user...</div>';

    document.getElementById('user-id').textContent = `User: ${currentUser}`;

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${currentUser}`);
        const json = await res.json();

        console.log(json);

        document.getElementById('details').innerHTML = `
            <div class="space-y-2 bg-white shadow p-5 rounded">
                <div><strong>Name:</strong> ${json.name}</div>
                <div><strong>Email:</strong> ${json.email}</div>
                <div><strong>Phone:</strong> ${json.phone}</div>
                <div><strong>Website:</strong> ${json.website}</div>
                <div><strong>Company:</strong> ${json.company.name}</div>
                <div><strong>Address:</strong> 
                    ${json.address.street}, ${json.address.suite}, ${json.address.city}
                </div>
            </div>
        `;
    } catch (err) {
        console.log('error:', err);
        document.getElementById('details').innerHTML =
            '<div class="text-red-500 text-center">Failed to load data</div>';
    }
};
document.getElementById("next").addEventListener("click", () => {
    if (currentUser < 10) {
        currentUser++;
        fetchData();
    }
});
document.getElementById("prev").addEventListener("click", () => {
    if (currentUser > 1) {
        currentUser--;
        fetchData();
    }
});

// Load first user
fetchData();
