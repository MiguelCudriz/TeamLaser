function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function openInstagram() {
  if (isMobile()) {
    // Intenta abrir la app de Instagram
    window.location.href = "instagram://user?username=teamlaser17";
    setTimeout(() => {
      window.location.href = "https://www.instagram.com/teamlaser17/";
    }, 1000);
  } else {
    window.open("https://www.instagram.com/teamlaser17/", "_blank");
  }
}

function openFacebook() {
  if (isMobile()) {
    // Reemplaza este ID por el real de tu página si quieres que abra directo en app
    window.location.href = "fb://page/104681882235347";
    setTimeout(() => {
      window.location.href = "https://www.facebook.com/teamlaser17/photos";
    }, 1000);
  } else {
    window.open("https://www.facebook.com/teamlaser17/photos", "_blank");
  }
}
