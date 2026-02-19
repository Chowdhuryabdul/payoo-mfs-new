document.getElementById('add-commment').addEventListener('click', function(){
    const title = document.getElementById('title')
   const newComment = document.getElementById('text-area').value
   const p = document.createElement('p');
p.innerText = newComment;
p.classList.add('color')
title.appendChild(p)
})