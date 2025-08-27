// Initial Navbar Counts
let heartCount = 3;
let coinCount = 100;
let copyCount = 0;

// DOM Elements
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");

// UI Function
function updateUI() {
  heartCountEl.textContent = heartCount;
  coinCountEl.textContent = coinCount;
  copyCountEl.textContent = `${copyCount} Copy`;
}

// Heart Clicks
document.querySelectorAll(".heart").forEach(heart => {
  heart.style.cursor = "pointer";
  heart.addEventListener("click", () => {
    heartCount++;
    updateUI();
  });
});

// Copy Button
document.querySelectorAll(".copy").forEach(copyBtn => {
  copyBtn.addEventListener("click", () => {
    const card = copyBtn.closest(".card");
    const number = card.querySelector(".number").textContent.trim();

    navigator.clipboard.writeText(number)
      .then(() => {
        alert(`Copied: ${number}`);
        copyCount++;
        updateUI();
      })
      .catch(err => {
        console.error("Copy failed:", err);
        alert("Failed to copy. Try again.");
      });
  });
});

// Call Button
document.querySelectorAll(".call").forEach(callBtn => {
  callBtn.addEventListener("click", () => {
    const card = callBtn.closest(".card");
    const service = card.querySelector("p").textContent.trim();
    const number = card.querySelector(".number").textContent.trim();

    if (coinCount < 10) {
      alert("Not enough coins to make this call!");
      return;
    }

    alert(`Calling ${service} at ${number}`);
    coinCount -= 10;
    updateUI();

    // Add to Call History
    const time = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.textContent = `${service} (${number}) - ${time}`;
    historyList.appendChild(li);
  });
});

// Clear Call History
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
