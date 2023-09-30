document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.querySelector('#button button');

    registerButton.addEventListener('click', function() {
        const fieldsToCheck = ['fname', 'lname', 'email', 'password', 'repassword', 'age', 'phone', 'address', 'state'];

        fieldsToCheck.forEach(function(fieldId) {
            const field = document.getElementById(fieldId);
            const fieldValue = field.value.trim();
            const fieldLabel = document.querySelector(`label[for=${fieldId}]`).textContent;
            const errorSpan = document.querySelector(`#${fieldId}-error`);

            if (fieldValue === '') {
                errorSpan.textContent = 'POOR';
            } else {
                errorSpan.textContent = '';
            }

            if (fieldId === 'fname' || fieldId === 'lname') {
                if (fieldValue.length < 3) {
                    errorSpan.textContent = 'POOR';
                }
            }

            if (fieldId === 'email') {
                if (!fieldValue.includes('@')) {
                    errorSpan.textContent = 'POOR';
                }
            }

            if (fieldId === 'password') {
                if (fieldValue.length < 6) {
                    errorSpan.textContent = 'POOR';
                }
            }

            if (fieldId === 'repassword') {
                const passwordValue = document.getElementById('password').value;
                if (fieldValue !== passwordValue) {
                    errorSpan.textContent = 'MISMATCH';
                }
            }

            if (fieldId === 'age') {
                if (isNaN(fieldValue) || fieldValue < 1) {
                    errorSpan.textContent = 'POOR';
                }
            }

            if (fieldId === 'phone') {
                if (fieldValue.length < 10) {
                    errorSpan.textContent = 'POOR';
                }
            }

            if (fieldId === 'address' || fieldId === 'state') {
                if (fieldValue.length < 3) {
                    errorSpan.textContent = 'POOR';
                }
            }
        });

        
    });
});


