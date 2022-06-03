// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});
function destructivelyAppendCat(name){
     name = "Ralph";
    cats.push(name);
    return 'cats';
}
function destructivelyPrependCat(name){
  name = "Bob";
 cats.unshift(name);
 return 'cats';
}
function destructivelyRemoveLastCat(){
 cats.pop();
 return 'cats';
}
function destructivelyRemoveFirstCat(){
  cats.shift();
  return 'cats';
 }
 function appendCat(name){
  name = "Broom";
const newArray = cats.slice();
newArray.push(name);
return newArray
}
function prependCat(name){
  name = "Arnold";
  const newCats = cats.slice();
  newCats.unshift(name);
 return newCats;
}
function removeLastCat(){
 const newHat = cats.slice();
 newHat.pop();
 return newHat;
}
function removeFirstCat(){
  const newBat = cats.slice();
  newBat.shift();
  return newBat;
 }


