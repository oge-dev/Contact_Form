document.getElementById('form-control').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let status = document.getElementById('status');

    status.innerHTML = 'Sending...';

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'contact.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                status.innerHTML = 'Message sent successfully!';
                document.getElementById('form-control').reset();
            } else {
                status.innerHTML = 'Oops! Something went wrong.';
            }
        }
    };
    xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message));
});
