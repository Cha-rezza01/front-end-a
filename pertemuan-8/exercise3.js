// nama, tinggi dan berat badan
let user = {
    firstName: "Rezza",
    weight: 40, 
    height: 1.51, 

// Hitung BMI
    calculateBMI: function() {
        let bmi = this.weight / (this.height * this.height);
        this.BMI = bmi.toFixed(1); 
        
        if (bmi < 16.0) {
            return "Severely Underweight";
        } else if (bmi >= 16.0 && bmi <= 18.4) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "Normal";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            return "Overweight";
        } else if (bmi >= 30.0 && bmi <= 34.9) {
            return "Moderately Obese";
        } else if (bmi >= 35.0 && bmi <= 39.9) {
            return "Severely Obese";
        } else if (bmi >= 40.0) {
            return "Morbidly Obese";
        }
    }
};
// Hasil perhitungan function calculateBMI
console.log(`Name: ${user.firstName}`);
console.log(`Calculated BMI: ${user.BMI} (${user.calculateBMI()})`);