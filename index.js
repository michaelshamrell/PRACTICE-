//Adding and removing points

function add3Points() {
  myPoints += 3
  console.log(myPoints)
}
function removePoints() {
  myPoints -= 1
  console.log(myPoints)
}


//String and Number addition predictions
//When a string comes before the number, everything turns into a string. EX line 18
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) //  4
console.log("11" + "14") // 1114

//First If else Statement

let age = 22

if (age <= 20) {
  console.log("You are not old enough to get into the club")
} else {
  console.log("Welcome!!")
}


//More practice with if and else statements. "President sends a letter when you turn 100"
//When using == it will allow age to equal a string "100" as well as the number 100. When using === it will only pass as 100

let age = 100

if (age < 100) {
  console.log("No letter for you, not old enough.")
} else if (age === 100) {
  console.log("Here is your letter")
} else {
  console.log("You have already gotten a letter")
}

//Predict whether true or false is console logged
console.log(4 === 3)  //  false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false

//Arrays- ordered lists of items

let featuredPosts = [
  "Check out my netflix clone", 
  "here's code for my project", 
  "I have relaunched my portfolio"
]

console.log(featuredPosts.length)

//Arrays-- ordered lst of itmes - composite / complex data type

let myself = [
  "michael",
  20,
  false
]

//adding items to the end of an Array

let cards = [7, 4]

cards.push(6)

console.log(cards)
//[7, 4, 6]

//------------------

let messages = [
  "Hey hows it going?",
  "Im great, thank you! How about you?",
  "all good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)
// How can you remove the last item in an array? Try to google it!
messages.pop()
console.log(messages)

//For loop, count to ten

//    START           FINISH       STEP SIZE
for ( let count = 10;  count < 21;  count += 1 )  {
    
  console.log(count)

}

//More for loop practice

for (let i = 0; i < 6; i += 1) {
  console.log(i)
}
// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let i = 10; i < 101; i += 10){
  console.log(i)
}

//Combining for loops with arrays
let messages = [
  "Hey, how's it going?",        
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!"
]
