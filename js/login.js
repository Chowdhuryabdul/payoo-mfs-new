document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()
    const pinCode = document.getElementById('pin-code').value;
    const convertedPin = parseInt(pinCode)
    // console.log(typeof pinCode);
    const accNumber = document.getElementById('acc-number').value;
    if(accNumber.length === 11){
        
        if(convertedPin === 1234){
            window.location.href = "./main.html"
        }else{
            console.log('pin code thik nai');
        }            
    }else{
        console.log('Account number is invalid');
    }

})