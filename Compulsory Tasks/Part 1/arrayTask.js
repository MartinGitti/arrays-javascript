// ====================== PART 1 ================================ //
// Array created according to task specifications.
let languages = ["Angular", "#C", "PHP", "Python", "Ruby"];
let langLength = languages.length;
let text = "";

// Loop through array to list array values in HTML page list..
for (let i = 0; i < langLength; i++) {
  text += languages[i] + "<br>";
}

// Function to diplay list of array values
function displayList() {
document.getElementById("favLanguages").innerHTML = text;
}
console.log(languages);

// Array created according to task specifications.
let myJSTestResults = [80, 85, 95, 100, 90];

// First method to sum up the total of the array values.
let sum = 0;
for( let i = 0; i < myJSTestResults.length; i++) {
  sum += myJSTestResults[i];
}
console.log(sum);

// Function to display array values on HTML page.
let values = myJSTestResults;
function displayResults() {
  for (let i = 0; i < myJSTestResults.length; i++) {
     myJSTestResults[i];
  }
  document.getElementById("result").innerHTML = values;
  }
  console.log(myJSTestResults);

// Second method used to sum the total of the array values.
let sum2 = myJSTestResults.reduce(function(a,b){
  return a + b;
})
console.log(sum2);

// Function to display average result of array values upon click.
function displayAverage() {
  let result = sum/myJSTestResults.length;
  document.getElementById("result").innerHTML = result;
}
console.log(sum/myJSTestResults.length);
//================================THE END=====================================//