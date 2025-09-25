// Fetch all characters from the local JSON server
fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    const animalList = document.getElementById("animal-list");

    data.forEach((animal) => {
      const btn = document.createElement("button");
      btn.textContent = animal.name;

      // Click event to show animal details
      btn.addEventListener("click", () => showDetails(animal));

      animalList.appendChild(btn);
    });
  })
  .catch((err) => console.error("Error fetching animals:", err));

// Show animal details dynamically
function showDetails(animal) {
  const details = document.getElementById("animal-details");

  // Clear previous content
  details.innerHTML = "";

  // Create elements dynamically
  const name = document.createElement("h2");
  name.textContent = animal.name;

  const img = document.createElement("img");
  img.src = animal.image;
  img.alt = animal.name;

  const voteBox = document.createElement("div");
  voteBox.classList.add("vote-box");

  const voteBtn = document.createElement("button");
  voteBtn.textContent = "Vote";
  voteBtn.addEventListener("click", () => {
    animal.votes++;
    votes.textContent = animal.votes;
  });

  const votes = document.createElement("span");
  votes.classList.add("votes");
  votes.textContent = animal.votes;

  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Reset";
  resetBtn.addEventListener("click", () => {
    animal.votes = 0;
    votes.textContent = 0;
  });

  voteBox.appendChild(voteBtn);
  voteBox.appendChild(votes);
  voteBox.appendChild(resetBtn);

  details.appendChild(name);
  details.appendChild(img);
  details.appendChild(voteBox);
}
