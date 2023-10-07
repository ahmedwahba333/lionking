function sendEmail() {
  // Get the subject and message values from the input fields.
  var subject = document.getElementById("exampleFormControlInputSub").value;
  var myName = document.getElementById("exampleFormControlInputName").value;
  var message = document.getElementById("exampleFormControlTextarea1").value;
  var emailProvided = document.getElementById("exampleFormControlemail").value;

  // Validate the subject and message values.
  if (
    subject === "" ||
    message === "" ||
    myName === "" ||
    emailProvided === ""
  ) {
    alert("Please enter all fields of the form.");
    return;
  }

  // Generate the mailto link.
  var mailtoLink =
    "mailto:info@lioncompany00.com?subject=" +
    subject +
    "&body=Hello iam " +
    myName +
    " , email that i provided in the form is " +
    emailProvided +
    " and i want to say " +
    message;

  // Open the mailto link in the user's email client.
  window.location.href = mailtoLink;
}
jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
  $(".owl-carousel-panner").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    rtl: true,
  });
  $(".owl-carousel-whous").owlCarousel({
    items: 1,
    loop: true,
    // dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    rtl: true,
  });
  $(".sectors-owl").owlCarousel({
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 5,
      },
    },
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    rtl: true,
  });
});
