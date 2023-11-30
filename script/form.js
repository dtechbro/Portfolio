document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var data = {
        name: name,
        email: email,
        message: message
    };

    // Send the data to the serverless function
    fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message sent successfully!');
        } else {
            alert('Error sending message.');
        }
    })
    .catch(error => console.error('Error:', error));
});
