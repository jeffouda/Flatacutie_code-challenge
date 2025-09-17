function increase(button) {
  // Find the <span class="votes"> in the same row
  let voteSpan = button.parentElement.querySelector(".votes");
  let current = parseInt(voteSpan.innerText);
  voteSpan.innerText = current + 1;
}

function resetVotes(button) {
  // Find the <span class="votes"> in the same row
  let voteSpan = button.parentElement.querySelector(".votes");
  voteSpan.innerText = 0;
}
