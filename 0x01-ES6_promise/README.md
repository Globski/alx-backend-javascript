# Alx Backend javascript - ES6 Promises
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-v12.11.1-brightgreen)](https://nodejs.org/)
[![Babel](https://img.shields.io/badge/Babel-v7.6.0-blue)](https://babeljs.io/)
[![Jest](https://img.shields.io/badge/Jest-v24.9.0-red)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-v6.4.0-lightgray)](https://eslint.org/)
[![Backend Development](https://img.shields.io/badge/Backend%20Development-Node.js%20%2B%20ES6-orange)](https://www.backend-development.com/)

## Description

This project focuses on understanding and implementing JavaScript ES6 Promises. It covers the creation, handling, and chaining of promises, along with error handling using `try/catch` and async/await syntax. By completing this project, you'll gain practical experience with asynchronous programming in JavaScript and be able to explain the concept of Promises, their usage, and their benefits in asynchronous programming.


## Project Structure

| Task | Description | Source Code |
|------|-------------|-------------|
| 0. Keep every promise you make and only make promises you can keep | Return a Promise using the prototype function `getResponseFromAPI()`. | [0-promise.js](./0-promise.js) |
| 1. Don't make a promise...if you know you can't keep it | Return a promise in `getFullResponseFromAPI(success)`. If `true`, resolve with `{ status: 200, body: 'Success' }`, if `false`, reject with an error object: `The fake API is not working currently`. | [1-promise.js](./1-promise.js) |
| 2. Catch me if you can! | Append handlers in `handleResponseFromAPI(promise)` to log "Got a response from the API" when resolved, and return an empty Error object when rejected. | [2-then.js](./2-then.js) |
| 3. Handle multiple successful promises | Use `uploadPhoto` and `createUser` from `utils.js` in `handleProfileSignup()` to log `body`, `firstName`, and `lastName`. Log "Signup system offline" on error. | [3-all.js](./3-all.js) |
| 4. Simple promise | Returns a resolved promise with `{ firstName: value, lastName: value }` using `signUpUser(firstName, lastName)`. | [4-user-promise.js](./4-user-promise.js) |
| 5. Reject the promises | Return a Promise rejecting with an Error: `$fileName cannot be processed` in `uploadPhoto(filename)`. | [5-photo-reject.js](./5-photo-reject.js) |
| 6. Handle multiple promises | In `handleProfileSignup(firstName, lastName, fileName)`, call `signUpUser` and `uploadPhoto`, returning an array with status and value/error. | [6-final-user.js](./6-final-user.js) |
| 7. Load balancer | Return the value from the first resolved promise in `loadBalancer(chinaDownload, USDownload)`. | [7-load_balancer.js](./7-load_balancer.js) |
| 8. Throw error / try catch | In `divideFunction(numerator, denominator)`, throw an error with message `cannot divide by 0` if denominator is 0; otherwise return the result. | [8-try.js](./8-try.js) |
| 9. Throw an error | Create and return an array `queue` in `guardrail(mathFunction)`, appending the return value or error message, and adding "Guardrail was processed". | [9-try.js](./9-try.js) |
| 10. Await / Async | In `asyncUploadUser()`, call `uploadPhoto` and `createUser`, returning an object with responses or nulls if one fails. | [100-await.js](./100-await.js) |

## Environment
- Node.js version: 12.11.x
- Ubuntu 18.04 LTS

## Requirements
- All JavaScript files should end with a new line.
- All functions must be exported.
- Code should pass linting checks using ESLint.
- Code should be tested using Jest.

## Learning Objectives

- Understand the concept of Promises (how, why, and what).
- Use the `then`, `resolve`, and `catch` methods.
- Utilize all methods of the Promise object.
- Implement `throw` / `try` for error handling.
- Use the `await` operator effectively.
- Create and manage `async` functions.


## Prototypes Used in the Project

| Prototype | Description |
|-----------|-------------|
| `getResponseFromAPI()` | Returns a Promise. |
| `getFullResponseFromAPI(success)` | Returns a resolved or rejected promise based on a boolean input. |
| `handleResponseFromAPI(promise)` | Handles resolution and rejection of a promise with logging. |
| `handleProfileSignup()` | Handles multiple promises (user signup and photo upload) and logs results. |
| `signUpUser(firstName, lastName)` | Returns a resolved promise with user details. |
| `uploadPhoto(filename)` | Returns a rejected promise with an error message. |
| `loadBalancer(chinaDownload, USDownload)` | Returns the result of the first resolved promise. |
| `divideFunction(numerator, denominator)` | Performs division and handles division by zero errors. |
| `guardrail(mathFunction)` | Executes a math function and logs results/errors in a queue. |
| `asyncUploadUser()` | Calls asynchronous functions and returns their results or nulls on failure. |

## How to Use

## 1. Clone the Repository
To get started with the project, first clone the repository to your local machine:
```bash
git clone https://github.com/your-username/alx-backend-javascript.git
```

## 2. Navigate to the Project Directory
Change your working directory to the specific project folder:
```bash
cd alx-backend-javascript/0x01-ES6_promise
```

## 3. Install Node.js
Make sure you have Node.js installed on your machine. If it's not installed, you can install version 12.11.x using the following commands:
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh  # Download Node.js setup script
sudo bash nodesource_setup.sh                                          # Run the setup script
sudo apt install nodejs -y                                             # Install Node.js
```
Verify that Node.js and npm are installed by running:
```bash
node -v   # Outputs the installed Node.js version
npm -v    # Outputs the installed npm version
```

## 4. Install Project Dependencies
To set up your project for JavaScript development, you'll need to create some essential configuration files and install the necessary dependencies. After navigating to the project directory, Create a `package.json`, `babel.config.js`, `utils.js`, and `.eslintrc.js` file. 
- **`babel.config.js`**: This file is used for configuring Babel, a tool that lets you use the latest JavaScript features. Create this file and add your configuration.
- **`.eslintrc.js`**: This file configures ESLint, a tool that helps you write consistent and error-free code. Again, create this file and specify your ESLint settings.
- **`utils.js`**: This is where you can write utility functions that can be reused throughout your project.
- Now that you have your configuration files set up, you can install the necessary libraries and tools. Run the following command:
```bash
npm install
```
This command reads the `package.json` file to download and install all the required packages for the project.

## 5. Run individual scripts with Babel using the dev command:
- If you want to run a specific test file, use:
```bash
npm run dev <task-number>-main.js
```
Replace `<task-number>` with the number corresponding to the task you want to run (e.g., `0`, `1`, etc.).
  
---

## Configuration Files
   - Create a `package.json`, `babel.config.js`, `utils.js`, and `.eslintrc.js` file in your project directory.
   - Add the following configuration files to your project directory:

### **1. `package.json`**
This file manages project dependencies and scripts. Here’s a breakdown:
```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",              // Command to lint the code using ESLint
    "check-lint": "lint [0-9]*.js",                    // Check linting for specific task files
    "dev": "npx babel-node",                            // Run the development server with Babel
    "test": "jest",                                    // Command to run tests using Jest
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest" // Run linting and then tests
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",                          // Babel core for compiling ES6+ code
    "@babel/node": "^7.8.0",                          // Allows using Babel with Node.js
    "@babel/preset-env": "^7.6.0",                    // Preset for compiling modern JavaScript
    "eslint": "^6.4.0",                               // Linting tool
    "eslint-config-airbnb-base": "^14.0.0",          // Airbnb's ESLint configuration
    "eslint-plugin-import": "^2.18.2",                // Plugin to manage ES6 imports
    "eslint-plugin-jest": "^22.17.0",                 // Plugin for Jest integration with ESLint
    "jest": "^24.9.0"                                 // Testing framework
  }
}
```

### **2. `babel.config.js`**
This file configures Babel to transpile modern JavaScript code to a version that Node.js can understand:
```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',                              // Target the current version of Node.js
        },
      },
    ],
  ],
};
```

### **3. `utils.js`**
This file contains helper functions that you will use in the project:
```javascript
export function uploadPhoto() {
  // Simulates uploading a photo and returns a promise
  return Promise.resolve({
    status: 200,                  // HTTP status code
    body: 'photo-profile-1',     // Response body containing photo reference
  });
}

export function createUser() {
  // Simulates creating a user and returns a promise
  return Promise.resolve({
    firstName: 'Guillaume',      // User's first name
    lastName: 'Salva',           // User's last name
  });
}
```

### **4. `.eslintrc.js`**
This file configures ESLint to identify and fix problems in your JavaScript code:
```javascript
// This configuration file is for ESLint, a tool that helps identify and fix problems in JavaScript code.
module.exports = {
  env: {
    browser: false,              // Code is not intended for the browser environment
    es6: true,                   // Enables ES6 syntax
    jest: true,                  // Enable Jest global variables for testing
  },
  extends: [
    'airbnb-base',               // Use Airbnb's base ESLint rules for consistency
    'plugin:jest/all',           // Enable all Jest rules for comprehensive testing support
  ],
  globals: {
    Atomics: 'readonly',         // Prevents Atomics from being modified
    SharedArrayBuffer: 'readonly', // Prevents SharedArrayBuffer from being modified
  },
  parserOptions: {
    ecmaVersion: 2018,           // Specify ECMAScript version to use
    sourceType: 'module',        // Use ES modules for import/export syntax
  },
  plugins: ['jest'],            // Include the Jest plugin for additional rules related to testing
  rules: {
    'no-console': 'off',         // Allow console statements (useful for debugging)
    'no-shadow': 'off',          // Disable the rule that disallows variable shadowing
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',        // Disallow labeled statements to improve readability
      'WithStatement',           // Disallow with statements to avoid scope confusion
    ],
  },
  overrides: [
    {
      files: ['*.js'],           // Apply these settings to all JavaScript files
      excludedFiles: 'babel.config.js', // Exclude Babel configuration from these rules
    }
  ]
};
```
- **Lint your code**:
  ```bash
  npm run lint
  ```
  This command will check your JavaScript files for syntax and style issues based on the rules defined in `.eslintrc.js`.

- **Run tests**:
  ```bash
  npm run test
  ```
  This command will execute all your Jest tests.

- **Run linting and tests together**:
  ```bash
  npm run full-test
  ```
  This command first lints your code and then runs the tests.

---

## Usage

To start working on the tasks, create functions that utilize JavaScript Promises as specified in the project requirements. You can use the helper functions provided in `utils.js`, which includes:

- **`uploadPhoto(filename)`**: Simulates uploading a photo and returns a promise.
- **`createUser(firstName, lastName)`**: Simulates creating a user and returns a promise.

### Example Usage
Here’s how you can call a function from a task file:
```javascript
import { handleProfileSignup } from './3-all';

handleProfileSignup('John', 'Doe', 'john_doe.jpg')
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

---

## To check your JavaScript files for ESLint errors, follow these steps:

1. **Run ESLint**:
   You can run ESLint on your specific files or directories. Use the command:
   ```bash
   npm run lint
   ```
   If you want to check specific files, you can do:
   ```bash
   ./node_modules/.bin/eslint <filename>
   ```
   Replace `<filename>` with the path to your JavaScript file.

2. **Review Errors and Warnings**:
   ESLint will output any errors or warnings it finds in your code. The output will typically include the line number and the specific rule that was violated.

3. **Fix Issues**:
   Go through the reported issues and fix them in your code. ESLint may suggest specific changes based on the rules defined in your `.eslintrc.js` file.

4. **Optional: Auto-fix**:
   ESLint has an auto-fix feature for certain issues. You can run:
   ```bash
   ./node_modules/.bin/eslint <filename> --fix
   ```
   This will automatically fix some of the issues it can resolve.


## To Test Your Functions with Jest, Follow These Steps:
Create a test file named `3-all.test.js` in the same directory as `3-all.js`:

```bash
touch 3-all.test.js
```

##### Example `3-all.test.js`
Create a test file named `3-all.test.js` for the `handleProfileSignup` function
- Here’s how you would write tests for the functions in `3-all.js`:

```javascript
// 3-all.test.js
import handleProfileSignup from './3-all';

describe('handleProfileSignup', () => {
  test('should log user data on success', async () => {
    const response = await handleProfileSignup('John', 'Doe', 'john_doe.jpg');
    expect(response).toEqual(expect.objectContaining({
      body: expect.any(String),
      firstName: 'John',
      lastName: 'Doe',
    }));
  });
});
```

#### Run the Tests

Make sure your test files are named according to the pattern `[0-9]*.test.js` for Jest to recognize them. To run all tests, execute:
```bash
npm run test
```

Or to run a specific test file:

```bash
npm run test <test-file-name>
```

**Execution:**
```javascript

```
---

## Tasks

### 0. Keep every promise you make and only make promises you can keep
- **File**: `0-promise.js`
- **Prototype**: `getResponseFromAPI()`
- **Description**: Return a Promise using this prototype function `getResponseFromAPI()`.
- **Example**:
  ```javascript
   bob@dylan:~$ cat 0-main.js
  import getResponseFromAPI from "./0-promise.js";

  const response = getResponseFromAPI();
  console.log(response instanceof Promise);

  bob@dylan:~$ 
  ```
- **Expected Output**:
  ```bash
  bob@dylan:~$ npm run dev 0-main.js 
  true
  ```

### 1. Don't make a promise...if you know you can't keep it
- **File**: `1-promise.js`
- **Prototype**: `getFullResponseFromAPI(success)`
- **Description**: Returns a promise based on a boolean parameter.
  - If `true`: resolve the promise by passing an object with 2 attributes containing:
    ```json
    {
      "status": 200,
      "body": "Success"
    }
    ```
  - If `false`: reject the promise with an error object containing the message "The fake API is not working currently".
- **Example**:
  ```javascript
  bob@dylan:~$ cat 1-main.js
  import getFullResponseFromAPI from './1-promise';

  console.log(getFullResponseFromAPI(true));
  console.log(getFullResponseFromAPI(false));

  bob@dylan:~$ 
  ```
- **Expected Output**:
  ```bash
  bob@dylan:~$ npm run dev 1-main.js 
  Promise { { status: 200, body: 'Success' } }
  Promise {
    <rejected> Error: The fake API is not working currently
    ...
  }
  ```

---

### 2. Catch me if you can!
- **File**: `2-then.js`
- **Prototype**: `handleResponseFromAPI(promise)`
- **Description**: 
  - Append three handlers to the function to log the response.
  - When the Promise resolves, return an object with the following attributes:
    ```json
    {
      "status": 200,
      "body": "Success"
    }
    ```
  - Log Got a response from the API to the console for every resolution.
  - When the Promise rejects, return an empty Error object.
- **Example**:
  ```javascript
  bob@dylan:~$ cat 2-main.js
  import handleResponseFromAPI from "./2-then";

  const promise = Promise.resolve();
  handleResponseFromAPI(promise);

  bob@dylan:~$ 
  ```
- **Expected Output**:
  ```bash
  bob@dylan:~$ npm run dev 2-main.js 
  Got a response from the API
  ```

---

### 3. Handle multiple successful promises
- **File**: `3-all.js`
- **Prototype**: `handleProfileSignup()`
- **Description**: 
  - import `uploadPhoto` and `createUser` from `utils.js`. 
  - Knowing that the functions in utils.js return promises, use the prototype to collectively resolve all promises and Log `body`, `firstName`, and `lastName` to the console on success.
  - In the event of an error, Log "Signup system offline" to the console.
- **Example**:
  ```javascript
  bob@dylan:~$ cat 3-main.js
  import handleProfileSignup from "./3-all";

  handleProfileSignup();

  bob@dylan:~$ 
  ```
- **Expected Output**:
  ```bash
  bob@dylan:~$ npm run dev 3-main.js 
  photo-profile-1 Guillaume Salva
  ```
---
### 4. Simple promise
- **File**: `4-user-promise.js`
- **Prototype**: `signUpUser(firstName, lastName)`
- **Description**: Using the prototype below:
    ```javascript
    function signUpUser(firstName, lastName) {
    }
    ```
  - Return a resolved promise with user details(object).
    ```javascript
    {
    firstName: value,
    lastName: value,
    }
    ```
- **Example**:
  ```javascript
  bob@dylan:~$ cat 4-main.js
  import signUpUser from "./4-user-promise";

  console.log(signUpUser("Bob", "Dylan"));

  bob@dylan:~$ 
  ```
- **Expected Output**:
  ```bash
  bob@dylan:~$ npm run dev 4-main.js 
  Promise { { firstName: 'Bob', lastName: 'Dylan' } }
  ```
---
### 5. Reject the promises
- **File**: `5-photo-reject.js`
- **Prototype**: `uploadPhoto(filename)`
- **Description**:  Write and export a function named uploadPhoto. It should accept one argument fileName (string). The function should return a rejected promise with an error message with the string $fileName cannot be processed
   ```javascript
  export default function uploadPhoto(filename) {

  }
   ```
- **Example**:. 
  ```javascript
   bob@dylan:~$ cat 5-main.js
  import uploadPhoto from './5-photo-reject';

  console.log(uploadPhoto('guillaume.jpg'));

  bob@dylan:~$ 
  ```
- **Expected Output**:
  ```bash
  bob@dylan:~$ npm run dev 5-main.js 
  Promise {
    <rejected> Error: guillaume.jpg cannot be processed
  }
  ```
---
### 6. Handle multiple promises
- **File**: `6-final-user.js`
- **Prototype**: `handleProfileSignup(firstName, lastName, fileName)`
- **Description**:
  - Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.
  - Write and export a function named handleProfileSignup. It should accept three arguments firstName (string), lastName (string), and fileName (string).  The function should call the two other functions `signUpUser` and `uploadPhoto`.
  - When the promises are all settled it should return an array with the status and value/error.
    ```json
     [
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
    ]
    ```
- **Example**:
  ```javascript
   bob@dylan:~$ cat 6-main.js
  import handleProfileSignup from './6-final-user';

  console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

  bob@dylan:~$
  ```
- **Expected Output**:
  ```bash
  bob@dylan:~$ npm run dev 6-main.js 
  Promise { <pending> }
  ```
---
### 7. Load balancer
- **File**: `7-load_balancer.js`
- **Prototype**: `loadBalancer(chinaDownload, USDownload)`
- **Description**: Write and export a function named loadBalancer. It should accept two arguments chinaDownload (Promise) and USDownload (Promise). The function should return the value returned by the promise that resolved the first.
    ```javascript
  export default function loadBalancer(chinaDownload, USDownload) {

  }
  ```  
- **Example**:
  ```javascript
   bob@dylan:~$ cat 7-main.js
  import loadBalancer from "./7-load_balancer";

  const ukSuccess = 'Downloading from UK is faster';
  const frSuccess = 'Downloading from FR is faster';

  const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
  });

  const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
  });

  const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
  });

  const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
  }

  test();

  bob@dylan:~$ 
  ```
- **Expected Output**:
  ```bash
  bob@dylan:~$ npm run dev 7-main.js 
  Downloading from UK is faster
  Downloading from FR is faster
  ```
---
### 8. Throw error / try catch
- **File**: `8-try.js`
- **Prototype**: `divideFunction(numerator, denominator)`
- **Description**: Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number). When the denominator argument is equal to 0, the function should throw a new error with the message cannot divide by 0. Otherwise, it should return the numerator divided by the denominator.
    ```javascript
  export default function divideFunction(numerator, denominator) {

  }
  ``` 
- **Example**:
  ```javascript
  bob@dylan:~$ cat 8-main.js
  import divideFunction from './8-try';

  console.log(divideFunction(10, 2));
  console.log(divideFunction(10, 0));

  bob@dylan:~$ 
  ```
- **Expected Output**:
  ```bash
   bob@dylan:~$ npm run dev 8-main.js 
  5
  ..../8-try.js:15
  throw Error('cannot divide by 0');
  ^
  .....
  ```
---
### 9. Throw an error
- **File**: `9-try.js`
- **Prototype**: `guardrail(mathFunction)`
- **Description**: 
  - Write a function named guardrail that will accept one argument mathFunction (Function).
  - The function should create and return an array named queue.
  - When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message Guardrail was processed should be added to the queue.
    ```json
    [
    1000,
    'Guardrail was processed',
    ]
  ``` 
- **Example**:
  ```javascript
   bob@dylan:~$ cat 9-main.js
  import guardrail from './9-try';
  import divideFunction from './8-try';

  console.log(guardrail(() => { return divideFunction(10, 2)}));
  console.log(guardrail(() => { return divideFunction(10, 0)}));

  bob@dylan:~$ 
  ```
- **Expected Output**:
  ```bash
  bob@dylan:~$ npm run dev 9-main.js 
  [ 5, 'Guardrail was processed' ]
  [ 'Error: cannot divide by 0', 'Guardrail was processed' ]
  ```
---
### 10. Await / Async
- **File**: `100-await.js`
- **Prototype**: `asyncUploadUser()`
- **Description**: 
  - Import `uploadPhoto` and `createUser`  from utils.js
  - Write an async function named asyncUploadUser that will call these two functions and return an object with the following format:
```javascript
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
If one of the async function fails, return an empty object. Example:
```
```javascript
{
  photo: null,
  user: null,
}
```
- **Example**:
  ```javascript
  bob@dylan:~$ cat 100-main.js
  import asyncUploadUser from "./100-await";

  const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
  };

  test();

  bob@dylan:~$ 
  ```
- **Expected Output**:
  ```bash
  bob@dylan:~$ npm run dev 100-main.js 
  {
    photo: { status: 200, body: 'photo-profile-1' },
    user: { firstName: 'Guillaume', lastName: 'Salva' }
  }
  ```
## Additional Notes
A **Promise** in JavaScript is an object that helps you manage asynchronous operations. When you perform an action that takes time—like fetching data from a server—JavaScript doesn’t wait for that action to complete. Instead, it continues executing the rest of your code. A Promise allows you to handle the result of that action later, once it’s finished.

A Promise can be in one of three states:

1. **Pending**: The initial state, meaning the operation is still ongoing.
2. **Fulfilled**: The operation completed successfully, and the Promise now has a result.
3. **Rejected**: The operation failed, and the Promise has a reason for the failure (usually an error).

You can attach functions to handle these outcomes using the `.then()` and `.catch()` methods. The `.then()` method runs when the Promise is fulfilled, allowing you to work with the result. The `.catch()` method runs if the Promise is rejected, letting you handle errors.

For example, when you request data from an API, you can use a Promise to wait for the response. This keeps your code cleaner and more organized, avoiding the "callback hell" that can happen with nested functions. Overall, Promises make working with asynchronous code easier and more manageable.
