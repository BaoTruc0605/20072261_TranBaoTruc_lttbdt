function total() {
    if (checkInput) {
        let value = parseFloat(document.getElementById('value').value)
        let tip = (value < 50) ? 0 : (value < 100) ? (0.15 * value) : (0.2 * value)
        let total = value + tip
        console.log(value)
        console.log(tip)
        console.log(total)
        document.getElementById('result').value = `Bill value: ${value} \nTip: ${tip} \nTotal: ${total}`
        console.log(`Bill value: ${value} \n Tip: ${tip} \n Total: ${total} `)
    }
}
function checkInput() {
    if (!document.getElementById('value').reportValidity()) {
        return false;
    }
    return true;
}