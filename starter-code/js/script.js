const inputs = document.querySelectorAll("#name,#email,#message");
const msgBtn = document.getElementById("send-msg-btn");

function showError(e) {
  e.preventDefault();

  e.currentTarget.nextElementSibling.classList.toggle(
    "hide",
    e.currentTarget.checkValidity()
  );
}

for (const input of inputs) {
  input.addEventListener("change", showError);
}

msgBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.currentTarget);
});
