/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
const ddShort = document.getElementById("short");
const ddButtons = document.getElementById("ddButtons");
const sliderLeft = document.getElementById("sliderLeft");
const sliderRight = document.getElementById("sliderRight");
const navigationBar = document.getElementById("nav");
const imagesDiv = document.querySelectorAll("#imagesDiv > div");
ddShort.parentNode.removeChild(ddButtons);
let interval;

function activateCircle(images) {
  images.forEach((e, i) => {
    const circle = document.getElementById(i);
    if (!e.classList.contains("hidden")) {
      circle.classList.add("active");
    } else if (circle.classList.contains("active"))
      circle.classList.remove("active");
  });
}

function createNav(nav, images) {
  const numberOfCircles = images.length;
  for (let i = 0; i < numberOfCircles; i++) {
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.id = i;
    nav.appendChild(circle);
  }
}

function removeMenu(shortDiv, menu, closeButton) {
  if (shortDiv.contains(closeButton)) {
    shortDiv.removeChild(closeButton);
    menu.classList.add("closed");
    if (menu.classList.contains("closed"))
      setTimeout(() => {
        menu.classList.remove("closed");
      }, 1);
  }
}

function showDDMenu(shortDiv, buttons) {
  const menu = shortDiv.parentNode;
  if (menu.classList.contains("closed")) menu.classList.remove("closed");
  const closeButton = document.createElement("button");
  closeButton.classList.add("short");
  closeButton.classList.add("closeButton");
  closeButton.innerHTML =
    "<img src='./img/close.svg' alt='close' height=40px width=40px/>";

  menu.addEventListener("mouseenter", () => {
    console.log(buttons);
    menu.classList.add("hovered");
    menu.appendChild(buttons);
    if (this.innerWidth <= 600) {
      shortDiv.appendChild(closeButton);
    }
  });

  menu.addEventListener("mouseleave", () => {
    console.log(menu);
    menu.classList.remove("hovered");
    menu.removeChild(buttons);
    removeMenu(shortDiv, menu, closeButton);
  });

  closeButton.addEventListener("click", () => {
    buttons.remove();
    removeMenu(shortDiv, menu, closeButton);
  });
}

function slideImg(images, isLeft) {
  let found = 0;
  images.forEach((e, i) => {
    if (!e.classList.contains("hidden") && !found) {
      let previousElement;
      if (isLeft) {
        if (i === 0) previousElement = images.item(images.length - 1);
        else previousElement = images.item(i - 1);
      } else {
        // eslint-disable-next-line no-lonely-if
        if (i === images.length - 1) previousElement = images.item(0);
        else previousElement = images.item(i + 1);
      }
      previousElement.classList.remove("hidden");
      e.classList.add("hidden");
      found = 1;
      activateCircle(images);
      clearInterval(interval);
      interval = setInterval(() => {
        slideImg(imagesDiv, 0);
      }, 5000);
    }
  });
  found = 0;
}

function navigate(images) {
  const navCircles = document.querySelectorAll(".circle");
  let circleNum;
  // eslint-disable-next-line no-undef
  navCircles.forEach((e) => {
    e.addEventListener("click", () => {
      images.forEach((i) => {
        if (!i.classList.contains("hidden")) {
          i.classList.add("hidden");
        }
      });
      circleNum = parseInt(e.id, 10);
      // eslint-disable-next-line no-undef
      images.forEach((i, j) => {
        if (j === circleNum) {
          i.classList.remove("hidden");
        }
      });
      activateCircle(images);
      clearInterval(interval);
      interval = setInterval(() => {
        slideImg(imagesDiv, 0);
      }, 5000);
    });
  });
}

sliderLeft.addEventListener("click", () => {
  slideImg(imagesDiv, 1);
});

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      slideImg(imagesDiv, 1);
      break;

    case "ArrowRight":
      slideImg(imagesDiv, 0);
      break;

    default:
      break;
  }
});

sliderRight.addEventListener("click", () => {
  slideImg(imagesDiv, 0);
});

showDDMenu(ddShort, ddButtons);
createNav(navigationBar, imagesDiv);
navigate(imagesDiv);
// eslint-disable-next-line no-unused-vars
interval = setInterval(() => {
  slideImg(imagesDiv, 0);
}, 5000);
