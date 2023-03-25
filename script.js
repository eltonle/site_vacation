const detailsForm = document.querySelector("#destination_details_form");

detailsForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  // 1.extrait the value from each form field
  const destName = event.target.elements["name"].value;
  const destLocation = event.target.elements["location"].value;
  const destPhoto = event.target.elements["photo"].value;
  const destDesc = event.target.elements["description"].value;
  console.log(destName);

  // 2. clear out the form fields
  for (let i = 0; i < detailsForm.length; i++) {
    detailsForm.elements[i].value = "";
  }

  //3. run a function that create the new card
  const destCard = createDestinationCard(
    destName,
    destLocation,
    destPhoto,
    destDesc
  );

  var wishListContainer = document.querySelector("#destinations_container");

  if (wishListContainer.children.length === 0) {
    document.querySelector("#title").textContent = "My Wish List";
  }

  // 5. add the card

  document.querySelector("#destinations_container").appendChild(destCard);
}

function createDestinationCard(name, location, photoUrl, description) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.setAttribute("alt", name);

  var constantPhotoUrl = "images/gateau.jpg";

  if (photoUrl.length === 0) {
    img.setAttribute("src", constantPhotoUrl);
  } else {
    img.setAttribute("src", photoUrl);
  }

  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = name;
  cardBody.appendChild(cardTitle);

  const cardSubtitle = document.createElement("h4");
  cardSubtitle.textContent = location;
  cardBody.appendChild(cardSubtitle);

  if (description.length === 0) {
    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = description;
    cardBody.appendChild(cardText);
  }

  var cardDeleteBtn = document.createElement("button");
  cardDeleteBtn.textContent = "Remove";

  cardDeleteBtn.addEventListener("click", removeDestination);
  cardBody.appendChild(cardDeleteBtn);

  card.appendChild(cardBody);

  return card;
}

function removeDestination(event) {
  const card = event.target.parentElement.parentElement;
  card.remove();
}
