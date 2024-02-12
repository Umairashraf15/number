#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function startFunc() {
    const systemNum = Math.floor(Math.random() * 10);
    const userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter your number b/w 1 to 10: "
        }
    ]);
    const { userGuess } = userNum;
    console.log(chalk.blue("Your Guess: ", userGuess));
    console.log(chalk.green("\nSystem's Generated number: ", systemNum));
    if (userGuess === systemNum) {
        console.log(chalk.magenta("Your guess is correct."));
        console.log(chalk.yellow("You won!"));
    }
    else {
        console.log(chalk.red("Better luck next time."));
    }
}
async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to Continue? press Y or N."
        });
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes");
}
startAgain();

export{};