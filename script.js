document.getElementById('changeColorButton').addEventListener('click', function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Use the Fetch API to make a GET request
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        console.log('API Response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33BF', '#33BFFF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
