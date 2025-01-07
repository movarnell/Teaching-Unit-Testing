# Teaching Students About Unit Testing with Mocha and Chai

Welcome students, if you're here you're probably looking to learn about unit testing in JavaScript. This repository contains a simple project to help you get started with Mocha and Chai testing that you can use as a reference when working through the videos in Promineo Tech's Front End bootcamp.

## Purpose

The purpose of this repository is to help students understand the basics of unit testing in JavaScript. It includes simple functions and their corresponding tests to demonstrate how to write and run tests using Mocha and Chai.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Cloning the Repository

To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/yourusername/teaching-unit-testing.git
```

Navigate to the project directory:

```bash
cd teaching-unit-testing
```

### Installing Dependencies

Install the necessary dependencies by running:

```bash
npm install
```

This will install Mocha, Chai, and any other dependencies listed in the `package.json` file.
*Note that the versions of Mocha and Chai used were Mocha 10.2.0 and Chai 4.3.7

### Running the Tests

To run the tests, simply execute open the index.html file in your browser and the tests will be on the page.

This will run the tests using Mocha and display the results in your terminal.

## Project Structure

- `index.js`: Contains the functions to be tested.
- `index.test.js`: Contains the test cases for the functions in `index.js`.
- `test.html`: A simple HTML file to run the tests in a browser.

## Functions

The following functions are included in `index.js`:

- `add(a, b)`: Adds two numbers.
- `subtract(a, b)`: Subtracts the second number from the first.
- `multiply(a, b)`: Multiplies two numbers.
- `divide(a, b)`: Divides the first number by the second. Throws an error if the second number is zero.

## License

This project is licensed under the MIT License.

Happy Testing!