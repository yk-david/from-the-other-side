const eventSource = new EventSource("/api/news");
const liveContainer = document.getElementById("live-container");

// Handle live story updates
eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  const story = data.story;
  liveContainer.textContent = story;
};

// Handle connection loss
eventSource.onerror = () => {
  console.log("Connection lost. Attempting to reconnect...");
};
