# Alx Backend Javascript - ES6 Basics

## Description

This project focuses on understanding and implementing the core features of ES6 (ECMAScript 2015) in JavaScript. By the end of this project, you will be able to confidently explain and utilize new features introduced in ES6, such as arrow functions, template literals, and the rest/spread syntax. You'll also understand their applications in modern JavaScript development.

## Project Structure

| Task                              | Description                                                                                          | Source Code                  |
|-----------------------------------|------------------------------------------------------------------------------------------------------|-------------------------------|
| 0. Const or let?                  | Modify `taskFirst` to use `const` and `taskNext` to use `let`.                                   | [0-constants.js](0-constants.js)       |
| 1. Block Scope                    | Modify `taskBlock` to prevent variable overwriting in the conditional block.                        | [1-block-scoped.js](1-block-scoped.js) |
| 2. Arrow Functions                | Rewrite the function to use arrow syntax.                                                           | [2-arrow.js](2-arrow.js)     |
| 3. Parameter Defaults              | Condense `getSumOfHoods` to use default parameter values.                                          | [3-default-parameter.js](3-default-parameter.js) |
| 4. Rest Parameter Syntax for Functions | Modify the function to return the number of arguments using rest parameters.                         | [4-rest-parameter.js](4-rest-parameter.js) |
| 5. The Wonders of Spread Syntax    | Use spread syntax to concatenate arrays and string characters.                                        | [5-spread-operator.js](5-spread-operator.js) |
| 6. Take Advantage of Template Literals | Rewrite return statement to use template literals.                                                 | [6-string-interpolation.js](6-string-interpolation.js) |
| 7. Object Property Value Shorthand Syntax | Modify the budget object to use shorthand property names.                                        | [7-getBudgetObject.js](7-getBudgetObject.js) |
| 8. No Need to Create Empty Objects Before Adding Properties | Rewrite the function to use ES6 computed property names.                                      | [8-getBudgetCurrentYear.js](8-getBudgetCurrentYear.js) |
| 9. ES6 Method Properties          | Rewrite `getFullBudgetObject` to use ES6 method properties.                                        | [9-getFullBudget.js](9-getFullBudget.js) |
| 10. For...of Loops                | Rewrite `appendToEachArrayValue` to use for...of operator.                                         | [10-loops.js](10-loops.js)   |
| 11. Iterator                       | Create `createEmployeesObject` to return an object with department names and employees.             | [11-createEmployeesObject.js](11-createEmployeesObject.js) |
| 12. Let's Create a Report Object   | Write `createReportObject` to summarize employee data.                                             | [12-createReportObject.js](12-createReportObject.js) |
| 13. Iterating Through Report Objects | Write `createIteratorObject` to iterate through every employee.                                    | [100-createIteratorObject.js](100-createIteratorObject.js) |
| 14. Iterate Through Object         | Write `iterateThroughObject` to return employee names in a string separated by `\|`.                | [101-iterateThroughObject.js](101-iterateThroughObject.js) |

## Environment
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.

## Requirements

- All your files should end with a new line.
- All your code should use the `.js` extension.
- Use the Jest Testing Framework for testing your functions.
- Follow proper coding standards as defined in ESLint.
- Ensure all functions are exported appropriately.

## Learning Objectives

At the end of this project, you should be able to:

- Explain what ES6 is and its significance.
- Identify new features introduced in ES6.
- Distinguish between constants and variables.
- Understand block-scoped variables.
- Use arrow functions and set default parameters.
- Implement rest and spread function parameters.
- Utilize string templating in ES6.
- Create and manage objects with properties in ES6.
- Work with iterators and `for-of` loops.

## How to Use
1. Install Node.js and required dependencies.
2. Clone the repository and navigate to the project directory.
3. Run tests using `npm run dev <filename>`.

### Setup Instructions

1. **Install NodeJS 12.11.x**:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   nodejs -v  # should output v12.11.1
   npm -v     # should output 6.11.3
   ```

2. **Configuration Files**:
   - In your project directory, create a `package.json`, `babel.config.js` and `.eslintrc.js` file
   - Add the following configuration files to your project directory:
 
- `package.json`
```

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```
- `babel.config.js`
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```
- `.eslintrc.js`
```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```
3. **Install Dependencies Jest, Babel, and ESLint**:
   - run:
     ```bash
     npm install
     ```
## Tasks

0. **Const or let?**
   - **File:** `0-constants.js`
   - Modify the `taskFirst` function to instantiate variables using `const`.
   - Modify the `taskNext` function to instantiate variables using `let`.

1. **Block Scope**
   - **File:** `1-block-scoped.js`
   - Modify the variables inside the `taskBlock` function to prevent overwriting inside the conditional block.

2. **Arrow Functions**
   - **File:** `2-arrow.js`
   - Rewrite the standard function `add` to use ES6’s arrow syntax.

3. **Parameter Defaults**
   - **File:** `3-default-parameter.js`
   - Condense the internals of the `getSumOfHoods` function to 1 line using default parameter values.

4. **Rest Parameter Syntax for Functions**
   - **File:** `4-rest-parameter.js`
   - Modify the function to return the number of arguments passed to it using the rest parameter syntax.

5. **The Wonders of Spread Syntax**
   - **File:** `5-spread-operator.js`
   - Use spread syntax to concatenate 2 arrays and each character of a string in the function.

6. **Take Advantage of Template Literals**
   - **File:** `6-string-interpolation.js`
   - Rewrite the return statement to use a template literal for variable substitution.

7. **Object Property Value Shorthand Syntax**
   - **File:** `7-getBudgetObject.js`
   - Modify the function’s budget object to use shorthand property names.

8. **No Need to Create Empty Objects Before Adding Properties**
   - **File:** `8-getBudgetCurrentYear.js`
   - Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names.

9. **ES6 Method Properties**
   - **File:** `9-getFullBudget.js`
   - Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object.

10. **For...of Loops**
    - **File:** `10-loops.js`
    - Rewrite the `appendToEachArrayValue` function to use the ES6 for...of operator.

11. **Iterator**
    - **File:** `11-createEmployeesObject.js`
    - Write a function named `createEmployeesObject` that returns an object with department names and employee lists.

12. **Let's Create a Report Object**
    - **File:** `12-createReportObject.js`
    - Write a function named `createReportObject` to return an object containing all employees and a method to get the number of departments.

13. **Iterating Through Report Objects**
    - **File:** `100-createIteratorObject.js`
    - Write a function named `createIteratorObject` to iterate through every employee in every department.

14. **Iterate Through Object**
    - **File:** `101-iterateThroughObject.js`
    - Write a function named `iterateThroughObject` to return every employee name in a string, separated by `|`.

## Additional Notes

1. Don't forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.
2. Ensure that all functions are exported for testing properly.
3. Make sure to follow coding standards and use modern JavaScript practices.

This project is an excellent opportunity to familiarize yourself with ES6 features, improving your JavaScript skills and preparing you for more advanced topics in modern web development. Happy coding!
