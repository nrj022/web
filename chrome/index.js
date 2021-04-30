const googleAppMenu = document.querySelector(".menu-dots__bg");
const googleUserInfo = document.querySelector(".profile__bg");
const googleApps = document.querySelector(".google-apps");
const userInfo = document.querySelector(".user-info");

/* function menuVisibility(event) {
  menu.style.visibility = "hidden";
  menu.style.visibility = "hidden";
  const target = event.target;
  var menu;
  if (target == googleUserInfo) {
    menu = userInfo;
  } else if (target == googleAppMenu) {
    menu = googleApps;
  }
  console.log(menu);
  if (menu.style.visibility === "visible") {
    menu.style.visibility = "hidden";
  } else {
    menu.style.visibility = "visible";
  }
} */

function infoMenuVisibility() {
  if (userInfo.style.visibility === "visible") {
    userInfo.style.visibility = "hidden";
  } else {
    userInfo.style.visibility = "visible";
    // check the overwrap
    if (googleApps.style.visibility == "visible") {
      googleApps.style.visibility = "hidden";
    }
  }
}

function googleMenuVisibility() {
  if (googleApps.style.visibility === "visible") {
    googleApps.style.visibility = "hidden";
  } else {
    googleApps.style.visibility = "visible";
    // check the overwrap
    if (userInfo.style.visibility == "visible") {
      userInfo.style.visibility = "hidden";
    }
  }
}
function init() {
  googleUserInfo.addEventListener("click", infoMenuVisibility);
  googleAppMenu.addEventListener("click", googleMenuVisibility);
}

init();
