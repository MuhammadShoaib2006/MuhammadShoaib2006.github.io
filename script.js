document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevents the form from refreshing the page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Log form data to console (for now)
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Show a simple alert for now
  alert("Thank you for your message! I'll get back to you soon.");
});
