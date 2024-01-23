const calculateBMI = () => {
    let height = parseFloat(document.getElementById("num").value);
    let weight = parseFloat(document.getElementById("num1").value);
    let output = document.getElementById("out");

    if (!isNaN(height) && !isNaN(weight)) {
        let heightInMeters = height / 100;
        let bmi = weight / Math.pow(heightInMeters, 2);
        output.innerHTML = "BMI: " + bmi.toFixed(2);

        let category = getCategory(bmi);
        output.innerHTML += "<br>Category: " + category;

    } else {
        alert("Invalid input. Please enter numeric values for height and weight.");
    }
};

const getCategory = (bmi) => {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
};
