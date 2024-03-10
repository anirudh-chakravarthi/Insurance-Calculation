document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateBtn").addEventListener("click", function() {
        // Get input values
        var ageRange = document.getElementById("ageRange").value;
        var salary = parseFloat(document.getElementById("salary").value)*12;
        var maritalStatus = document.querySelector('input[name="maritalStatus"]:checked').value;
        var dependents = parseInt(document.getElementById("dependents").value);

        // Calculate Future Income Contribution

        // Calculate Insurance Amount
        var baseSalary = salary/12;
        var maritalStatusDescription = "Unmarried";
        var dependentsDescription = dependents;
        var RevisedSalary = salary;
        var ageMultiplier = 0;
        var insuranceAmount = 0;
        var minus=0;

        switch (ageRange) {
            case '15-20':
                ageMultiplier = 18;
                break;
            case '21-25':
                ageMultiplier = 17;
                break;
            case '26-30':
                ageMultiplier = 16;
                break;
            case '31-35':
                ageMultiplier = 15;
                break;
            case '36-40':
                ageMultiplier = 14;
                break;
            case '41-45':
                ageMultiplier = 13;
                break;
            case '46-50':
                ageMultiplier = 12;
                break;
            case '51-55':
                ageMultiplier = 11;
                break;
            case '55-60':
                ageMultiplier = 9;
                break;
            case '61-65':
                ageMultiplier = 7;
                break;
            case '66-70':
            case 'above70':
                ageMultiplier = 5;
                break;
        }
        var futureIncome = 0;
        if (maritalStatus === 'unmarried') {

            RevisedSalary = salary * 0.5;

            if (ageRange !== 'above70' && parseInt(ageRange.split('-')[0]) < 50) {
                futureIncome = RevisedSalary * 0.5;
                minus=0.5;
            }
            insuranceAmount = (RevisedSalary+futureIncome) * ageMultiplier;
            maritalStatusDescription = "Unmarried";

        } else if (maritalStatus === 'married') {
            if (dependents >= 2 && dependents <= 3) {
                minus=0.67
                RevisedSalary = salary * 0.67;
                
            } else if (dependents >= 4 && dependents <= 6) {
                minus=0.75;
                RevisedSalary = salary * 0.75;
               
            } else if (dependents > 6) {
                minus=0.8;
                RevisedSalary = salary * 0.8;
                
            }

            if (ageRange !== 'above70' && parseInt(ageRange.split('-')[0]) < 50) {
                futureIncome = RevisedSalary * 0.5;
            }
            insuranceAmount = (RevisedSalary+futureIncome)* ageMultiplier;
            maritalStatusDescription = "Married";
        }

        // Update HTML table
        document.getElementById("futureIncome").innerText = RevisedSalary+"* 0.5 = "+futureIncome.toFixed(2);
        document.getElementById("baseSalary").innerText = baseSalary+"* 12 = "+salary;
        document.getElementById("maritalStatus").innerText = maritalStatusDescription;
        document.getElementById("dependentsCount").innerText = dependentsDescription;
        document.getElementById("RevisedSalary").innerText = salary+"* "+minus+" = "+RevisedSalary.toFixed(2);
        document.getElementById("ageMultiplier").innerText = ageMultiplier;
        document.getElementById("insuranceAmount").innerText = "("+RevisedSalary+"+"+futureIncome+") * "+ageMultiplier+"= "+insuranceAmount.toFixed(2);

        // Show result table
        document.getElementById("resultTable").style.display = "block";
    });
});
