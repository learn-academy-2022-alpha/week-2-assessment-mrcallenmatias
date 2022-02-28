// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
console.log(cohort.split(""))

// a) Your answer: ['A', 'l', 'p', 'h', 'a', ' ', '2', '0', '2', '2']
// b) Verify and explain: Correct, split turns string into an array. Without any space or indication of how you wanna split the word into an array, it will split into that output.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: Correct, every function should have a return inside is. Without it, it will show undefined as the result.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [ 8, 10, 12, 14, 16 ]
// b) Verify and explain: Correct, by using map method, it will go through each number in an array and follow whatever command you put in. In this case, all numbers inside the array was multiplied by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:[ 11, 13, 15 ]
// b) Verify and explain: Correct, The filter method is use for array that goes through the data inside an array and filter whatever command you input.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: Correct, To find an array inside the object, you would first have to select the object, then select the object inside the object, once you have access to that object, you would have to use the method to find the index inside the array.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn { student: 'George', cohort: 'Alpha', year: 2022 }
// b) Verify and explain: Correct, in the constructor inside the class method, it only has 1 parameter which is the name. When the name George was put inside the parameter in the variable learnStudent, it got transferred over inside the constructore after console logging it.
