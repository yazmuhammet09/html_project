// const day = parseInt(prompt('write the day: '));
// switch (day){
//     case 1:{
//         console.log('monday')
//         break
//     }
//     case 2:{
//         console.log('tuesday')
//         break
//     }
//     case 3:{
//         console.log('wednesday')
//     }
//     case 4:{
//         console.log('thursday')
//         break
//     }
//     case 5:{
//         console.log('friday')
//         break
//     }
//     case 6:{
//         console.log('saturday')
//         break
//     }
//     case 7:{
//         console.log('sunday')
//         break
//     }
// }

// let i = 0

// for( i = 0;i<2;i++){
//     console.log('for index = ${i}')
// }
// i = 0;
// while(i<3){
//     console.log('while i='+ 1)
//     i++;
// }

// do{
//     console.log('do while i=', 1)
//}while(i<1)


// let sum = 0
// for(let num =1;num<=5;num++){
//     console.log(`sum=${sum} num=${num}`)
//     sum +=num;
//     console.log(sum)
// }

// console.log('sum', sum)


// for(let i=1;i<=100;i++){
//     if(i%2){
//         console.log('nechetnoe i=', i)
//     continue;
//     }
// }


// function sayHello(imya){
//     if(imya)
//     console.log('hello undefiend')
// else{
//     console.log('hello '+ imya)
// }
// }
// sayHello()

// function kwadratnoeUravneniye(num1){

//     return num1 * num1;
// }

// console.log(kwadratnoeUravneniye(10))




// const arr = [12,34,22,64,73,25,75];

// const sum = arr.reduce((acc, curr) => acc + curr, 0);

// console.log(sum);

// const arr = [-12,34,22,64,73,25,75];
// const minEl = Math.min(...arr);

// console.log(`minimum:${minEl}`)





// home work ............................

// const numbers = [5, 5, 4, 4, 6];

// const uniqueNum = numbers.filter(
//     (item, index) => numbers.indexOf(item) == index
// );

// console.log(uniqueNum);


// function removeDublicates(arr){
//     return[...new Set(arr)];
// }

// console.log(removeDublicates([1,2,3,3,4,4,5,5]));


// function reverseArray(arr){
//     return arr.reverse();
// }

// console.log(reverseArray([1, 2, 3, 4, 5, 6]))


// function filterEvenNumbers(arr){
//     return arr.filter(num => num % 2 === 0);
// }

// console.log(filterEvenNumbers([1,2,3,4,5,6]))

// function sortArray(arr){
//     return arr.slice().sort((a, b) => a - b);
// }

// console.log(sortArray([5, 2, 8, 1, 9]))


// function findIndex(arr, value){
//     return arr.indexOf(value);
// }

// console.log(findIndex([10, 20, 30, 40]));
// console.log(findIndex([10, 20, 30, 40], 50));

// function mergeArr(arr1, arr2){
//     return [...new Set([...arr1, ...arr2])];
// }

// console.log(mergeArr([1, 2, 3],[4, 5, 6, 7, 8]));

// const obj = {
//     name : 'Hello world',
//     age : 25,
//     show(){
//         console.log(this.name = 'ajds' ,this.age = 34)
//     }
// }

// obj.show();


// const products = [{
//     name : 'car',
//     price : 49,
// },{
//     name : 'bus',
//     price : 30,
// },{
//     name : 'bike',
//     price : 0,
// }]

// function totalPrice(){
//     return products.reduce((a,  b) => a + b.price, 0);
// }

// console.log(`total price = ${totalPrice()}`)
// totalPrice();
// for(let i = 0;i < 5;i++)
// console.log(`name=${products.name},price=${products.price}`)

//dom raboty__________---___---___---

// const car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     isRunning: false,

//     startEngine() {
//         this.isRunning = true;
//         console.log("dvigatel activate");
//     },

//     stopEngine() {
//         this.isRunning = false;
//         console.log("dvigatel ostanowlen")
//     }
// }




// car.startEngine();
// console.log(car.isRunning);
// car.stopEngine();
// console.log(car.isRunning);



// function countProperties(obj) {
//     return Object.keys(obj).length;
// }

// let user = {
//     name: "Alice",
//     age: 25,
//     city: "Wonderland"
// };
// console.log(countProperties(user));





// function mergeObjects(obj1, obj2) {
//     return{...obj1, ...obj2 };
// }

// let obj = {a: 1, b: 2};
// let obj2 ={b: 3, c: 4};

// console.log(mergeObjects(obj1,obj2))





// function findKeyValue(obj, value) {
//     return Object.keys(obj).find(key => obj[key] === value) || null;
// }

// let colors = {
//     red: 'FFFFF00000',
//     green: '00000000F00',
//     blue: 'F0F0F0F0F0F0F'
// }

// console.log(findKeyValue(colors, '00000000F00'));




// function removeProperties(obj, keys) {
//     keys.forEach(key => delete  obj[key]);
// }

// let user = {
//     name: 'Alice',
//     age: 25,
//     city: 'Wonderland',
//     job:'Developer'
// };

// removeProperties(user, ['age','job']);
// console.log(user);



// function deepCopy(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }

// let original = {
//     name: 'Alice',
//     address: {
//         age: 25,
//         city: 'Wonderland',
//         zip: '12345',
//     },
//     hobbies: ['reading', 'coding']
// };

// let copy = deepCopy(original);
// copy.address.city = 'Neverland';

// console.log(original.address.city);
// console.log(original.hobbies);



// function filterObject(obj, filterFn){
//     return Object.fromEntries
//     (Object.entries(obj).filter(([key, value]) => filterFn(key, value)))
// }
// let user = {
//     name: 'Alice',
//     age: 25,
//     city: 'Wonderland',
//     job:'Developer'
// };
// console.log(user["name"]);



// function objectToArray(obj){
//     return Object.entries(obj);
// }

// let user ={ 
//     name: 'Alice',
//     age: 25,
//     city: 'Wonderland'
// };

// console.log(objectToArray(user));




// function sumValues(obj){
//     return Object.values(obj).reduce((sum, value) => sum + value, 0);
// }

// let prices = {
//     applle: 500,
//     bananna: 300,
//     prange: 400
// };
// console.log(sumValues(prices));

// function isEqual(obj1, obj2) {
//     return JSON.stringify(obj1) === JSON.stringify(obj2)
// }

// let objA = {a: 1, b: 2 };
// let objB = {a: 1, b: 2 };
// let objC = {a: 1, b: 3 };

// console.log(isEqual(objA, objC));
// console.log(isEqual(objA, objB));

