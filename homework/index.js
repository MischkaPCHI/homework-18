const arr = ["Alex", "Bob", "Chris", "David", "Eva", "Frank", "Grace", "Helen", "Ian", "Jack", "Kate", "Leo", "Max", "Nora", "Oscar"];


const newArray = (array) => { return array.filter(elem => elem[0].toLowerCase().includes('a'));}

console.log(newArray(arr));

console.log('-----------------------------------------------');



const nums = [2, 8 ,24, 8, 1, 7, 45];
const sum = (arrNums) => { return arrNums.reduce((num1, num2) => num1 + num2);};

console.log(sum(nums));

console.log('-----------------------------------------------');

const numsRevers = (array) => { return array.reverse()}

console.log(numsRevers(nums));

console.log('-----------------------------------------------');


const objects = {
    'customer-id-1': {
       name: 'William',
       age: 54
    },
    'customer-id-2': {
       name: 'Tоm',
       age: 17
    }
 };

 const arrayWithObjects = (obj) => {
    return Object.keys(obj).map(key => ({
        name: obj[key].name,
        age: obj[key].age,
        id: key
    }))
 }

 console.log(arrayWithObjects(objects));
