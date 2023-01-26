var favoriteBook = [];

addFavoriteBook("you don't know js");
addFavoriteBook("mind casting ");

function addFavoriteBook(bookName) {
  console.log(bookName);
  favoriteBook.push(bookName);
}

addFavoriteBook("you find this very easy");

console.log(favoriteBook);


var favoriteBook = [];

addFavoriteBook("you don't know js");
addFavoriteBook("mind casting ");

function addFavoriteBook(bookName) {
  console.log(bookName);
  favoriteBook.push(bookName);
}

addFavoriteBook("you find this very easy");

console.log(favoriteBook);

function printFavoriteBook() {
  console.log(`favorite Book : ${favoriteBook.length}`);
}
printFavoriteBook();


// async function 

function resolveAfter2Seconds(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve('resolved');
    },20000);
  })
}

async function asynCall(){
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);

}

asynCall();


async function foo() {
  return 1;

}
foo();

function foot(){
  return Promise.resolve(1);

}
foot();

const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false


// async function name(){
//   await 1;

// }
// name();

function foo(){
  return 
  Promise.resolve(1).then(()=>undefined);
  
}

// classes in javascript one of them is declaration type and one is expression type

class rectangle {
  constructor (height,weight){
    this.height = height;
    this.weight = weight;

  }
}


class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }
}


// calculator code //
// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);
//         if (buttonText == 'X') {
//             buttonText = '*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'C') {
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }


// document. title represent the title of the page;
document.title = "js practice"
// document.body represent the content or elements of the body
document.body

// document.body.children represent the header  and div like making a tree or all the elements 
document.body.children //output group of element
// if two id having same name then js excute the first one 

// document.querySelector("#name");
// document.getElemntsByTagName("h1");
document.querySelectorAll("name");

 


/// date and time function in javascript

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("date").innerHTML = d.toLocaleTimeString();
}
const date = new Date();
document.getElementById("date1").innerHTML = date;

//random number in javascript

Math.random(); // return a random number which is always lower than  1

document.getElementById("random3").onclick = function random(){
  let hash = Math.floor(Math.random() * 6)+1;
  document.getElementById("random").innerHTML = hash;
}
// random();



document.getElementById("hd").textContent =  ("the time runnig faster");
document.getElementById("hd").append("&the time runnig faster");

// array usefull methods

let array  = ["java","python","c++","javascript"];
array.sort();
// output ['c++', 'java', 'javascript', 'python'] array sorted

let array1  =  ["java","python","c++","javascript"];
array.join(" & ");
//output'java & python & c++ & javascript'

array.concat([array1]);
// output ['java', 'python', 'c++', 'javascript', 'java', 'python', 'c++', 'javascript']

// const counterr = () =>{
//   let count = 0;
//   document.getElementById("counter").innerHTML = count++;
// }

let count = 0;
function counter(){
  document.getElementById("counter").innerHTML = count++;
}
function resetCounter(){
  count = 0;


  document.getElementById("counter").innerHTML = count;
}