const form = document.getElementById('form-deposito');
const numA = document.getElementById('numero-A');
const numB = document.getElementById('numero-B');

function numMaior(A,B) {
    return A < B
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if (numMaior(numA.value,numB.value)) {
        document.querySelector('.failed-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
    }else {
        document.querySelector('.success-message').style.display = 'none';
        document.querySelector('.failed-message').style.display = 'block';
    }
    
})