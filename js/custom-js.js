document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var subject = "Message from " + name;
    var emailBody =`
    Name : ${name}
    Email : ${email}
    Message : ${message}
    `

    // Construct the mailto link
    var mailtoLink =
      "mailto:hmakki387@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(emailBody);

    // Redirect the user to their default email client
    window.location.href = mailtoLink;
  });
