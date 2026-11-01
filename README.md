# Mini Message Board

A dynamic message board web application built with Node.js, Express, and EJS. I created this project as part of The Odin Project's Node.js curriculum to practice building an Express server from scratch, structuring an application with the Model-View-Controller (MVC) pattern, and handling user form submissions.

The main objective was to render an interactive feed of messages using server-side templates, process incoming `POST` requests from a form, and display individual message details using dynamic route parameters.

---

## Features

- **MVC Architecture**: Organised cleanly into separate `routes`, `controllers`, `views`, and `errors` directories for maintainable and scalable code.
- **Dynamic EJS Templating**: Uses Embedded JavaScript (EJS) templates and reusable partial views (`message.ejs`) to render message lists and detail pages dynamically.
- **Form Handling and Validation**: Parses URL-encoded form payloads and validates inputs on both the client (`required` attributes) and server (trimming whitespace and rejecting empty submissions).
- **Unique Message Identification**: Assigns a unique UUID (`crypto.randomUUID()`) to every message and serves dedicated detail pages via dynamic route parameters (`/messages/:messageId`).
- **Custom Error Handling**: Implements a custom `CustomNotFoundError` class and central Express error-handling middleware to catch invalid message IDs and return accurate `404 Not Found` responses.

---

## What I Learned

Moving from pure Node.js to Express showed me how a web framework simplifies routing, request parsing, and view rendering while introducing new architectural patterns.

Key takeaways from this project include:

- **The Model-View-Controller (MVC) Pattern**: I learned how to separate routing declarations (`indexRouter.js`) from request-handling logic (`indexController.js`) and presentation templates (`views/`). Keeping data and logic inside the controller made the routes clean and easy to read.
- **Server-Side Rendering with EJS**: I practiced passing data from controllers into EJS templates via the `res.render` locals object, looping through data arrays safely, and breaking repeated UI elements into modular partial views using `<%- include() %>`.
- **Parsing Form Data with Middleware**: I learned how Express middleware operates in order of declaration, using `express.urlencoded({ extended: true })` to parse incoming `POST` request bodies into `req.body` before handing them off to the router.
- **Dynamic Routing and Guard Clauses**: Working with `req.params` taught me how to extract URL parameters, look up matching records in memory, and write early-exit guard clauses to prevent hanging requests or server crashes when an item is missing.
- **Custom Error Classes and Middleware**: I created a custom `CustomNotFoundError` extending JavaScript's native `Error` class and caught it with a 4-parameter Express error-handling middleware (`(err, req, res, next)`) to deliver clean `404` status responses.
- **Modern Node.js CLI Flags**: Instead of relying on third-party packages for local development, I used Node's native `--env-file-if-exists=.env` and `--watch` flags to load environment variables safely without risking production crashes.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.6 or newer recommended for `--env-file-if-exists` support)

### Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/farisfitrijuraidi/mini-message-board.git
   cd mini-message-board
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node --env-file-if-exists=.env --watch app.js
   ```

4. Open your browser and navigate to any of the supported endpoints:
   - `http://localhost:3000/` (Home page displaying all messages)
   - `http://localhost:3000/new` (Form page to submit a new message)
   - `http://localhost:3000/messages/<messageId>` (Individual message details page)
   - Visiting a non-existent message ID triggers the custom 404 error handler.

---

## Acknowledgements

- This project is based on the [Mini Message Board assignment](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) from The Odin Project.
- Built using [Express](https://expressjs.com/), [EJS](https://ejs.co/), and the official [Node.js Documentation](https://nodejs.org/).