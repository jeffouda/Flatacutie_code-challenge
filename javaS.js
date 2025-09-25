// Fetch all characters once when page loads
fetch("http://localhost:3001/characters")
  .then((res) => res.json())
  .then((data) => {
    const animalList = document.getElementById("animal-list");

    data.forEach((animal) => {
      const btn = document.createElement("button");
      btn.textContent = animal.name;

      // Show details when clicked
      btn.addEventListener("click", () => renderDetails(animal));

      animalList.appendChild(btn);
    });
  })
  .catch((err) => console.error("Error fetching animals:", err));

// Render animal details
function renderDetails(animal) {
  const details = document.getElementById("animal-details");

  // Clear old details only when switching animals
  details.innerHTML = "";

  const name = document.createElement("h2");
  name.textContent = animal.name;

  const img = document.createElement("img");
  img.src = animal.image;
  img.alt = animal.name;

  const voteBox = document.createElement("div");
  voteBox.classList.add("vote-box");

  // vote update directly
  const votes = document.createElement("span");
  votes.classList.add("votes");
  votes.textContent = animal.votes;

  // Vote button
  const voteBtn = document.createElement("button");
  voteBtn.type = "button";
  voteBtn.textContent = "Vote";
  voteBtn.addEventListener("click", () => {
    // fetch(`http://localhost:3001/characters/${animal.id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ votes: animal.votes + 1 }),
    // })
    //   .then((res) => res.json())
    //   .then((updatedAnimal) => {
    //     animal.votes = updatedAnimal.votes;
    //     votes.textContent = updatedAnimal.votes;
    //   });
    updateVotes(animal, votes, animal.votes + 1);
  });

  // Reset button
  const resetBtn = document.createElement("button");
  resetBtn.type = "button";
  resetBtn.textContent = "Reset";
  resetBtn.addEventListener("click", () => {
    // fetch(`http://localhost:3001/characters/${animal.id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ votes: 0 }),
    // })
    //   .then((res) => res.json())
    //   .then((updatedAnimal) => {
    //     animal.votes = updatedAnimal.votes;
    //     votes.textContent = updatedAnimal.votes;
    //   });
    updateVotes(animal, votes, 0);
  });

  voteBox.append(voteBtn, votes, resetBtn);
  details.append(name, img, voteBox);
}

function updateVotes(animal, votes, count) {
  fetch(`http://localhost:3001/characters/${animal.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ votes: count }),
  })
    .then((res) => res.json())
    .then((updatedAnimal) => {
      animal.votes = updatedAnimal.votes;
      votes.textContent = updatedAnimal.votes;
    });
}
