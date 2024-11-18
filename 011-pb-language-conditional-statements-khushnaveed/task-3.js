let mode = "light";
let backgroundColor = "white";
let textColor = "black";

if (mode == "light") {

  console.log(`
        Current mode: ${mode} 
        Background color: ${backgroundColor}
        Text color: ${textColor} `);

} else if (mode == "dark") {

  backgroundColor = "black";
  textColor = "white";
  console.log(`
        Current mode: ${mode} 
        Background color: ${backgroundColor}
        Text color: ${textColor} `);

} else {

  console.log("Invalid Mode!");
  
}
