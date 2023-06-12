const btnSignIn = document.getElementById("sign_in");
const btnSignUp = document.getElementById("sign_up");
const sign_in = document.getElementsByClassName("sign_in")[0];
const sign_up = document.getElementsByClassName("sign_up")[0];

btnSignUp.addEventListener("click", function () {
  sign_in.style.display = "none";
  sign_up.style.display = "block";
  sign_up.style.position = "unset";
});
btnSignIn.addEventListener("click", function () {
  sign_up.style.display = "none";
  sign_in.style.display = "block";
});
