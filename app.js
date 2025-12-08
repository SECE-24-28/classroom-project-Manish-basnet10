// Select all product cards
const cards = document.querySelectorAll(".bg-white");

// Add click event to each card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Get product name inside the card
    const name = card.querySelector("h2").innerText;

    // Show alert
    alert("You clicked: " + name);
  });
});
