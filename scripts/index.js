// index.js
fetch('homepage1.txt')  // Fetch the content of paragraph.txt
    .then(response => response.text())  // Convert the response to text
    .then(text => {  // Once the content is fetched
        const paragraphPlaceholder = document.getElementById('paragraphPlaceholder');
        paragraphPlaceholder.innerText = text;  // Insert the text into the placeholder element
    })
    .catch(error => console.error('Error fetching paragraph:', error));  // Handle any errors
