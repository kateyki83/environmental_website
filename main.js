let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function(){
    
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toogle');

});

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});


const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        

        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}


const donateForm = document.getElementById('donate-form');
if (donateForm) {
    donateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        

        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}


function toggleCustomAmount(value) {
        const customInput = document.getElementById('customAmount');
        if (value === 'custom') {
            customInput.style.display = 'block';
        } else {
            customInput.style.display = 'none';
        }
    }

const letterForm = document.getElementById('letter-form');

if (letterForm) {
    letterForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission

        const formData = new FormData(letterForm);
        const data = Object.fromEntries(formData.entries()); // Optional: use the data object if needed

        // Show a thank-you message
        alert('Thank you for your message! We will get back to you soon.');

        // Reset the form fields
        letterForm.reset();
    });
}


