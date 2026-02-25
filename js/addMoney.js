document.getElementById('add-mny-btn').addEventListener('click', function(event){
    event.preventDefault()
    const amount = document.getElementById('amount').value 
    const convertedAmount = parseFloat(amount)
    const pin = document.getElementById('pin-code').value
    const convertedPin = parseInt(pin)
    const mainBalance = document.getElementById('main-balance').innerText 
    const convertedMainBalance = parseFloat(mainBalance);
    
    if(convertedAmount && convertedPin){
        if(convertedPin === 1234){
        const sum = convertedAmount + convertedMainBalance
        document.getElementById('main-balance').innerText = sum
    }else{
        console.log('Pin code is wrong');
    }
    }else{
        alert('enter amount and pin')
    }
})