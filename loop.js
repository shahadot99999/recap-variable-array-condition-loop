/*
------------------
LOOP
------------------
1. Display "Ajke amar mon valo nei" for 39 times
2. Display numbers between 58 to 98
3. Show all even numbers from 412 to 456
4. Show all odd numbers 581 to 623
5. Difference between while loop and for loop
6. Declare an array for all the topics that you have learned last few days
display then as output
7. Create an array for all the mobile phones. Display all the elements of the array
by using a while loop
8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
9. Write the price of the books that you have.
Display the prices if the prices is lower than 200

*/


//1. Display "Ajke amar mon valo nei" for 39 times //  ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। ২৭. for লুপ কিভাবে কাজ করে


// for (var i = 0; i < 39; i++) {
//     console.log("Ajke amar mon valo nei");
// }

// 2. Display numbers between 58 to 98
// for (var i = 58; i <= 98; i++) {
//     console.log(i);
// }

//3. Show all even numbers from 412 to 456 //৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
// for (var i = 412; i <= 456; i += 2) {
//     console.log(i);
// }

// 4. Show all odd numbers 581 to 623. ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
// for (var i = 581; i <= 623; i += 2) {
//     console.log(i);
// }

// //5. Difference between while loop and for loop//// ৩২.while আর for loop এর মধ্যে পার্থক্য কি
// while — loops through a block of code as long as the condition specified evaluates to true.
// for — loops through a block of code until the counter reaches a specified number.

//6. Declare an array for all the topics that you have learned last few days display then as output. ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

// var mylearning = ["Html, Css, Bootstrap, Gitgub, Tailwind"];
// for (let i = 0; i < mylearning.length; i++) {
//     console.log(mylearning[i]);
// }

//7. Create an array for all the mobile phones. Display all the elements of the array by using a while loop//৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও
// var mobilephones = ["Motorola", "Nokia", "Samsung", "Xomi"];
// var i = 0;
// while (i < mobilephones.length) {
//     console.log(mobilephones[i]);
//     i++;
// }


//8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44. //৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
// for (var i = 30; i <= 86; i++) {
//     console.log(i);
//     if (i > 44) {
//         break;
//     }
// }

// 9. Write the price of the books that you have. Display the prices if the prices is lower than 200 // ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

// var books = [145, 187, 289, 156, 132, 251, 125, 188, 241, 225, 198];

// for (var i = 0; i < books.length; i++) {
//     var book = books[i];
//     if (book > 200) {
//         continue;
//     }
//     console.log(book);
// }


