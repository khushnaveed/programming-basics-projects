/**
 * Task 5
 */

import readlineSync from "readline-sync";

let input = "";

do {
    input = readlineSync.question("Are you sure? (yes/no):");
} while (input !== "yes" && input !== "no");