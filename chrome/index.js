/* document.querySelector("input") {
  document.querySelector("body").style.backgroundColor = "red";
}); */
/* function clickHandler() {
  console.log(document.activeElement.tagName);
}*/
/* window.addEventListener("click", clickHandler); */
const googleUserInfo = document.querySelector(".profile__bg");

/* function init() {
  googleUserInfo.onmouseover = function () {
    console.log("hi");
  };
}
 */

/* const i = document.getElementsByClassName("user-info");
i.style.backgroundColor = "red"; */
const userInfo = document.querySelector(".user-info");

function userInfoVisibility() {
  if (userInfo.style.visibility === "visible") {
    userInfo.style.visibility = "hidden";
  } else {
    userInfo.style.visibility = "visible";
  }
}

/* function userInfoHidden() {
  if (userInfo.style.visibility === "visible") {
    userInfo.style.visibility = "hidden";
    console.log("hi");
  }
} */

googleUserInfo.addEventListener("click", userInfoVisibility);
/* document.addEventListener("click", userInfoHidden); */
