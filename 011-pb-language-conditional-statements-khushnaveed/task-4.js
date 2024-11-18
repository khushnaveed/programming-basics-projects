let isMilkAvailable = false;
let isBreadAvailable = false;
let isAppleAvailable = false;

if (isBreadAvailable == true) {
  console.log("Eat a sandwich");
} else if (isBreadAvailable == false && isMilkAvailable == true) {
  console.log("Some milk with cereals will be ok");
} else if (isMilkAvailable == false && isAppleAvailable == true) {
  console.log("Ok, I guess I'll just eat an apple");
} else if (
  isMilkAvailable == false &&
  isBreadAvailable == false &&
  isAppleAvailable == false
) {
  console.log("I'll have breakfast outside!");
} else {
  console.log("No idea!");
}
