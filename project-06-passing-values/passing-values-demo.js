// Function to get Quiz 1 score
function getQuiz1() {
    const score = prompt("Enter score for Quiz 1:");
    return score;
}

// Function to get Quiz 2 score
function getQuiz2() {
    const score = prompt("Enter score for Quiz 2:");
    return score;
}

// Function to get the user's first name
function getName() {
    const firstName = prompt("Please enter your first name: (Example: Mike)\n");
    return firstName;
}

// Function to calculate the average quiz score
function calcAverage(q1, q2) {
    // Convert strings to numbers using built-in parseFloat() function
    q1 = parseFloat(q1);
    q2 = parseFloat(q2);
    const numQuizzes = 2;
    const average = (q1 + q2) / numQuizzes;
    return average;
}

// 1. Call functions and assign returned values to variables
const quiz1Score = getQuiz1();
const quiz2Score = getQuiz2();
const userName = getName();

// 2. Call calcAverage using the returned scores as arguments
const averageScore = calcAverage(quiz1Score, quiz2Score);

// 3. Build output string 
const message = `Greetings, ${userName}! 
Your score for Quiz 1 was ${quiz1Score} and Quiz 2 was ${quiz2Score}. 
Your calculated average is: ${averageScore}.`;

// 4. Display the result
alert(message);
console.log(message);