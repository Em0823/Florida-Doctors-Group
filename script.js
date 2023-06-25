$(document).ready(function () {
    $('form').on('submit', function (event) {

        // Prevent the form from submitting if any required fields are empty
        $('#individualName, #contactNumber, #contactEmail, #appointmentReason').each(function() {
            if ($(this).val() === '') {
                event.preventDefault();
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        // Show error message if any required fields are empty
        if (!isValid) {
            $('#error-message').text('Please fill out all required fields.').show();
        } else {
            $('#error-message').hide();
        }

        // Add additional form validation as needed
    });
});