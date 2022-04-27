const adviceId = document.getElementById('adviceId');
const adviceText = document.getElementById('adviceText');
const dice = document.querySelector('.dicecontainer');

dice.addEventListener('click',()=> {
    fetchData();

})

function fetchData(params) {
    fetch("https://api.adviceslip.com/advice")
    .then(response => {
    return response.json();
    })
    .then(data => {
        adviceId.textContent = data.slip.id
        adviceText.textContent = data.slip.advice
    })
    
}



 