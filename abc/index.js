/*
console.log("Hello world"); 

let persons_ = {
    name1 : 'nayem',
    age : 25
};
console.log(persons_.name1);
console.log(persons_.age);
persons_.name1 = "Fahim";
persons_.age = "28";
console.log(persons_.name1);
console.log(persons_.age);
let points = 90;
let type = points >100? 'gold':"silver";
console.log(type);
points = 90;
type = points >100?'gold': 'silver';
console.log(type);
let i =0;
while (i <= 10)
    {
        if(i % 2 === 0){
            i++;
            continue;
        }
        console.log(i);
        i++;
    }

let arr = ['nayem', 'maruf', 'soyon'];
for(let v of arr){
    console.log(v, [typeof v]);}
console.log(typeof arr);
console.log (size = isLandScape(1000, 800));
function isLandScape(width , hight)
{
    return (width > hight);
}

console.log(fizzBuzz(15));

function fizzBuzz(number){
    if(typeof number !== 'number')
        return 'This is not a number';
    if((number % 3 === 0) && (number % 5 ===0))
        return "FIZZBUZZ";
    if(number % 3 ===0)
        return "FIZZ";
    if(number % 5 === 0)
        return "BUZZ";
    
    return number;
}
let star = 10;
showStars(star);
function showStars(cal){
    for(let i = 0; i<cal ; i++)

        {
            let star = "";
            for(let j = 0; j<=i; j++)
                {
                    star +="*";
                }
            console.log(star);
        }
}
*/
//Grade calculation
/*
let marks = [88, 95, 88];
console.log(calculateGrade(marks));
function calculateGrade(allMarks)
{
    let avarage = Math.ceil( calculateAvarage(allMarks));
     console.log(avarage);
    if (avarage < 60)
        return "F";
    if(avarage < 70)
        return "D";
    if (avarage < 80)
        return "C";
    if(avarage < 90)
        return "B";
    else return "A";

}


function calculateAvarage(arr)
{
    let sum = 0;
    for(let  marks of arr)
        {
            sum+=marks;
        }
    
    return sum / arr.length;
}

*/
// prime number showing;
/*
showPrimeNumber(100);
function showPrimeNumber(limit)
{
    
    for (let number =2; number<=limit; number++)
    {
        
        if(isPrime(number) == true) console.log(number);
    }
}

function isPrime(number)
{
        for (let factor = 2; factor< number; factor++)
        {
            if(number%factor === 0)
            {
               return false;
            }
        }
        return true;
}
        */


/*
// factory function
function creatCircle (radius){
    return {
        radius,
        
        draw()
        {
            console.log('draw');
        }
    };
}

const circle1 = creatCircle(1);
//constructive function
function Circle (radius)
{
    this.radius = radius;
    this.draw = function ()
    {
        console.log('Draw');
    }
}
const circle2 = new Circle(1);
*/

/*
const address = {
    street : 420,
    city : 'seven',
    zipCode: 8550
};

const obj = { ... address};
showAddress(obj);
function showAddress(address)
{
    for (let keys in address){
        console.log(keys, address[keys]);
    }
}
    */
/*
//factory fucntion

let crete = object(420, 'seven', 8550);

console.log(crete);

function object(street, city, zipCode)
{
    return{
        street,
        city,
        zipCode
    };
}
//constructor function
let create1 = new object1(440, 'six', 8554);
console.log(create1);

function object1 (street1, city1, zipCode1){
    this.street1 =street1;
    this.city1 =city1;
    this.zipCode1 = zipCode1;
}
*/


let post = {
    title : 'first blog',
    body : 'This is Nayem',
    Author:'Nayem',
    views: 10,
    comment : [
        {
            author : 'Maruph',
            Body : 'yes'
        },
        {
            author : 'Emon',
            Body : 'Lets go'
        }
    ],
    isLive : true
};
console.log(post);