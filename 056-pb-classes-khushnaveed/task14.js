/* Task 14: Create a TemperatureConverter Class
Create a class called TemperatureConverter.
Add methods:
celsiusToFahrenheit(celsius) - This method should convert a temperature from Celsius to Fahrenheit.
fahrenheitToCelsius(fahrenheit) - This method should convert a temperature from Fahrenheit to Celsius. */

class TemperatureConverter {
  constructor() {}

  celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
}

const temperature = new TemperatureConverter();

console.log(temperature.celsiusToFahrenheit(25));
console.log(temperature.fahrenheitToCelsius(77));
