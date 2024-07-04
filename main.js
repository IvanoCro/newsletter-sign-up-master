const emailInput = document.querySelector('enter-email');
const successMessage = document.getElementById('succsess-message');
const mainContent = document.getElementById('main-content');
let onScreen = false;



document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('subscribe-button');
    const successCard = document.getElementById('success-card');

    submitButton.addEventListener('click', function() {
        onScreen = true;
        
        if(onScreen === true){
            mainContent.style.opacity = 0;
        } else {
            mainContent.style.opacity = 1;
        }
        if (successCard.style.display === 'none' || successCard.style.display === '') {
           successCard.style.display = 'block';
        } else {
            successCard.style.display = 'none';
        }
        
    });
    
    successMessage.textContent = `A confirmation email has been sent to you. Please open it and click the button inside to confirm your subscription.`

});


document.addEventListener('DOMContentLoaded', function() {
    const dismissButton = document.getElementById('dissmis-btn');
    const successCard = document.getElementById('success-card');
    dismissButton.addEventListener('click', function(){
        onScreen = false;
        if(onScreen === false){
            mainContent.style.opacity = 1;
            
        } else {
            mainContent.style.opacity = 0;
        }
        if (successCard.style.display === 'block' || successCard.style.display === 'flex') {
            successCard.style.display = 'none';
         } else {
             successCard.style.display = 'block';
         }
    });


});