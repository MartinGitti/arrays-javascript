//===============================PART 2====================================//
// Map created below:
let students = new Map();

// Student grades displayed below:
matthew = [60, 50, 100, 80, 75];
sarah = [50, 50, 70, 55, 75];
johnny = [30, 50, 20, 80, 75];
alex = [10, 50, 80, 80, 70];
angie = [85, 90, 100, 95, 95];

// Students results and average worked out below:
students.set('Matthew',(60 + 50 + 100 + 80 + 75)/5);
students.set('Sarah',(50 + 50 + 70 + 55 + 75)/5);
students.set('Johnny',(30 + 50 + 20 + 80 + 75)/5);
students.set('Alex',(10 + 50 + 80 + 80 + 70)/5);
students.set('Angie',(85 + 90 + 100 + 95 + 95)/5);

// Student averages retrieved from above:
let alexAverage = students.get('Alex');
let angiAverage = students.get('Angie');
let johnAverage = students.get('Johnny');
let mattAverage = students.get('Matthew');
let saraAverage = students.get('Sarah');

// Log all student grades and average grade to console:

console.log("Alex grades" + " = " + alex + ".");
console.log("Alex average grade" + " = " + mattAverage + ".");
console.log("Angie grades" + " = " + angie + ".");
console.log("Angie average grade" + " = " + angiAverage + ".");
console.log("Johnny grades" + " = " + johnny + ".");
console.log("Johnny average grade" + " = " + johnAverage + ".");
console.log("Matthew grades" + " = " + matthew + ".");
console.log("Matthew average grade" + " = " + alexAverage + ".");
console.log("Sarah grades" + " = " + sarah + ".");
console.log("Sarah average grade" + " = " + saraAverage + ".");

// Display list of students along with their grade averages only on console:
console.log("The student average grade results are as follows:")
for( let [key, value] of students) {
    console.log(key + ":" + value);
}

// Function to display dropdown list of students on HTML page:
let learners = ["Alex", "Angie", "Johnny", "Matthew", "Sarah"];

function studentList() {
    let x = document.getElementById("selectList").value;
    document.getElementById("list").innerHTML = x;
    alert("The student you have selected has a grade of " + x + ".");
}
//================================THE END=====================================//