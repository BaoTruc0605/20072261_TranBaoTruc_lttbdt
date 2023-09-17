function result() {
    if (checkInput()) {
        let score1 = parseInt(document.getElementById('score1').value)
        let score2 = parseInt(document.getElementById('score2').value)
        let score3 = parseInt(document.getElementById('score3').value)
        let score4 = parseInt(document.getElementById('score4').value)
        let score5 = parseInt(document.getElementById('score5').value)
        let score6 = parseInt(document.getElementById('score6').value)
    
        document.getElementById('result').value = checkWiner(score1, score2, score3,score4, score5, score6)
    }
}
function checkInput() {
    if (!document.getElementById('score1').reportValidity()) {
        return false;
    }
    else if (!document.getElementById("score2").reportValidity()) {
        return false;
    }
    else if (!document.getElementById("score3").reportValidity()) {
        return false;
    }
    else if (!document.getElementById("score4").reportValidity()) {
        return false;
    }
    else if (!document.getElementById("score5").reportValidity()) {
        return false;
    }
    else if (!document.getElementById("score6").reportValidity()) {
        return false;
    }
    return true;
}
function checkWiner(score1, score2, score3,score4, score5, score6){
    let avgDolphins = calcAverage(score1, score2, score3)
    let avgKoalas = calcAverage(score4, score5, score6)
    if(avgDolphins>(avgKoalas*2)){
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
    }
    else if(avgKoalas>(avgDolphins*2)){
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    }
    else{
        return `No winner  (Dolphins: ${avgKoalas} vs. Koalas:${avgDolphins})`
    }
}
function calcAverage(score1, score2, score3){
    let average= ((score1 + score2 + score3) / 3).toFixed(2);
    return average;
}