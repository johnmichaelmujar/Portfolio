// ── EmailJS Contact Form ──
// Replace the public key and template/service IDs with your own from the EmailJS dashboard.
emailjs.init('ufCRoT9mpghYpJhhB');

document.getElementById('btn-send').addEventListener('click', function () {
    const name    = document.getElementById('from_name').value.trim();
    const email   = document.getElementById('from_email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const btn     = document.getElementById('btn-send');

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields!');
        return;
    }

    btn.textContent = 'Sending...';
    btn.disabled    = true;

    emailjs.send('service_411xxdd', 'template_em0b1he', {
        from_name:  name,
        from_email: email,
        subject:    subject,
        message:    message,
    }).then(() => {
        btn.textContent = '✅ Message Sent!';
        document.getElementById('from_name').value  = '';
        document.getElementById('from_email').value = '';
        document.getElementById('subject').value    = '';
        document.getElementById('message').value    = '';
        setTimeout(() => {
            btn.textContent = 'Send Message';
            btn.disabled    = false;
        }, 3000);
    }).catch((error) => {
        btn.textContent = '❌ Failed. Try Again';
        btn.disabled    = false;
        console.error('EmailJS error:', error);
    });
});
