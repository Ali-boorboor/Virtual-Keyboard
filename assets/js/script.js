const $ = document;
const keyboardKeys = $.querySelectorAll ( ".keyboard__key" );
const displayView = $.querySelector ( ".display-view" );
const moonBtn = $.getElementById ( "moon-btn" );
const sunBtn = $.getElementById ( "sun-btn" );


function keyPressFunction (key) {
  displayView.style.opacity = "1";
  if (key === "Space") {
    displayView.innerHTML += "\&nbsp";
  } else if (key === "Backspace") {
    displayView.innerHTML = displayView.textContent.slice(0, -1);
  } else if (key === "Shift" || key === "Enter") {
    null;
  } else if (key === "Tab") {
    displayView.innerHTML += "\&nbsp\&nbsp\&nbsp\&nbsp";
  } else if (key === "Escape") {
    displayView.innerHTML = "";
  } else {
    displayView.innerHTML += key;
  };
};

function animationHandler (key) {
  key.classList.add("hit");
  key.addEventListener("animationend", () => {
    key.classList.remove("hit");
  });
};


document.addEventListener ( "keydown", event => {
  const pressedKey = $.getElementById ( event.key );
  keyboardKeys.forEach(key => {
    if (key.id === event.key) {
      animationHandler(pressedKey);
      keyPressFunction(event.key);
    };
  });
});

keyboardKeys.forEach ( key => {
  key.addEventListener ( "click", event => {
    animationHandler(event.target);
    keyPressFunction(key.value);
  });
});

moonBtn.addEventListener ( "click", () => {
  document.body.setAttribute("data-theme", "dark");
  moonBtn.style.display = "none";
  sunBtn.style.display = "block";
});

sunBtn.addEventListener ( "click", () => {
  document.body.removeAttribute("data-theme", "dark");
  sunBtn.style.display = "none";
  moonBtn.style.display = "block";
});