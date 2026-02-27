script>
  (function(){
    emailjs.init("service_11z4vq8");
  })();

  document.getElementById("contact-form")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    const button = this.querySelector("button");
    button.innerText = "Sending...";
    button.disabled = true;

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this
    ).then(function() {

      document.getElementById("form-status").innerText =
        "✅ Message sent successfully!";
      
      document.getElementById("contact-form").reset();

      button.innerText = "Send Message";
      button.disabled = false;

    }, function(error) {

      document.getElementById("form-status").innerText =
        "❌ Failed to send. Try again.";

      button.innerText = "Send Message";
      button.disabled = false;

    });

  });
</script>
