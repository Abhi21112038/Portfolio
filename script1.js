$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});

// JavaScript to show/hide contact info on click
const clickMe = document.getElementById('click-me');
const contactInfo = document.getElementById('contact-info');

clickMe.addEventListener('click', () => {
  if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
    contactInfo.style.display = 'flex';
  } else {
    contactInfo.style.display = 'none';
  }
});
