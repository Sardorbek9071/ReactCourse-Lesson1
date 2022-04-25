let kuchukYoshi = [5, 2, 4, 1, 15, 8 ,3];
// Test Data2: [16, 6, 10, 5, 6,1 ,4]

// Funksiya yarating yuqorida berilgan arraylarni qabul qilsin. va quyidagi amallarni bajaaring, 
// 1. Kuchkni yoshini odamlar yoshiga qarab hisoblovchi algoritm yozing. Agar kuchuk yoshi <= 2 years old bo'lsa,
// humanAge = 2* dogAge. Agar kuchuk yoshi > 2 bo'lsa humanAge = 16 + dogAge * 4.
// 2. Yuqorida amal bajarilgandan so'ng 18 yoshli odamdan kichik bo'lgan kuchuklarni concole ga chiqaring.


let humanAge = [];
humanAge = kuchukYoshi.map(age =>{
    if (age<=2) {
       return 2*age;
    }
    else return 16+age*4;
});

let yangiKuchukYoshi = kuchukYoshi.filter(age => {
    if (age<18) {
        return age;
    }
})
console.log(yangiKuchukYoshi);