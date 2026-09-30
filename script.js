// SpendWise - JavaScript foundation
// Collects budget info from the user, calculates the balance, and logs results.

// ----- Application data (variables) -----
const appName = "SpendWise";      // const: never changes
let monthlyBudget = 0;            // number: total money available
let totalExpenses = 0;            // number: total money spent
let remainingBalance = 0;         // number: budget minus expenses
let userName = "";                // string: the user's name

// ----- Functions -----

// Asks the user for a number and keeps asking until it is valid.
function askForNumber(message) {
  let value = NaN;
  while (isNaN(value) || value < 0) {
    const answer = prompt(message);
    if (answer === null) {
      return 0; // user pressed Cancel
    }
    value = Number(answer);
    if (answer.trim() === "" || isNaN(value) || value < 0) {
      alert("Please enter a valid positive number.");
      value = NaN;
    }
  }
  return value;
}

// Budget calculation: returns what is left after spending.
function calculateBalance(budget, expenses) {
  return budget - expenses;
}

// Returns the percentage of the budget that has been spent.
function calculatePercentSpent(budget, expenses) {
  if (budget === 0) {
    return 0;
  }
  return (expenses / budget) * 100;
}

// Shows clearly labeled results in the browser console.
function displayResults(name, budget, expenses, balance, percentSpent) {
  console.log("===== " + appName + " Budget Summary =====");
  console.log("User: " + name);
  console.log("Monthly Budget: " + budget);
  console.log("Total Expenses: " + expenses);
  console.log("Remaining Balance: " + balance);
  console.log("Percentage Spent: " + percentSpent.toFixed(1) + "%");
  if (balance < 0) {
    console.log("Warning: You have overspent your budget!");
  }
}

// Runs the whole app: collect input -> calculate -> display.
function runSpendWise() {
  userName = prompt("Welcome to " + appName + "! What is your name?") || "Guest";
  monthlyBudget = askForNumber("Enter your monthly budget:");
  totalExpenses = askForNumber("Enter your total expenses so far:");

  remainingBalance = calculateBalance(monthlyBudget, totalExpenses);
  const percentSpent = calculatePercentSpent(monthlyBudget, totalExpenses);

  displayResults(userName, monthlyBudget, totalExpenses, remainingBalance, percentSpent);
}

// ----- Start the app when the button is clicked -----
document.getElementById("startBtn").addEventListener("click", runSpendWise);
console.log(appName + " script loaded successfully.");
