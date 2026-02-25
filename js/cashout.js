document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const insertedAmount = document.getElementById('cashout-amount').value
    const convertedInsertedAmount = parseFloat(insertedAmount);
    const pinCode = document.getElementById('cash-out-pin-code').value
    const convertedpincode = parseInt(pinCode);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    // console.log(typeof convertedMainBalance);
    if (convertedInsertedAmount && convertedpincode) {
        if (convertedpincode === 1234) {
            if (convertedInsertedAmount > convertedMainBalance) {
                alert('Your given amount is exceeded the main balance')
            } else {
                const restOfTheAmount = convertedMainBalance - convertedInsertedAmount;
                document.getElementById('main-balance').innerText = restOfTheAmount
            }
        } else {
            alert('Pls provide correct pin code')
        }
    } else {
        alert('amount or pin is incorrect')
    }
})