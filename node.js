document.addEventListener("DOMContentLoaded", function () {
  const slotsData = [
    { id: 1, name: "A1", available: true },
    { id: 2, name: "A2", available: true },
    { id: 3, name: "A3", available: true },
    { id: 4, name: "B1", available: true },
    { id: 5, name: "B2", available: true },
    { id: 6, name: "B3", available: true },
    { id: 7, name: "C1", available: true },
    { id: 8, name: "C2", available: true },
    { id: 9, name: "C3", available: true }
  ];

  const slotsContainer = document.getElementById("slots-container");

  // Render the parking slots on the page
  slotsData.forEach((slot) => {
    const slotDiv = document.createElement("div");
    slotDiv.classList.add("slot");
    if (slot.available) {
      slotDiv.classList.add("available");
      slotDiv.innerHTML = `${slot.name} <br><button onclick="bookSlot(${slot.id})">Book</button>`;
    } else {
      slotDiv.classList.add("occupied");
      slotDiv.innerHTML = `${slot.name} <br>Occupied`;
    }

    slotsContainer.appendChild(slotDiv);
  });

  // Book a parking slot
  window.bookSlot = function (slotId) {
    const slot = slotsData.find((s) => s.id === slotId);
    if (slot && slot.available) {
      slot.available = false; // Mark slot as booked
      alert(`Slot ${slot.name} booked successfully!`);
      updateSlots(); // Update the display
    } else {
      alert("Slot is already occupied.");
    }
  };

  // Update the display of parking slots
  function updateSlots() {
    slotsContainer.innerHTML = "";
    slotsData.forEach((slot) => {
      const slotDiv = document.createElement("div");
      slotDiv.classList.add("slot");
      if (slot.available) {
        slotDiv.classList.add("available");
        slotDiv.innerHTML = `${slot.name} <br><button onclick="bookSlot(${slot.id})">Book</button>`;
      } else {
        slotDiv.classList.add("occupied");
        slotDiv.innerHTML = `${slot.name} <br>Occupied`;
      }

      slotsContainer.appendChild(slotDiv);
    });
  }
});
