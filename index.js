// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
};


function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
};


function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
};


function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
};


function appendCat(name) {
    const newCatsArray = cats.slice();
    newCatsArray.push(name);
    return newCatsArray;
};


function prependCat(name) {
    const newCatsArray = cats.slice();
    newCatsArray.unshift(name);
    return newCatsArray;
};


function removeLastCat(name) {
    const newCatsArray = cats.slice();
    newCatsArray.pop(name);
    return newCatsArray;
};


function removeFirstCat(name) {
  const newCatsArray = cats.slice();
  newCatsArray.shift(name);
  return newCatsArray;  
};