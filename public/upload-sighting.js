const form = document.getElementById("eventForm");
const fomrMessageText = document.getElementsByClassName("form-message-text")[0];

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const location = document.getElementById("location").value;
  const text = document.getElementById("details").value;
  const title = document.getElementById("title").value;

  if (!location || !text || !title) {
    fomrMessageText.textContent = "Please complete all fields!";
    return;
  }

  const isoDateString = document.getElementById("datetime").value;

  if (!isoDateString) {
    fomrMessageText.textContent = "Please select a date and time!";
    return;
  }
  // Convert the string to a JavaScript Date object
  const date = new Date(isoDateString);
  // Format the date to a readable string
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const readableDate = date.toLocaleString("en-GB", options);

  const formData = {
    location: location,
    timestamp: readableDate,
    text: text,
    title: title,
  };

  try {
    // Send form data using fetch API
    fomrMessageText.textContent = "";
    const response = await fetch("./api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      fomrMessageText.innerHTML = `
      Your sighting was uploaded. View it <a href="./sightings.html">here</a> 
      `;
      form.reset();
    } else {
      fomrMessageText.textContent =
        "The server Ghosted you(!). Please try again.";
      console.error("Server Error:", response.statusText);
    }
  } catch (error) {
    fomrMessageText.textContent = "Serious ghouls! Please try again.";
    console.error("Error:", error);
  }
});
