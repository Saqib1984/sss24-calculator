import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([{
        name: "month",
        type: "number",
        message: "Enter your month"
    }]);
console.log(chalk.green("Insha Allah, in ") + chalk.red.bold((12 - answer.month)) + chalk.yellow(" month you will be in december."));
console.log(chalk.red.bold("this is my data"));
console.log(chalk.green("Hello, ") + chalk.yellow("world"));
