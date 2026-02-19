const items = document.getElementsByClassName('item');
for(let item of items){
    item.addEventListener('click', function(event){
        console.log(event.target.parentNode);
        event.target.parentNode.removeChild(event.target)
    })
}

document.getElementById('ordered-list').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
})

document.getElementById('btn-update').addEventListener('click', function(){
    const newText = document.getElementById('text-area').value 
    const listContainer = document.getElementById('ordered-list')
    const li = document.createElement('li');
    li.innerText = newText;
    li.style.backgroundColor = 'red'
    listContainer.appendChild(li) 
    newText.value = '';
})