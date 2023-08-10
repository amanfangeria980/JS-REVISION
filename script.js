"use strict"
// console.log("Aman Fangeria")

// Variables, Constants and Comments
var score=156;
var score=15; //redeclare and reassign possible
console.log(score)

//let and const
let scorethe=5 //reassign possible
console.log(scorethe);

const nameis="Aman" //initialise and declare at the same time
console.log(nameis)

//Data Types -> 7
// Number, String, Boolean, null, undefined, object, Symbol


//Strings
console.log('This is a string')// can use double as well as single quotes

//Mostly we use camel case
let firstName="Aman";
let lastName="Fangeria"

console.log(firstName,lastName)

// String Concatenation

// Method 1 -> Using + operator
let fullName=firstName+' '+lastName
console.log("Full name is "+fullName)

// Method 2 -> Using Template Literals

let newsent=`This is ${firstName}`
console.log(newsent)

//Getting String Character

console.log(firstName[0])
console.log(firstName.toUpperCase())
console.log(firstName.indexOf('a')) //returns first found index & returns -1 in case not found

//Common Strings Methods

let hobbies='  Coding Reading Running'

let result=hobbies.trim() //trims extra whitespaces
console.log(hobbies)
console.log(result)

console.log(result.indexOf("Coding"))
console.log(result.lastIndexOf("Reading")) //string is case sensitive

console.log(result.includes("Coding")) //return boolean

//slice method

let str1="wowprogrammer"
console.log(str1.slice(0,5))

//It does not changes the original string as strings are immutable in 
console.log(str1)

//string split method

let favColors="Brown Blue Yellow Green Black"

//string to array

let arrCol=favColors.split(' ') //separator -> ' '

console.log(arrCol)

let str2='Hello'
console.log(str2)

// str2[0]='p' //no change as these are immutable

//Though concatenation using + is possible in strings
let str3="hello"
str3=str3+" Programmer"
console.log(str3)

//Numbers
let num=50;
console.log(num,typeof score)

//Mathematical Operators & Expression

let res=num*2+(4*3)-8/2%4;
console.log(res)
// Priority
// 1 ()
// 2 ** power
// 3 * / % From Left to Right
// 4 + - (From left to right)

// Concatenation of Numbers
//Loosely Types language
let resultLine="My Total Score is = "+res;
console.log(resultLine) //112 is converted to string

//Loose Equality ==  vs Strict Equality ===

//Loose Equality Operator ==
let age= 22
console.log(age=="22") //true - > check value not type //avoid this
//strict equality operator ===
console.log(age==="22") //checks value as well as type

// != and !== similarly this works also

//Type Conversion

let strType="54"
console.log(strType,typeof strType)

//Number Method 
let numType=Number(strType)
console.log(numType,typeof numType) //auto adds space in comma in console log

//NaN -> not a number

// String Method 
numType = 500;
let str4=String(numType)
console.log(str4,typeof str4)

//Boolean Method

let num1=-1; 
// 0 -> false , ""-> false 
let val=Boolean(num1)
console.log(val, typeof val)

//Arrays
let arr1=["Biryani", 'Parathe', "Chat"]

console.log(arr1[2])

//Modify the array/overwrite
console.log(arr1)
arr1[0]="Aman"
console.log(arr1)

//Array Methods

//Join Methods

console.log(arr1.join(" "))
//default separator above is comma for .join()

//indexOf
console.log(arr1.indexOf("chat"))
//returns -1 if not found and case sensitive

//Concat Method
 let arr2=["Fangeria", "GupChup"]

 console.log(arr1.concat(arr2))
//Original Array will not be modified
//Non Mutating Method

//length property

console.log(arr1.length)
//Method vs property

//push method -> mutator method -> will modify array

console.log(arr1.push("Bhujia")) //returns new length of the array after pushing

//Methods

//pop() -> removes from last and returns the last element

console.log(arr1.pop())
console.log(arr1)

//Boolean Values and Comparison Operators

let boolType=true;
let stringType="true"

console.log(typeof boolType,typeof stringType)

//Methods returns boolean values

let email="aman@gmail.com"

let resultBool=email.includes("@")
console.log(resultBool)

//Comparison operators returns boolean value

//Weekly Type/Loosely typed lang -> js -> we do not define the type of variables it interprets it automatically

//Can attach js in head section or at the end of the body -> better

//New scope for var are created only in function scopes whereas let used block scopes. Const does not support reassign.

// -> this sign represents return value 

// Generally we use camelCase in var names whereas we use UpperCamelCase in classes  

//Type Coercion/Conversion

//Declaring empty array -> let numbers = []

//Control Flow
//For Loop

for(let i=1;i<=3;i++){
    console.log(i)
}

//While Loop
let times=3
while(times--){
    console.log("Task Number "+(times+1))
}

//Do while
//If else, else if
//Break and Continue
//Logical Operators -> &&, ||, !

// Priority 
// ! 
// and or from left to right 

//Variable and Block Scope
// Area where variable is defined or accessible 
let number1=10; //Global Scope

// let/const -> Block Scope 

// Ternary Operator (? :)
let ageis=20;

let resultage=age>18 ? "Qualify" : "Fail"

console.log(resultage)

//Switch case

switch(ageis){
    case 18: console.log("Age is 18");break;
    default: console.log("Nabalik")
}

//undefined and null -> false

//Functions

//Declaration
function nameOfFunction(){
    console.log("Your are running the code present inside the function")
}

//Function call
nameOfFunction()
nameOfFunction()

//Function Expression

let funVal=function(){
    //also called anonymous function 
    console.log("This is a function expression")
}

//Calling the function expression

funVal()

//Passing args and params
let invite=function(name="DefaultName"){
    console.log("Welcome "+name+" You are invited")
    console.log(`The name is ${name}`)
}
invite("aman")
invite()

//Returning value from a function

let ageCalculation=function(birthYear){
    let age=2023-birthYear
    // console.log("Your age is "+ age)
    return age
    //nothing will run now-> not reachable
}

console.log(ageCalculation(2004))

let answer1=ageCalculation(2005)
console.log(answer1)

//Arrow Function(ES6)

// Special Form of Function Expression 

// It allows us to write functions more fast because 

// No need to use function keyword 

// No need to use parentheses() in case of single parameter

// No need to use curly {} braces if single line code in function 

// no need to use the return statement if single line code in function

//Syntax

// let invitationfun=name =>`Welcome ${name} to this event`

//Alternatively
let invitationfun=name=>{
return `Welcome ${name} to this event`
}

//single line automatically returns

console.log(invitationfun("Coders"))

//Passing Function as an argument -> Higher Order Function (Callback)

let upperCase=function(str){
    return str.toUpperCase()
}

let lowerCase=function(str){
return str.toLowerCase()
}

let transformer=function(str,fun){
    return fun(str)
}

console.log(transformer("hello",upperCase))

//Returning function

let compliment=function(messages){
    return function(name){
        console.log(`${messages} ${name}`)
    }
}  


compliment("You are a good coder,")("Aman")

//2nd method, slightly better one

let complimented = compliment("You are  a good coder");

complimented("Carry");

//IIFE

// Immediately Invoked Function Expression 
// Executed only once


(function(name){
    console.log("The function will never execute again",name)
})("IIFE")

//setTimout and setInterval 

//setTimeout -> Run function "once" after "interval" of time

//setInterval -> Run function repeatedly, starting after the inteval of time and then keeps on repeating

//setTimeOut -> asynchronous functions

//setTimeOut(function/code,delay,arg1,arg2)

function greet(){
    console.log("Welcome Aman!")
}

setTimeout(greet,5000) //in millisecond 5000ms=5s

// Alternatively 
setTimeout(function greet1(name){
    console.log("Hello "+name+" buddy after 3 seconds")
},3000,"aman")

//Hoisting

// Variables "declaration" are "hoisted" towards the top of their scope 
test = 10;
console.log(test)
var test;

//doesn't work with let/const

//Function declaration is also hoisted
testi()
function testi(){
    console.log("hellow")
}

//not the case with function expressions or arrow functions

// testi1()

// let testi1=()=>
// {
//     console.log("Hekk")
// }

//function by default return undefined 

// Functions vs arrow functions 
// good for multi-line logic / good for single line returns
//creates a new this context/doesn't create a this context

// Higher order functions -> functions which contain other function to do some task

// other function can be argument -> callback 

//other function can be inner return value -> closure

//IIFE -> protect inner code from access, protects global scope

//Timer Functions-> setTimeOut and setInterval


//Objects

let car={
    color : "black",
    model: "2002",
    company: "Mercedes"
}

console.log(car)

//Accessing the JS object properties

console.log(car.model)
console.log(car["company"])

let propName="color";
console.log(car.propName)//doesn't work

console.log(car[propName])//works

//Modify the object

car.color="brown";
console.log(car.color)

//Deleting properties of object

let obj ={
    prop1: "val1",
    prop2: "val2"
}

console.log(obj.prop1)
delete obj.prop1 //or // delete obj["prop1"] //returns true
console.log(obj.prop1) //undefined

// Function vs Method 
// function in object is called method 
// or it is nothing but object property(key) holding function as "value"

let person={
    ageCalc: function(birthYear){
        return (2023-birthYear)
    }
}

console.log(person.ageCalc(2004))


//this keyword

//In each method we have an access of special keyword called "this"

//"this" keyword represent the object. "Calling" the "method" in which "this" is "present"

let greetObj={
    name: "Aman",
    greet: function(){
        return `${this.name}, good morning`
    },
    onbj: function(){
        return this;
    }
}

console.log(greetObj.greet())

greetObj.name="Sahil"

console.log(greetObj.greet())

console.log(greetObj.onbj())

//forEach method of array

//Another type of loop which we use to traverse over an array

let arr3= ["Aman","Sahil","Akash","Modi"]

console.log("***********")

//Syntax

arr3.forEach(function(element){
    console.log(element);
})

//Objects inside array

let blockList=[{userName: "john",reason: "abusive content"},{userName: "aman", reason: "copyright content"}]

console.log(blockList)

for(let i=0;i<blockList.length;i++){
    console.log(`User: ${blockList[i].userName}was blocked due to ${blockList[i].reason}`)
}


//Math Object Built-In Object in JS

// console.log(Math)

console.log(Math.round(7.6))

console.log(Math.trunc(9.6)) //removes decimal part

let randomVal=Math.random()

console.log(Math.floor(randomVal*100))


// Returns a random integer from 1 to 10:
// Math.floor(Math.random() * 10) + 1;
// Returns a random integer from 0 to 10:
// Math.floor(Math.random() * 11);

// Function  
// Call and Apply Method 


// Manually set the value of "this" keyword using call and apply 

let mainPlane= {
    airline: "Fly India",
    iatacode: "FI",
    bookings: [],
    book: function(flightNum,name){
        console.log(`${name} Booked Flight on ${this.airline} with flight number ${this.iatacode}${flightNum}`)
        this.bookings.push({flight: `${this.airline}`,name: name,flightNum: `${this.iatacode} ${flightNum}` })
    }
}

mainPlane.book(553,"Carlos")
mainPlane.book(596,"Frank")
// console.log(mainPlane)

//New Ariline launched of same group

let childPlane={
    airline: "Child Plane",
    iatacode: "CP",
    bookings: [],

}
let book=mainPlane.book;

// console.log(book)
//  book(148,"Aman")
 
 //now, book has become a regular function so now it's not able to understand context


 //this value is undefined at least in strict mode

 //Solution Using "call" method
//we provide a object context in this method

 book.call(childPlane,689,"Zack")

console.log(childPlane)

//Apply method

book.apply(childPlane,[785,"Mahesh"])

//There is not use for this if we want to book the mainPlane as originally book function is defined there.

//Bind method

function greetBro(){
    console.log(`Welcome ${this.firstName} ${this.lastName} !!! `)
}

let user={
    firstName: "Aman",
    lastName: "Fangeria"
}

let greetFan=greetBro.bind(user)


greetFan()


//Pass by Value & Pass by Reference

//Öbjects/arrays how "reference" are passed to variable

let arrOriginal=[1,2,3,4,5];

let arrReference=arrOriginal;

arrReference[6]=7

//same things is used
console.log("Original Array",arrOriginal);
console.log("Reference Array",arrReference); //changes are done in both arrays

arrReference.shift() //first element is removed


//pass by value
let getValue=[...arrOriginal];
console.log("getValue Array",getValue)
console.log("Original Array",arrOriginal)

getValue[2]=10;
arrOriginal[2]=55;
console.log("Original Array",arrOriginal)
console.log("getValue Array",getValue) //changes in both the array will have no effect on other


//For-in loop (Each iteration returns a "key" of object)
let newCar= {
    model: 2027,
    color: "Green",
    company: "Lamborghini"
}

//These are enumerable properties which can be used in for-in loop.
console.log(newCar)

for(let key in car){
    console.log(key+" corresponds to "+car[key])
}

//Const me reference change nhi hota hai.


//DOM Intro
// Javascript DOM (Document Object Model)

// Created by Browser as the html load into the browser 

// Browser create object of html called "Document Object" 

// In Document object, there is model of complete html in tree-like structure 


console.log(document)

console.log(document.URL)

//Getting HTML elements using querySelector/All

//querySelector returns "first element" that matches CSS Selector
 
//To get all matched elements, we use querySelectorAll

//Returns nodelist type

let resultedElement= document.querySelectorAll('p')
//for each loop works in queryselector
resultedElement.forEach(element=>{
    console.log(element)
})
resultedElement=document.querySelector('.coderdost')

resultedElement=document.querySelector('#coders')
console.log(resultedElement)



//Other ways to access elements

// Get Element by tagName 
//it returns html collections
let tagNameElements=document.getElementsByTagName('p')
console.log(tagNameElements)

// getElementsByClassName
// getElementById, etc are also there

// For each doesn't work on this method, that is it works upon nodelist type but doesn't work upon collection type
// tagNameElements.forEach(element=>{
//     console.log(element) 
// })


//Updating and changing the content 

//innerText
//ignores spaces
//Used to retrieve and set contents in plain text
let heading=document.querySelector('h1')
console.log(heading)
console.log(heading.innerText)

let content1=document.querySelector('.content')
content1.innerText= ">Great Coders!<"
console.log(content1.innerText)

//innerHTML
//It does not ignore spaces
//Used to retrieve and set contents in HTML Format
console.log(heading.innerHTML)
content1.innerHTML+= "<p>Great Coders!</p>"
console.log(content1.innerHTML)


//getting and setting attribute of element


let ytLink=document.querySelector('a')
// console.log(ytLink)
console.log(ytLink.getAttribute('href'))

//set the attribute
ytLink.setAttribute('href',"https://youtube.com/technicalmasteraman")
ytLink.innerText="Technical Master Aman YOUTUBE CHANNEL"


//Adding the style
let heading1=document.querySelector('h1')
heading.style.color="Aqua"
heading.style.backgroundColor="Black"

//Add, Remove, and replace class of element
//Add the class
// heading.classList.add('newClass')
// //Removing the class
// heading.classList.remove('newClass')

//Replace the class
heading.classList.replace("coderdost","newClass")

//Parent, Child and Sibling

let parentElement=document.querySelector('.content')
console.log(parentElement)
console.log(parentElement.children) //returns html collection

//We can not run forEach Method on HTMLCollection, So, First convert it into array

console.log(Array.from(parentElement.children))
Array.from(parentElement.children).forEach(element=>{
    element.classList.add("black")
    console.log(element)
})


//Child Element

let childElement=document.querySelector('h2')
console.log(childElement.parentElement)
console.log(childElement.nextElementSibling);// previous element sibling also there


//Event Basics (Click Event)

let eventElement= document.querySelector('.clickMe')
console.log(eventElement)

//Click listener

eventElement.addEventListener('click',function(){
    console.log("Clicked the button")
})

let elements=document.querySelectorAll('li')

elements.forEach(function(element){
    element.addEventListener('click',e=>{
        console.log("Item Clicked")
        console.log(e.target)
        e.target.style.textDecoration="line-through"
        e.target.remove()//removed here
    })
})


//Create and Remove Element up there
// //creation here:\
// var ul=document.querySelector('ul')
// let li=document.createElement('li');
// li.textContent="Something new added"
// ul.append(li)


//Event Bubbling and Delegation

//Copy Event
//Mouse move event

//Forms Events (Submit Form)

// submit listener 
// e.preventDefault()
//{id}.value
//form.emai.value form.password.value //use form names too

//appendChild

//Regular Expression(RegeX)

//It is a pattern of characters used to do the pattern matching
//Or we can say for "Data Validation"

//Implementation of password validation

//Length at least ->8
// at least one uppercase and one lowercase letter 
// at least contain one digit from 0 to 9 


// Browser Object Model : window


// Array Methods 

// Reverse ->Mutating method
let letters=['a','b','c','d']
letters.reverse();
console.log(letters)

//Concat-> Non-Mutating Method
let nums=[1,2,3,4,5];
let concated=nums.concat(letters)
let arrayofnums=[...nums,...concated]
console.log(concated)
console.log(arrayofnums)

//join-> non mutating
let joined=letters.join('-') //by default comma //changes to string
console.log(joined)
console.log(typeof joined)

//Slice Method-> non mutating method

//used to extract part the of the array
//Array.slice(startIndex,lastIndex(excluded))
//Return new array of extracted elements

let numaaray=[3,5,7,9,2 ]
let extractedaaray=numaaray.slice(1,4)
console.log(numaaray)
console.log(extractedaaray)

//Splice method-> mutating method

//used to add new elements into the array
//Array.splice(index,delete no of elements to delete,valueToBeAdded)
//return deleted items in the form of array

let splicedArr=numaaray.splice(0,1,11)
console.log(splicedArr)
console.log(numaaray)

//at Method
console.log(numaaray.at(-1)) //works with -ve index


//Map Method
//Create new array from original array by applying tranformation function

let salaries=[5000,6000,7000,45000,4200]
let newSalaries=salaries.map(salary=>{
    let incrementedAmount=salary/2;
    return salary+incrementedAmount
})

console.log(newSalaries)
//Array size before and after are same


//Filter Method (used to perform filtration on array)

let gifts=['Sunglasses','Watch','Purse','Laptop','Earphones','Speakers']

//Now you want to filter only watch and purse gifts

let filteredArr=gifts.filter(gift=>{
    if(gift=='Watch' || gift=='Purse'){
        return gift
    }
})
//It returns new array
console.log(filteredArr)
//length before and after can be different


//reduce method

//run reducer function for each array element
//Array.reduce(function(total,currentValue),initialValue)
//It returns single value

//Sum of all elements using reduce method

let numbersArray=[1,553,2,3,66,45]

let sumArray=numbersArray.reduce(function(total,currentValue){
    return total+currentValue
},0)
console.log(sumArray) //non-mutating method


//find method
//It returns the first element we are looking for

let students= [{id: 1,name: "alex"},{id: 2,name: "aman"}];

let resultFind=students.find(student=>{
    return student.id===1
})

console.log(resultFind)//returns undefined in case not found


//findIndex method
//executes function for each array element
//it returns index of that array element who first pass the test otherwise returns -1

let resultIndex=students.findIndex(student=>{
    return student.id==2
})
console.log(resultIndex)


//some and every method

// some method returns "true" if äny array element pass the test 
//every method returns "true" if all the elements pass the test
  
let scoresCh=[52,521,14,66,3,4211,11]

let resultScores=scoresCh.some(score=>{
    return score>50;
})
console.log(resultScores)
let resultScores_=scoresCh.every(score=>{
    return score>50
})
console.log(resultScores_)


//flat method
//it creates a new array with the elements of the subarrays concatenated into it -> non-mutating method

let arrayEle=[1,2,3,4,[4,5,6]]
console.log("Before flat",arrayEle)
let arrayEleFlat=arrayEle.flat()//by default depth value is 1
console.log("After flat",arrayEleFlat)

//flatmap method
//it is the combination of map method followed by the flat method of depth 1

let cartItems=[{
    name: "Mobile Phone",
    qty: 2,
    price: 500
},
{
    name: "Tablet",
    qty: 1,
    price: 1000
}]

let newCartItems=cartItems.flatMap(item=>{
    if(item.name==="Mobile Phone"){
        return [item,{
            name: "Screen Protector",
            qty: 1,
            price: 0
        }]
    }
    else{
        return [item]
    }
})

console.log(newCartItems)


//Sorting array using sort method
//By default sort method is used to sort strings
//It firstly convert everything into string and then...

let lettersArray=['d','e','f','z','x']
console.log(lettersArray.sort())//ascending order

//doesn't work with -ve numbers
//if a-b<0 => a<b => A,B(keep order same)
//if a-b>0 =>a>b =>B,A (switch the order)

let negativeArray=[-14,-1,0,4,5,6,55]
console.log(negativeArray.sort((a,b)=>{
    if(a<b)return -1; //any num less than 0 ->no change
    if(a>b)return 1; //any num greater than 0 ->switch
}))

//alternatively
// nums.sort((a,b)=>return a-b) ascending
// nums.sort((a,b)=>return b-a) descending

//it is a mutating method


//Chain of methods

let numsArray=[1,2,3,4,5,6]

let resultofNums=numsArray.slice(0,3).splice(2,1,7)

console.log(resultofNums)//deleted value array
//slice non mutating
// splice mutating


//Date and Time

//Date object always carry both "date" & "time"

//using Date method
// let currentDate=new Date(2021,5,24); //dmyhms ->0 to 11(month)
// console.log(currentDate)


//using timeStamp(integer number represent in "ms" from 1-1-1970)
// let currentDate=new Date(0)
// 1 day= = 24*60*60 = 86400000
// console.log(currentDate)

//to get time in "ms"
//let currentDate=new Date().getTime()
//console.log(currentDate) // total time in miliseconds from 1970 


// date and time methods

let completeDateAndTime =new Date();
console.log(completeDateAndTime)

//Get full year
console.log(completeDateAndTime.getFullYear())
//get month

console.log(completeDateAndTime.getMonth()) //starts from 0

// .getDay() starts from 0 sunday

//getDate, getHours,getMinutes,getSeconds


//Digital Clock


//Local Storage Intro

//In previous todo list task when we refreshed the browser, we lose our current state data

//Store and retrieve data from database or,
//Store and retrieve data from local storage

//it is an api provided by browser to store data inside
// console.log(window.localStorage)

// Local Storage
//set item
//get item
//update item

localStorage.setItem('passion',"programming")
localStorage.setItem('age',24)
console.log(localStorage)

console.log(localStorage.getItem('passion'))

//update
localStorage.setItem('age',26)
console.log(localStorage.getItem('age'))

//remove item
localStorage.removeItem('age')
console.log(localStorage.getItem('age')) //null
console.log(localStorage)
localStorage.clear()
console.log(localStorage)


//Storing complex data structures like array of objects
//ultimately in local storage data is stored in string format

let vehicles=[{
    company: 'bmw',
    model: 2021
},{
    company: 'rolls royce',
    model: 1991 
}]

console.log(typeof vehicles)

let stringOfVehicles=JSON.stringify(vehicles) //converting json to strings

console.log(stringOfVehicles)

localStorage.setItem("vehicles",stringOfVehicles)
console.log(localStorage)


//get stored item again in object format

let storedData=localStorage.getItem("vehicles")
let objectFormat=JSON.parse(storedData)
console.log(objectFormat)


//OOPs in JS
//Constructor function and the "new" operator

//We can not use arrow function as a constructor

//Call "constructor" function using "new" keyword

//1 new {object} created empty initially
//2 "this" = {object}
//3 Object linked to prototype
//4 functional automatically return {object}


let Car=function(color,model){
    //instance properties
    console.log(this);
    this.color=color;
    this.model=model;
    //not a good practice
    //method example, alternatively as a good practice, we can use prototypes for this
    this.login=function(){
        console.log("login method");
    }
    // example of prototype 
}

let instanceOfCar=new Car("Black","2003");
console.log(result);
console.log(instanceOfCar instanceof Car);

// Prototypes
// Each object created by constructor function have an access to all methods present inside that constructor prototype 
console.log(Car.prototype); //a constructor function is being printed, currently empty

// for example 
Car.prototype.startEngine = function(){
    console.log("Engine is started"); 
}

console.log(Car.prototype); // start engine is now available inside this;

// let's call it
instanceOfCar.startEngine();
console.log(instanceOfCar.__proto__); //if we want to check the prototype from which the object is made


//we can also set properties to prototype
Car.prototype.company= "Honda"; // Iska matlab ab jitne bhi naye objects banenge unke andar bhi yeh property accessible rahegi

// for example 
const instance2=new Car("White","2004");
console.log(instance2.company); //This is called prototypical inheritance

console.log(instance2.__proto__);
// It is same as this, hence is called prototypical inheritance
console.log(Car.prototype)
var exArr=[1,23,4];
console.log(exArr.__proto__,Array.prototype);
console.log(Object.prototype) //last level of prototype before getting null


// ES6 Classes
// They still implement prototypal inheritance behind the scenes but it's a new way introduced in ES6, above was the traditional way of creating class and object in js 

// Class declaration
class Bus{
    constructor(color,model){
        this.color=color;
        this.model=model;
    }

    startEngine(){
        console.log("Started Engine")
    }

    get startBus(){
        console.log("This is start bus method using get");
    }

    set changeColor(color){
        console.log(this.color=color);
    }

    get description(){
        return `Color of Bike is ${this.color}`;
    }
}

let redBus=new Bus("Red",2003);
console.log(redBus);
redBus.startEngine(); //accessing as function


// Classes are not hoisted
// Classes are also first class citizens (Pass as an argument or return)
// Classes are executed in strict mode

//Setters and Getters method
// it allows you to define object accessors (Computed Properties)



//We can also use in class as in line number 1216 and 1220
//Using it
redBus.startBus; //accessing as property
redBus.changeColor="blue";
//color is changed in original object
console.log(redBus);

console.log(redBus.description)


//static methods (method which is not present in constructor)

//static method example
Car.breakMethod=function(){
    console.log("Break method of car");
}

Car.breakMethod();


// Class Inheritance

//let's assume parent class as Bus which we declared above


// Child Class
class Bike extends Bus {
    //Adding some new properties and "methods" as well
    constructor(color,model,engineCap){
        super(color,model); //calling parent constructor
        this.engineCap=engineCap;
    }
}

// let newBike=new Bike("Aqua",2000);
// console.log(newBike);


let newBike=new Bike("Aqua",2000,100);
console.log(newBike);
 

// If we want to chain various methods just return this in every function end and we can chain those methods.


// Asynchronous JavaScript

// Async Code Example

console.log(1);
console.log(2);

/* setTimeout(()=>{
    console.log("Call Back after 3 seconds")
},3000); //after 3 second
 */
console.log(3);
console.log(4);


// Making HTTP Request (AJAX example)

// let request1=new XMLHttpRequest();
// console.log(request1)

// request1.addEventListener('readystatechange',()=>{
    // console.log(request1,request1.readyState);
//     if(request1.readyState===4 && request1.status==200){
//         console.log(request1.responseText);
//     }
// })

//set up the request
// request1.open("Get","https://jsonplaceholder.typicode.com/todos/1");



// sending the request
// request1.send();


// HTTP Response status codes

// Informational responses (100-199)
// Successful responses (200-299)
// Redirection messages (300-399)
// Client error responses (400-499)
// Server error responses (500-599)


// Callback function

let todos=(callback  )=>{
    let request=new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState===4 && request.status==200){
            // console.log(request,request.responseText);
            let data=JSON.parse(request.responseText)
            callback(undefined,data);
        }
        else if(request.readyState===4){
            // console.log("Data could not be fetched");
            callback("data could not be fetched",undefined);
        }
    })

    request.open("Get","https://jsonplaceholder.typicode.com/todos/1");
    request.send();
}

//Async code example
todos((err,data)=>{ //will take time
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});


// Callback Hell (Chain of callback function inside one another)


// Promise is a solution for this

// General example

let getSomething=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Some data");
        reject("some error");
    })
}

getSomething().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

// Chaining of promises

// Fetch API(it bydefault returns a promise)

fetch("data.json").then((response)=>{
    console.log("Promise resolved",response);
}).catch((error)=>{
    console.log("Some error")
})


// Async and Await
