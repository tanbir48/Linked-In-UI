var see = document.getElementById("more");
var dotbtn = document.getElementById("dots");
see.style.display = "none";

seeMore = () => {
  see.style.display = "block";
  dotbtn.style.display = "none";
};

var y = document.getElementById("privacy-up");
var x = document.getElementById("privacy-down");
var z = document.getElementById("privacy-drop-down");
y.style.display = "none";
z.style.visibility = "hidden";

privacyArrowDown = () => {
  if (x.style.display != "none") {
    x.style.display = "none";
    y.style.display = "inline-block";
    z.style.visibility = "visible";
  } else {
    x.style.display = "inline-block";
  }
};

privacyArrowup = () => {
  if (y.style.display != "none") {
    y.style.display = "none";
    z.style.visibility = "hidden";
    x.style.display = "inline-block";
  } else {
    y.style.display = "inline-block";
  }
};

var dropNav = document.getElementById("profile-nav");
dropNav.style.display = "none";
var NavProfileDetails = false;
profileNav = () => {
  if (NavProfileDetails === false) {
    NavProfileDetails = true;
  } else {
    NavProfileDetails = false;
  }
  if (NavProfileDetails === true) {
    dropNav.style.display = "block";
  } else {
    dropNav.style.display = "none";
  }
};
var smallDropNav = document.getElementById("profile-small-nav");
smallDropNav.style.display = "none";
var NavSmallProfileDetails = false;
profileSmallNav = () => {
  if (NavSmallProfileDetails === false) {
    NavSmallProfileDetails = true;
  } else {
    NavSmallProfileDetails = false;
  }
  if (NavSmallProfileDetails === true) {
    smallDropNav.style.display = "block";
  } else {
    smallDropNav.style.display = "none";
  }
};
