const appMenu = document.querySelector(".menu-dots__bg");
const profileMenu = document.querySelector(".profile__bg");
const apps = document.querySelector(".google-apps");
const userInfo = document.querySelector(".user-info");

const appMenuAlert = document.querySelector(".menu-dots__alert");
const profileMenuAlert = document.querySelector(".profile__alert");
/* const menuAlertFadeIn = document.querySelector("fadeIn"); */

/* var appMenuAlertAni = appMenuAlert.animate(
  {
    visibility: ["hidden", "visible"],
  },
  2000
);
var profileMenuAlertAni = appMenuAlert.animate({}); */

function appMenuVisibility() {
  if (apps.style.visibility === "visible") {
    apps.style.visibility = "hidden";
    appMenu.style.backgroundColor = "";
  } else {
    apps.style.visibility = "visible";
    appMenu.style.backgroundColor = "#85858567";
    // prevent the overwrap
    if (userInfo.style.visibility === "visible") {
      userInfo.style.visibility = "hidden";
      profileMenu.style.backgroundColor = "";
    }
  }
}

function infoMenuVisibility() {
  if (userInfo.style.visibility === "visible") {
    userInfo.style.visibility = "hidden";
    profileMenu.style.backgroundColor = "";
  } else {
    userInfo.style.visibility = "visible";
    profileMenu.style.backgroundColor = "#85858567";
    // prevent the overwrap
    if (apps.style.visibility === "visible") {
      apps.style.visibility = "hidden";
      appMenu.style.backgroundColor = "";
    }
  }
}

function menuAlertFadeIn(menuAlert) {
  menuAlert.style.animationName = "fadein";
}

function menuAlertFadeOut(menuAlert) {
  menuAlert.style.animationName = "";
}

function init() {
  profileMenu.addEventListener("click", infoMenuVisibility);
  appMenu.addEventListener("click", appMenuVisibility);

  profileMenu.addEventListener("mouseover", function () {
    menuAlertFadeIn(profileMenuAlert);
  });
  profileMenu.addEventListener("mouseout", function () {
    menuAlertFadeOut(profileMenuAlert);
  });
  appMenu.addEventListener("mouseover", function () {
    menuAlertFadeIn(appMenuAlert);
  });
  appMenu.addEventListener("mouseout", function () {
    menuAlertFadeOut(appMenuAlert);
  });
}

init();
