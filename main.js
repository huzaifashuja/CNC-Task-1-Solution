//Task1
document.getElementById("form").addEventListener("submit", function (e) {
  const a = document.getElementById("input").value;
  console.log(`Mr. ${a}`);

  //Task2
  window.alert(`Mr. ${a} your name has ${a.length} characters`);

  //Task3
  console.log(`Value after trim is ${a.trim()}`);
    e.preventDefault();
});

//Task4
// 2. $name_1
// 3. 1_#name
// 4. #name

//Task 5
let b = 2 + 6 * 8 - 9 + 2 / 3 + 9;
console.log(b.toFixed());

//Task 6
// Total=45

//Task 7
var phoneNumber = '03203595940' 
var NIC = 4250187968352
var name = "umair"

let number =Number(phoneNumber);
let string=String(NIC);
console.log(`Hello Mr. ${name}`);
console.log(typeof number);
console.log(typeof string);

//Task 8
var age = 21;
(age >= 20 ? console.log("Eligible") : console.log("Not eligible"));

//Task 9
//You are not allowed to spend this much money

//Task 10
//You're an awesome student

//Task 11
var myMarks = [30, 45, 68, 32, 55];
var criteria = 30;
var bonusPoints = 5;

myMarks.forEach(function (marks, index) {
  let bonusMarks;
  bonusMarks = marks + bonusPoints;
  (bonusMarks > criteria
    ? console.log(`${bonusMarks} Passed `): console.log(`${bonusMarks} Failed`));
});

//Task 12
//var array=[1,2,3,4,5];
//console.log(array.splice(2));
//Remove all elements fro index2 [3,4,5]

//console.log(array); [1,2]
 
//var array2=[6,7,8,9,0];
//console.log(array2.splice(2,1));
//Remove 1 element from index 2 : [8] 

//console.log(array2.splice(2,0));
//Remove 0 Element from index 2
//console.log(array2); : [6,7,9,0]

//Task 13
str= s=>console.log(s.toUpperCase());
str("huzaifa");

//Task 14
let asc= myMarks.sort(function (x, y) {
  return x - y;
});
console.log(asc);

let des = myMarks.sort(function (x, y) {
  return y - x;
});
console.log(des);

//Task 15
function checkString(a){
    if(typeof a==='string')
 return console.log(`Welcome ${a}`)
else
return console.log(Math.pow(a,2))
} 
checkString('huzaifa');

//Task 16
function round(r){
    return console.log(`Output after rounf off is ${Math.round(r)}`);
}
round(4.6);

