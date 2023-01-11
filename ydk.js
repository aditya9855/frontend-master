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


