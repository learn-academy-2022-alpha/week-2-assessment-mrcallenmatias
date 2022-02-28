// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// create a test
describe("divByThree", () => {
    const num1 = 15
    const num2 = 0
    const num3 = -7

    //describe the output of the function
    it("takes a number as an argument and return if the number is evenly divisble by three or not", () => {
        // shows the result of the output
        expect(divByThree(num1)).toEqual("15 is divisible by three")
        expect(divByThree(num2)).toEqual("0 is divisible by three")
        expect(divByThree(num3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.

// create a funtion name divByThree
// adds a parameter with desire name
// make an if statement and use (% 3) to find whether th number is divisible by 3
// then return if the number is evenly divisble by three or not

const divByThree = (array) => {
    if (array % 3 === 0) {
        return `${array} is divisible by three`
    } else {
        return `${array} is not divisible by three`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("arrayOfWords", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

    //describe the output of the function
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        // shows the result of the output
        expect(arrayOfWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(arrayOfWords(randomNouns2)).toEqual( ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// b) Create the function that makes the test pass.

// create a function called arrayOfWords that takes in an array
// use the map method to select the first letter of each word
// capitalize the letter
// use slice methode to add the rest of the letter that dont need to be capitalized
// returns an array with all the words capitalized

const arrayOfWords = (array) => {
    return array.map(a => {
        return a[0].toUpperCase() + a.slice(1)
    })
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// Create a test with expect statements for each of the variables.
describe("vowelIndex", () => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2

    //describe the output of the function
    it("takes in a string and logs the index of the first vowel", () => {
        // shows the result of the output
        expect(vowelIndex(vowelTester1)).toEqual(1)
        expect(vowelIndex(vowelTester2)).toEqual(0)
        expect(vowelIndex(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.    

// crete a function called vowelIndex that takes on string parameter
// iterate through each string to go through the word letter bu letter
// use if statement to find the vowel in the word
// return the index of the first vowel

const vowelIndex = (string) => {
    for (i = 0; i < string.length; i++){
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u")
        return i
    }   
}         
