/* tilda bilan ishlash */
// let firstName = "Sardorbek";
// let lastName = "Omonov";
// let age = 27;
// let result = `Mening ismim ${firstName}, familiyam ${lastName}. Men ${age} yoshdaman`;
// console.log(result);
// let result2 = "Mening ismim " + firstName + ", " + "familiyam " + lastName + ". Men " + age + " yoshdaman";
// console.log(result2);


/* if, else va ternary operatorlari */
// let age = 15;
// let result = 18-age;
// // if (age>18) {
// //     console.log("Men guvohnoma olganman");
// // }
// // else console.log(`Men guvohnoma olishimga hali ${result} yil bor`);

// let natija = age>18?"Men guvohnoma olganman":`Men guvohnoma olishimga hali ${result} yil bor`;
// console.log(natija);


/* Switch, case operators */

// let day = "Monday";
// switch (day) {
//     case 'Monday':
//         console.log('Bugun bemorlar ko\'p bo\'lishi mumkin');
//         break;
//     case 'Tuesday':
//         console.log("Bugun yangi bemorlarni davolashni boshlaymiz");
//         break;
//     case 'Wethnesday':
//         console.log("Bugun Navro\'z dam oladi");
//         break;
//     default:
//         console.log("Boshqa kunlar kiritilmagan");
// }


/* Data transforming methods */

// let array = [1,2,3,4,5,8, -5, -7];

/* Map method */

// let newMapArray = array.map((move, index) => {
//     if(move>0){
//         console.log(`${index} son chiqqanda ${move} ta sovg'a beriladi`);
//     }
//     else console.log(`${index} son chiqqanda ${move} ta sovg'a qaytarib olinadi`);
// });

/* Filter method */
// let newFilterArray = array.filter(plus => plus>0);
// console.log(newFilterArray);


// let negativeNumbers = array.filter(negative => negative<=0);
// console.log(negativeNumbers);

// let positiveNumbers = array.filter(positive => positive>=0);
// console.log(positiveNumbers);