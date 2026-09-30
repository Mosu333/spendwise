# SpendWise

## What the project does
SpendWise is a simple budgeting app. It asks the user for their name, monthly budget and total expenses, then works out how much money is left and how much of the budget has been spent. Results are shown in the browser console.

## How to run it
1. Open `index.html` in a browser.
2. Press **F12** and open the **Console** tab.
3. Click **Start Budget Check** and answer the prompts.

## JavaScript concepts implemented
- Variables (`const` and `let`)
- Data types (strings and numbers)
- User input with `prompt()`
- Arithmetic calculations
- Functions with parameters and return values
- Conditionals and loops (input validation, overspending warning)
- Console output with `console.log()`

## How variables are used
- `const appName` holds the app name because it never changes.
- `let monthlyBudget`, `let totalExpenses` and `let remainingBalance` hold numbers that change based on user input.
- `let userName` holds the user's name as a string.

## How user input is collected
`prompt()` asks for the user's name, budget and expenses. The `askForNumber()` function checks the answer and keeps asking until a valid positive number is entered. The text answer is converted to a number with `Number()`.

## How calculations are performed
- Remaining balance = budget - expenses
- Percentage spent = (expenses / budget) x 100

## How functions help organize the code
- `askForNumber()` collects and validates numeric input.
- `calculateBalance()` calculates the remaining balance.
- `calculatePercentSpent()` calculates the percentage of the budget spent.
- `displayResults()` prints clearly labeled results to the console.
- `runSpendWise()` runs the steps in order.

Splitting the code into functions keeps each job separate, makes the code easier to read, and lets the same function be reused.

## Example console output
```
===== SpendWise Budget Summary =====
User: Sabra
Monthly Budget: 50000
Total Expenses: 15000
Remaining Balance: 35000
Percentage Spent: 30.0%
```
