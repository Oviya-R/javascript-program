// Array filtering
let words=['Apple','Pen','Laptop'];
let lessthan=words.filter(words => words.length<4);
console.log(lessthan);

//Double the number using array mapping
let numbers=[1,2,3,4,5,6];
let value = numbers.map((x)=> x*2);
console.log(value);

//longest string in array
let arr = ['Apple','Washing Machine','Sharpner'];
var length = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      var length = arr[i].length;
      var longest = arr[i];
    }
  }
  console.log(longest);

//array deduplication
let stationary = ["pencil","pen","eraser","pencil","Sharpner","pen"];
function remove(data){
    return[...new Set(data)]
}
console.log(remove(stationary));

//Merging arrays
arr1=[1,2,3,4];
arr2=[6,7,8,9];
console.log(arr1.concat(arr2));













