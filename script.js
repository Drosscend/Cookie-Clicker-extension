function clickShimmer() {
  let elements = document.getElementsByClassName("shimmer");
  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
  }
}

// Définit une fonction pour cliquer sur le bouton bigCookie
function clickBigCookie() {
  let bigCookieButton = document.getElementById('bigCookie');
  if (bigCookieButton) {
    bigCookieButton.click();
  }
}

function main(){
  clickBigCookie();
  clickShimmer();
}

setInterval(main);