/* Write a program that accepts an argument with a name from the terminal.
ave the name in a variable and then ou
The program should stput a greeting, like:

For example:
```plaintext
> node task-2.js Sandy
Hello Sandy!

> node task-2.js Mike 
Hello Mike!
``` */

console.log(process.argv[2]);