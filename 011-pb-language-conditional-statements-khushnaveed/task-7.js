let password = "slkafjwters";

if (
  password.length > 8 &&
  password[0] != password[password.length - 1] &&
  password != "12345678" &&
  password[0] != " " &&
  password[password.length - 1] != "!"
) {
  console.log(`Is the password ${password} valid? true`);
} else {
  console.log(`Is the password ${password} valid? false`);
}
