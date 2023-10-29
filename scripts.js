
// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the form from submitting normally

   // Check which radio button is selected and redirect to the appropriate page
   if (document.getElementById('administrator').checked) {
       window.location.href = 'administrator.html';
   } else if (document.getElementById('employee').checked) {
      window.location.href = 'employee.html';
   } else if (document.getElementById('customer').checked) {
      window.location.href = 'customer.html';
   }
});

// Add similar JavaScript code for signup.html
document.getElementById('signupForm').addEventListener('submit', function(event) {
   event.preventDefault();

});
// scripts.js
function showSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function hideSection(sectionId) {
    // Hide the selected section
    document.getElementById(sectionId).style.display = 'none';
}

function startLoadingAnimation() {
    // Show the loader animation
    document.getElementById('loader').style.display = 'block';

    // You can add a delay here if you want, for example:
    setTimeout(function() {
        // Hide the loader animation after 5 seconds
        document.getElementById('loader').style.display = 'none';
    }, 9000);
}