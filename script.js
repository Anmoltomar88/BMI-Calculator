let output=document.getElementById("out");
const calculateBMI = () => {
    let height = parseFloat(document.getElementById("num").value);
    let weight = parseFloat(document.getElementById("num1").value);

    if (!isNaN(height) && !isNaN(weight)) {
        let heightInMeters = height / 100;
        let bmi = weight / Math.pow(heightInMeters, 2);
        // console.log("BMI:", bmi);
        output.innerHTML=bmi;

    } else {
        alert("Invalid input. Please enter numeric values for height and weight.");
    }
};
