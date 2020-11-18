let submit = document.querySelector('#submitForm');
let noteText = document.querySelector('.contact-text');
let contactInfoBox = document.querySelector('.contactInfoBox');
let thankYou = document.querySelector('.violin-contact')


submit.addEventListener('click', function(){
    noteText.style.display="none";
    contactInfoBox.style.display="none";
    thankYou.style.display="block";
})
