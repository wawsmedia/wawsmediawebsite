window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}
 // script.js

// Check if the user has previously accepted or declined cookies
document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.getItem('cookieConsent')) {
      document.getElementById('cookieConsent').style.display = 'block';
  }
});

// Function to accept cookies
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  document.getElementById('cookieConsent').style.display = 'none';
}

// Function to decline cookies
function declineCookies() {
  localStorage.setItem('cookieConsent', 'declined');
  document.getElementById('cookieConsent').style.display = 'none';
  // Optionally, you can remove existing cookies or analytics trackers here
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}