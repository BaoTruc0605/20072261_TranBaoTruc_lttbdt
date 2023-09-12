function calculateBMI() {
    var massMark = parseInt(document.getElementById("massMark").value)
    let heightMark = parseFloat(document.getElementById("heightMark").value)
    var massJohn = parseInt(document.getElementById("massJohn").value)
    let heightJohn = parseFloat(document.getElementById("heightJohn").value)
    let bmiMark = (massMark / (heightMark * heightMark) ).toFixed(2)
    let bmiJohn = (massJohn / (heightJohn * heightJohn) ).toFixed(2)
    document.getElementById('BMIMark').value = bmiMark;
    document.getElementById('BMIJohn').value = bmiJohn;
    let markHigherBMI = bmiMark > bmiJohn;
    document.getElementById('result').value = markHigherBMI;

}