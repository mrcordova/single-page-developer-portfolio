const inputs = document.querySelectorAll("#name,#email,#message");
const msgBtn = document.getElementById("send-msg-btn");
const YOUR_SERVICE_ID = "default_service";
const YOUR_TEMPLATE_ID = "template_rsfguu8";

emailjs.init({
  publicKey: "ZrVt-tKeBGdx5xjSw",
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

var templateParams = {
  from_name: "James",
  reply_to: "Check this out!",
  message: "message",
};

function showError(e) {
  e.preventDefault();

  e.currentTarget.nextElementSibling.classList.toggle(
    "hide",
    e.currentTarget.checkValidity()
  );

  e.currentTarget.classList.toggle(
    "error-underline",
    !e.currentTarget.checkValidity()
  );
}

// for (const input of inputs) {
inputs[0].addEventListener("input", showError);
inputs[1].addEventListener("change", showError);
inputs[2].addEventListener("input", showError);
// }

msgBtn.addEventListener("click", (e) => {
  // console.log("here");
  e.preventDefault();

  for (const input of inputs) {
    input.nextElementSibling.classList.toggle("hide", input.checkValidity());
    input.classList.toggle("error-underline", e.currentTarget.checkValidity());
  }
  templateParams.from_name = inputs[0].value;
  templateParams.reply_to = inputs[1].value;
  templateParams.message = inputs[2].value;

  if (e.currentTarget.parentElement.checkValidity()) {
    msgBtn.textContent = "Sending...";
    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams).then(
      (response) => {
        //   console.log("SUCCESS!", response.status, response.text);
        msgBtn.textContent = "SEND MESSAGE";
        alert("Sent!");
      },
      (error) => {
        // console.log("FAILED...", error);
        alert("Failed");
      }
    );
  }
});
