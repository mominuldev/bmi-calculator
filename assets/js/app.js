const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

// Add event listener to the calculate button
calculateBtn.addEventListener("click", function () {
    // Get the weight and height values from the form
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // convert to meters

    // Calculate the BMI
    const bmi = weight / (height * height);

    // Add Class to the result
    result.classList.add("alert-success");

    // Display the result on the web page
    result.textContent = "Your BMI is " + bmi.toFixed(2);
});