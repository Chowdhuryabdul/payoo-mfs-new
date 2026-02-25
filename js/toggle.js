// This is to hide cash out form by default
document.getElementById('cashout').style.display = 'none'

document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('addMoney').style.display = 'block'
    document.getElementById('cashout').style.display = 'none'
    
    
    // this is another way
    // document.getElementById('addMoney').classList.remove('hidden')
})

document.getElementById('cash-out-box').addEventListener('click', function(){
    document.getElementById('cashout').style.display = 'block';
    document.getElementById('addMoney').style.display = 'none';

    // this is another way
    // document.getElementById('cashout').classList.remove('hidden')
})