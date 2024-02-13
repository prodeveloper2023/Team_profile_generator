# Team_profile_generator

![npm](https://badge.fury.io/js/inquirer.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This GitHub repository houses a Node.js command-line application designed for managing software engineering teams. It captures input about team members and produces an HTML webpage displaying their details. Jest tests validate the functionality of the application, ensuring its accuracy and reliability.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Technology Used](#technology-used)
- [Questions](#questions)

## Installation

To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command `npm init` into the terminal. Inquirer must then be installed by entering `npm install inquirer`. Finally, the program can then be run by entering `node develop/index.js` into the command line, and answering each question appropriately.

```
npm init -y
npm i -D jest
npm install inquirer

```

## Usage

Inquirer is installed with npm command: `npm install inquirer`. Then you can load the module into your code with a require call: `const inquirer = require(‘inquirer’);`

1. Enter management information
2. You will be redirected to a menu, where you can choose to add an engineer, add an intern, or end the application
3. If you choose to add an engineer or an intern, you will be reprompted to the menu until you choose to end the application
4. Once you end the application, your software team will be generated in an HTML file. A sample HTML file is provided in the output folder as team.html to demonstrate the result at the end. Here is a screenshot:

![Team profile](./images/Screenshot%202024-02-13%20at%201.54.34%20am.png)

## License

This application is rendered under MIT

## Contributors

To contribute to Team_profile_generator, clone this repo locally and commit your code on a separate branch.

## Tests

Tests are done through the terminal using command `npm run test`. All test files have passed. Here is a screenshot for the passed test in the console:

![Test](./images/Screenshot%202024-02-13%20at%201.28.40%20am.png)

## Technology Used

- HTML
- CSS
- JavaScript
- Node.js
- Inquirer
- Path
- Jest

## Questions

My Github username is prodeveloper2023, which can be accessed here https://github.com/prodeveloper2023/Team_profile_generator.

You can reach me at palindrome1988@gmail.com with additional questions.
