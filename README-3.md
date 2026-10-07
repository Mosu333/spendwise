# SpendWise

## What the Project Does
SpendWise is a budgeting web app that helps users plan their money. In this stage, I added JavaScript so the app can collect a user's budget and expenses, calculate how much they have left, and show a summary in the browser console.

## JavaScript Concepts Implemented
- Variables (`let` and `const`)
- Data types (strings, numbers, arrays)
- User input with `prompt()`
- Arithmetic calculations
- Loops and conditionals (`for`, `while`, `if/else`)
- Reusable functions
- Console output with `console.log()`

## How Variables Are Used
Variables store the key budgeting data: `userName` (string), `monthlyBudget`, `totalExpenses`, `remainingBalance` and `expenseCount` (numbers), and `currency` (a constant). Expenses are collected in an array called `expenses`.

## How User Input Is Collected
The app uses `prompt()` to ask for the user's name, monthly budget, number of expenses, and each expense amount. The `getNumberInput()` function converts the input with `parseFloat()` and asks again if the value is not a valid number.

## How Calculations Are Performed
- Total expenses: all expense amounts are added together in a loop.
- Remaining balance: `monthlyBudget - totalExpenses`.
- Percent spent: `(totalExpenses / monthlyBudget) * 100`.

## How Functions Help Organize the Code
- `getNumberInput()`: collects and validates numeric input
- `calculateTotalExpenses()`: sums the expenses
- `calculateRemainingBalance()`: computes what is left
- `calculatePercentSpent()`: computes the percentage spent
- `displayResults()`: prints a labelled summary to the console
- `runSpendWise()`: runs the whole flow in order

Functions keep each task separate, avoid repeated code, and make the program easier to read and test.

## How to Run
1. Open `index.html` in a browser.
2. Press `F12` and open the **Console** tab.
3. Answer the prompts and read the summary in the console.
