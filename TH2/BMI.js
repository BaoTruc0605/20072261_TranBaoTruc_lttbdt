function calculateBMI() {
    // var massMark = 78
    // let heightMark = 1.69
    // var massJohn = 92
    // let heightJohn = 1.95
    if (checkInput()) {
        var massMark = parseInt(document.getElementById("massMark").value)
        let heightMark = parseFloat(document.getElementById("heightMark").value)
        var massJohn = parseInt(document.getElementById("massJohn").value)
        let heightJohn = parseFloat(document.getElementById("heightJohn").value)


        let bmiMark = (massMark / (heightMark * heightMark)).toFixed(2)
        let bmiJohn = (massJohn / (heightJohn * heightJohn)).toFixed(2)

        document.getElementById('BMIMark').value = bmiMark;
        document.getElementById('BMIJohn').value = bmiJohn;

        markHigherBMI = bmiMark > bmiJohn;
        document.getElementById('result').value = markHigherBMI;

        if (markHigherBMI) {
            console.log("Mark's BMI is higher than John's!")
            console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`)
        }
        else if (!markHigherBMI) {
            console.log("John's BMI is  than Mark's!")
            console.log(`John's ${bmiJohn} is higher than Mark's BMI ${bmiMark}!`)
        }
        else {
            console.log("They both are the same BMI!")
            console.log(`They both are the same BMI! ${bmiMark}!`)
        }
    }
}
function checkInput() {
    if (!document.getElementById('massMark').reportValidity()) {
        return false;
    }
    else if (!document.getElementById("heightMark").reportValidity()) {
        return false;
    }
    else if (!document.getElementById("massJohn").reportValidity()) {
        return false;
    }
    else if (!document.getElementById("heightJohn").reportValidity()) {
        return false;
    }
    return true;
}

