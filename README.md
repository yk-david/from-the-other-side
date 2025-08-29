# From The Other Side

A web application for tracking and sharing ghost sightings. Users can view existing sightings, submit their own, and get real-time news updates.

## Getting Started

### Prerequisites

*   Node.js installed on your machine.

### Installation

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the server, run the following command:

```bash
npm start
```

The application will be running on `http://localhost:8000`.

## API Endpoints

The application provides the following API endpoints:

*   **`GET /api`**: Retrieves a list of all ghost sightings.
*   **`POST /api`**: Submits a new ghost sighting. The request body should be a JSON object with the sighting details.
*   **`GET /api/news`**: Establishes a Server-Sent Events (SSE) connection to receive real-time updates on ghost-related news.
