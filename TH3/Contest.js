function checkWiner() {
    if (checkInput()) {
        let score1 = parseInt(document.getElementById('score1').value)
        let score2 = parseInt(document.getElementById('score2').value)
        let score3 = parseInt(document.getElementById('score3').value)
        let score4 = parseInt(document.getElementById('score4').value)
        let score5 = parseInt(document.getElementById('score5').value)
        let score6 = parseInt(document.getElementById('score6').value)
    
        let average1 = ((score1 + score2 + score3) / 3).toFixed(2)
        let average2 = ((score4 + score5 + score6) / 3).toFixed(2)
        document.getElementById('average1').value = average1;
        document.getElementById('average2').value = average2;
        console.log(average1)
        console.log(average2)
        if(average1>99){
            if(average1>average2){
                document.getElementById('result').value = 'Dolphin win with ' + average1+' vs '+average2;
                console.log('Dolphin win with ' + average1+' vs '+average2)   
            }
            else if(average1<average2){
                document.getElementById('result').value = 'Koalas win with'+ average2+' vs '+average1;
                console.log('Koalas win with'+ average2+' vs '+average1)   
            }
            else if(average1==average2){
                document.getElementById('result').value = 'Dolphin and Koalas win with score : ' + average1;
                console.log('Dolphin and Koalas win with score : ' + average1)   
            }
           
        }
        else if(average2>99){
                document.getElementById('result').value = 'Koalas win with '+ average2+' vs '+average1;
                console.log('Koalas win with '+ average2+' vs '+average1)
        }
        else{
            document.getElementById('result').value = 'No winer with ' + average1+' vs '+average2;
            console.log('No winer with ' + average1+' vs '+average2)
        }
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