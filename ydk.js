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
