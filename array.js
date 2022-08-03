/* 
---------------------
ARRAY
-----------------------
1. What is the purpose?
2. How to declare an array in JS
3. Number of elements in an Array
4. What is index? 
5. Find the value of an element by index
6. Change an element by index
7. get the index of an element by the value
8. what does it mean when you get undefined while getting the value of an element by index
9. How can you add an element to an array at the last position
10. How can you remove the last element from array
11. Add an element at the first position of an array
12. Remove the first element of an array
*/

//6. Change an element by index
var numbers = [45, 68, 78, 56, 89, 98];

//  get element value by index
var element = numbers[1];
console.log(element);

//  set element value by index
numbers[1] = 77;
numbers[3] = 44;
console.log(numbers);

//8.  undefine value 
var x;
if (typeof x === "undefined") {
    console.log(x);
} else {
    console.log(x);
}

//9. How can you add an element to an array at the last position.11. Add an element at the first position of an array 
var friends = ['balam', 'kalam', 'salam'];
console.log(friends);
friends.push('gelam');
//array element are add begining
friends.unshift('taklam');
console.log(friends);

//10. How can you remove the last element from array. 12. Remove the first element of an array

var numbers = [78, 45, 98, 45];
// use pop to get last element
//console.log(numbers);
//numbers.pop();
//console.log(numbers)

var element = numbers.pop();
console.log(numbers);
console.log(element);


//তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

var david = 40000;
if (david >= 80000) {
    console.log("You can buy mac");
}
else if (david >= 60000) {
    console.log("You can buy gaming laptoop");
}
else if (david >= 40000) {
    console.log("You can buy Lenova laptoop");
}
else if (david >= 20000) {
    console.log("You can buy old laptoop");
}
else {
    console.log("You can buy Mobile.")
}
