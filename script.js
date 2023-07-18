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



//Menu

var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
        }
        function hideMenu(){
            navLinks.style.right = "-200px";
        } 
        


        // tab for services

        
function showTabContent(index) {
var tabs = document.getElementsByClassName("tab");
var tabContent = document.getElementsByClassName("tab-pane");

// Hide all tab content
for (var i = 0; i < tabContent.length; i++) {
tabContent[i].classList.remove("active");
}

// Deactivate all tabs
for (var i = 0; i < tabs.length; i++) {
tabs[i].classList.remove("active");
}

// Show selected tab content
tabContent[index].classList.add("active");

// Activate selected tab
tabs[index].classList.add("active");
}

