/* eslint-disable no-param-reassign */
const ddShort = document.getElementById("short");
const ddButtons = document.getElementById("ddButtons");
ddShort.parentNode.removeChild(ddButtons);

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
    "<img src='../img/close.svg' alt='close' height=40px width=40px/>";

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

showDDMenu(ddShort, ddButtons);
