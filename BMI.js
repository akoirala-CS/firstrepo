<!DOCTYPE html>
<html>
  <head>
    <title>BMI Calculator</title>
    <script>
      function calculateBMI() {
        // Get input values from the user
        var weight = parseFloat(document.getElementById("weight").value);
        var height = parseFloat(document.getElementById("height").value);

        // Calculate BMI
        var bmi = weight / (height * height);

        // Display the result
        document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
      }
    </script>
  </head>
  <body>
    <h1>BMI Calculator</h1>
    <label>Weight (kg): </label>
    <input type="number" id="weight"><br><br>
    <label>Height (m): </label>
    <input type="number" id="height"><br><br>
    <button onclick="calculateBMI()">Calculate BMI</button><br><br>
    <div id="result"></div>
  </body>
</html>