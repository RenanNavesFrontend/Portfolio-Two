document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    clearErrors();
    
    let hasError = false;
    const fields = [
        { id: 'first-name', message: 'First name cannot be empty' },
        { id: 'last-name', message: 'Last Name cannot be empty' },
        { id: 'email', message: 'Email cannot be empty' },
        { id: 'password', message: 'Password cannot be empty' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(`${field.id}-error`);
        if (input.value.trim() === '') {
            showError(input, error, field.message);
            hasError = true;
        }
    });

    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (email.value.trim() !== '' && !isValidEmail(email.value)) {
        showError(email, emailError, 'Looks like this is not an email');
        hasError = true;
    }

    if (!hasError) alert('Formulário enviado com sucesso!');
});

function showError(input, errorMessageElement, message) {
    errorMessageElement.textContent = message;
    errorMessageElement.style.visibility = 'visible';
    input.classList.add('input-error');
    const errorIcon = errorMessageElement.querySelector('.error-icon');
    if (errorIcon) errorIcon.style.visibility = 'visible';
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(msg => {
        msg.textContent = '';
        msg.style.visibility = 'hidden';
        const errorIcon = msg.querySelector('.error-icon');
        if (errorIcon) errorIcon.style.visibility = 'hidden';
    });

    document.querySelectorAll('.input-group input').forEach(input => 
        input.classList.remove('input-error')
    );
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
