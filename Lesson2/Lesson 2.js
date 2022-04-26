// let array = [1,2,3,4,-8];


// //reduce method
// // let newReduce = array.reduce(( prevValue, currentValue, currentIndex, array)=>{
// //         console.log(`${currentIndex} to value: ${prevValue}`);

// //         return currentValue + prevValue;
// // })
// // console.log(newReduce);

// let [a,b,c,d,v] = array;
// console.log(a ,b,c,v);

// const clubs ={
//     name: "Real Madrid",
//     location: "Madrid",
//     categories: ["Spain", "Men", "Women"],
//     openingHours:{
//         thuesday: {
//             open: 12,
//             close: 22
//         },
//         friday: {
//             open: 12,
//             close: 22
//         },
//         satuday: {
//             open: 12,
//             close: 22
//         },
//     }
// }

// let {name, location, categories} = clubs;
// console.log(name + ',', location + ',',categories);
// let newCategories = [...clubs.categories, "Barcelona"];
// console.log(name + ',', location + ',',newCategories);


//nested xossasi

// let nested = [1,2,3, [4,5,6]];
// let [a,b,c, [d,e,f]] = nested;

// console.log(a,b,c, d,e,f);



// function array(numbers){
//         numbers.reduce((prevValue, currentValue)=>{
//             return prevValue+currentValue;
//         })
// }

// console.log(array([1,2,3,4,5]));

// let shoppingCart = [
//   {
//     product: 'phone',
//     qty: 1,
//     price: 500,
//   },
//   {
//     product: 'Screen Protector',
//     qty: 1,
//     price: 10,
//   },
//   {
//     product: 'Memory Card',
//     qty: 2,
//     price: 20,
//   },
// ];
// let total = shoppingCart.reduce(function (previousValue, currentValue) {
//   return previousValue + currentValue.qty * currentValue.price;
// }, 0);
// console.log(total);



/* Bozorlik qilish */

// let bozorlik = [
//     {
//         nomi: "Sabzi",
//         hajm: 1,
//         narxi: 2500
//     },
//     {
//         nomi: "Non",
//         hajm: 1,
//         narxi: 310000
//     },
//     {
//         nomi: "Yubileyniy",
//         hajm: 2,
//         narxi: 21000
//     }
// ]

// let summa = bozorlik.reduce((prevValue, currentValue)=>{
//     return prevValue + currentValue.hajm*currentValue.narxi;
// },0)
// console.log(summa);



// /* function decloration */
// console.log(array());
// function array(){
//     return "Salom"
// }


// /* function expression */
// class ConstructorFunction {
//     constructor(name) {
//         this.name = name;
//     }
// }
// let funksiya = new ConstructorFunction();
// console.log(funksiya);


// /* function callback */
// let callBack = ()=>{
//     return "Assalomu alaykum";
// }
// console.log(callBack());