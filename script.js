// SpendWise - JavaScript Foundation
console.log("SpendWise script loaded successfully!");

// ---------- 1. Store application data (variables) ----------
let userName = "";          // string
let monthlyBudget = 0;      // number
let totalExpenses = 0;      // number
let remainingBalance = 0;   // number
let expenseCount = 0;       // number
const currency = "$";       // constant string

// ---------- 2. Reusable functions ----------

// Asks for a number and keeps asking until it is valid
function getNumberInput(message) {
  let value = NaN;
  while (isNaN(value) || value < 0) {
    const input = prompt(message);
    if (input === null) return 0; // user pressed Cancel
    value = parseFloat(input);
  }
  return value;
}

// Adds a list of expenses together
function calculateTotalExpenses(expenses) {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
  }
  return total;
}

// Budget minus expenses
function calculateRemainingBalance(budget, expenses) {
  return budget - expenses;
}

// Percentage of the budget that has been spent
function calculatePercentSpent(budget, expenses) {
  if (budget === 0) return 0;
  return (expenses / budget) * 100;
}

// Prints clearly labelled results to the console
function displayResults() {
  console.log("===== SpendWise Budget Summary =====");
  console.log("User: " + userName);
  console.log("Monthly Budget: " + currency + monthlyBudget.toFixed(2));
  console.log("Number of Expenses: " + expenseCount);
  console.log("Total Expenses: " + currency + totalExpenses.toFixed(2));
  console.log("Remaining Balance: " + currency + remainingBalance.toFixed(2));
  console.log("Percent of Budget Spent: " + calculatePercentSpent(monthlyBudget, totalExpenses).toFixed(1) + "%");

  if (remainingBalance < 0) {
    console.log("Warning: You have gone over budget!");
  } else {
    console.log("Great job! You are within your budget.");
  }
}

// ---------- 3. Collect user input ----------
function runSpendWise() {
  userName = prompt("Welcome to SpendWise! What is your name?") || "Guest";
  monthlyBudget = getNumberInput("Enter your monthly budget:");
  expenseCount = getNumberInput("How many expenses do you want to enter?");

  const expenses = [];
  for (let i = 1; i <= expenseCount; i++) {
    expenses.push(getNumberInput("Enter amount for expense " + i + ":"));
  }

  // ---------- 4. Calculations ----------
  totalExpenses = calculateTotalExpenses(expenses);
  remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);

  // ---------- 5. Display results ----------
  displayResults();
}

runSpendWise();
