document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_11z4vq8",   // from Email Services
      "template_ia20z9t",  // from Email Templates
      this
    )
    .then(function() {
        alert("✅ Message Sent Successfully!");
        form.reset();
    })
    .catch(function(error) {
        alert("❌ Failed to send message.");
        console.log(error);
    });

  });

});