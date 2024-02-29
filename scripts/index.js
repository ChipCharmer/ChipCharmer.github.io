document.addEventListener("DOMContentLoaded", function () {
    fetch('/text/homepage1.txt')  
    .then(response => response.text())  
    .then(text => {  
    const paragraphPlaceholder = document.getElementById('paragraphPlaceholder');
    paragraphPlaceholder.innerText = text;  
    })
    .catch(error => console.error('Error fetching paragraph:', error));  
}); 