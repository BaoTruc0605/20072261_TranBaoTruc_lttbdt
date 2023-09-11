function calculateBMI() {
    var massMark = parseInt(document.getElementById("massMark").value)
    var heightMark = parseInt(document.getElementById("heightMark").value)
    var massJohn = parseInt(document.getElementById("massJohn").value)
    var heightJohn = parseInt(document.getElementById("heightJohn").value)
    let bmiMark = (massMark / ((heightMark * heightMark) / 10000)).toFixed(2)
    let bmiJohn = (massJohn / ((heightJohn * heightJohn) / 10000)).toFixed(2)
    document.getElementById('BMIMark').value = bmiMark;
    document.getElementById('BMIJohn').value = bmiJohn;

}