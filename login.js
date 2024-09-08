document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the default form submission behavior
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication check (replace with real validation as needed)
    if (username === 'pong' && password === '020605') {
        document.getElementById('quizLink').classList.remove('hidden');  // Shows the quiz link
    }else if (username === 'tey' && password === '060106') {
        document.getElementById('quizLink').classList.remove('hidden');  // Shows the quiz link
    } else {
        alert('Invalid username or password.');
    }
});
