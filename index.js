/* ==========================================
   1. SEND EMAIL REQUEST
   ========================================== */
function sendEmailRequest() {
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('userEmail')?.value;
    const phone = document.getElementById('phone')?.value;
    const service = document.getElementById('service')?.value;
    const message = document.getElementById('message')?.value;

    if (!name || !email || !message) {
        alert("Please fill in your Name, Email, and Message so we can assist you.");
        return;
    }

    const recipient = "office@akgroupofcompanies.co.za";
    const subject = encodeURIComponent(`Service Request: ${service} - ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Service Requested: ${service}\n\n` +
        `Message/Description:\n${message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}

/* ==========================================
   2. FORM SUBMIT LISTENER
   ========================================== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        sendEmailRequest();
    });
}

/* ==========================================
   3. INFINITE SCROLL ANIMATION
   ========================================== */
const scrollTrack = document.querySelector('.scroll-track');
if (scrollTrack) {
    // This duplicates the items once for a seamless loop
    const clone = scrollTrack.innerHTML;
    scrollTrack.innerHTML += clone;
}


