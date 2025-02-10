"use strict";

const projectsContainer = document.querySelector("#project-cards");

function createNewCard(heading, body) {
  const cardHeading = document.createElement("p");
  cardHeading.textContent = heading;

  const cardBody = document.createElement("p");
  cardBody.textContent = body;

  const icon1 = document.createElement("img");
  icon1.src = "icons/star-plus-outline.svg";
  const icon2 = document.createElement("img");
  icon2.src = "icons/eye-plus-outline.svg";
  const icon3 = document.createElement("img");
  icon3.src = "icons/source-fork.svg";

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  const orangeBar = document.createElement("div");
  orangeBar.className = "orange-bar";

  const textContent = document.createElement("div");
  textContent.appendChild(cardHeading);
  textContent.appendChild(cardBody);

  const icons = document.createElement("div");
  icons.appendChild(icon1);
  icons.appendChild(icon2);
  icons.appendChild(icon3);
  icons.style.display = "flex";
  icons.style.justifyContent = "right";

  cardContainer.appendChild(orangeBar);
  cardContainer.appendChild(textContent);
  cardContainer.appendChild(icons);

  return cardContainer;
}

projectsContainer.appendChild(
  createNewCard(
    "Super Cool Project",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi ad, exercitationem maiores maxime doloremque pariatur dolorum aliquam, quae dolor labore deserunt commodi iure quisquam nostrum officiis aspernatur quaerat."
  )
);

projectsContainer.appendChild(
  createNewCard(
    "Super Cool Project",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit eius culpa iste aspernatur aperiam accusamus ipsam neque ea. Optio, natus tenetur eveniet perferendis a culpa debitis quisquam impedit cumque?"
  )
);
projectsContainer.appendChild(
  createNewCard(
    "Super Cool Project",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla laudantium atque nobis cumque doloremque, a ipsa incidunt natus tempore sint quas vel omnis, porro soluta reprehenderit similique impedit alias aut."
  )
);

projectsContainer.appendChild(
  createNewCard(
    "Super Cool Project",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla laudantium atque nobis cumque doloremque, a ipsa incidunt natus tempore sint quas vel omnis."
  )
);
projectsContainer.appendChild(
  createNewCard(
    "Super Cool Project",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla laudantium atque nobis cumque doloremque, a ipsa incidunt natus tempore sint quas vel omnis, porro soluta reprehenderit similique impedit alias aut."
  )
);
projectsContainer.appendChild(
  createNewCard(
    "Super Cool Project",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla laudantium atque nobis cumque doloremque, a ipsa incidunt natus tempore sint quas vel omnis, porro soluta reprehenderit similique impedit alias aut."
  )
);
icon2.style.fill = "blue !important";
