var btn = document.querySelector('#show-content');
var lock = document.querySelector('#secret')

btn.addEventListener('click', function() {

    if(lock.style.display === 'none'){
        lock.style.display = 'block';
    } else {
        lock.style.display = 'none';
    }
})