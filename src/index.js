import "./index.css";

const ddMenu = document.createElement("div");
ddMenu.id = "ddMenu";
document.body.append(ddMenu);

const ddMenuP = document.createElement("p");
ddMenuP.innerHTML = "Drop Down Menu";
ddMenu.appendChild(ddMenuP);

const ddContents = document.createElement("div");
ddContents.id = "ddContents";
const ddButton1 = document.createElement("button");
const ddButton2 = document.createElement("button");
const ddButton3 = document.createElement("button");
ddButton1.innerHTML = "Action 1";
ddButton2.innerHTML = "Action 2";
ddButton3.innerHTML = "Action 3";
ddContents.appendChild(ddButton1);
ddContents.appendChild(ddButton2);
ddContents.appendChild(ddButton3);

const dynamicDDMenu = document.getElementById("ddMenu");

dynamicDDMenu.addEventListener("mouseenter", () => {
  console.log(dynamicDDMenu);
  dynamicDDMenu.classList.add("hovered");
  dynamicDDMenu.appendChild(ddContents);
});

dynamicDDMenu.addEventListener("mouseleave", () => {
  console.log(dynamicDDMenu);
  dynamicDDMenu.classList.remove("hovered");
  dynamicDDMenu.removeChild(document.getElementById("ddContents"));
});
