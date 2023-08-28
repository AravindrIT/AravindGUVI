// Add this code to your existing JavaScript file
const getAdviceButton = document.getElementById('getAdvice');
const adviceElement = document.getElementById('advice');

const adviceApiUrl = 'https://api.adviceslip.com/advice';

getAdviceButton.addEventListener('click', () => {
    fetch(adviceApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            adviceElement.textContent = data.slip.advice;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
