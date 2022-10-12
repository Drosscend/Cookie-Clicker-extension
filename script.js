setInterval(() => {
  let elements = document.getElementsByClassName("shimmer");
  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
  }
});
