function $(element) {
  return document.querySelector(element);
}
let email = $(".email_input").value;
$(".btn_submit").onclick = (e) => {
  e.preventDefault();
  $(".confirm_text").innerHTML = `Please confirm account creation for ${email}`;
  $(".confirm").style.display = "block";
};
$(".btn_cancel").onclick = () => {
  $(".confirm").style.display = "none";
};
$(".btn_confirm").onclick = () => {
  $("form").style.display = "none";
  $(
    "body"
  ).innerHTML = `<p class="final_text">Hello user with email: ${email}</p><img src="user.svg" alt="user">`;
};
