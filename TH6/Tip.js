function total() {
    let arrayValue = [125, 555, 44];
    arrayTip = calcTip(arrayValue)
    var i = 0;
    var value = 0
    var tip = 0
    let total = []
    let result=``
    for (; i < arrayValue.length; i++) {
        total.push(arrayValue[i] + arrayTip[i])
        result += `Bill value: ${arrayValue[i]} ,Tip: ${arrayTip[i]} ->Total: ${total[i]}\n`
    }
    console.log(arrayValue)
    console.log(arrayTip)
    console.log(total)
    console.log(result)
    document.getElementById('result').value = result

}

function calcTip(array) {
    var i = 0;
    var value = 0
    let result = []
    for (; i < array.length; i++) {
        value = array[i]
        let tip = (value < 50) ? 0 : (value < 100) ? (0.15 * value) : (0.2 * value)
        result.push(tip)
    }
    return result
}