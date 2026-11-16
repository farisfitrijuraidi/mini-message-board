# Mini Message Board

A full-stack message board web application built with Node.js, Express, EJS, and PostgreSQL. I created this project as part of The Odin Project's Node.js curriculum to practise building an Express server using the Model-View-Controller (MVC) pattern, handling form submissions, and storing persistent data in a relational database.

**Live Demo:** [Mini Message Board on Render](https://mini-message-board-5by1.onrender.com/) *(Note: Hosted on Render's free tier, so the initial page load may take up to 50 seconds if the server has spun down).*

---

## Features

- **MVC and Database Architecture**: Organised into separate `routes`, `controllers`, `views`, `db`, and `errors` directories to keep routing, database queries, and templates separate.
- **Persistent PostgreSQL Storage**: Connects to a PostgreSQL database using `node-postgres` (`pg.Pool`) to store messages permanently with automatic timestamps (`TIMESTAMPTZ`) and identity primary keys.
- **Automated Database Seeding**: Includes a standalone CLI script (`db/populatedb.js`) using `pg.Client` and `process.argv` to create tables and insert starter records into local or production databases.
- **Server-Side Validation and Sanitisation**: Uses `express-validator` (`body()`, `param()`, and `matchedData()`) to validate message inputs, block invalid URL parameters, and display clear error messages.
- **Dynamic EJS Templating**: Uses Embedded JavaScript (EJS) templates and reusable partial views (`message.ejs` and `errors.ejs`) to render the message feed, form errors, and individual message detail pages (`/messages/:messageId`).
- **Custom Error Handling**: Implements a custom `CustomNotFoundError` class and central Express error-handling middleware to catch invalid or non-existent message IDs and return `404 Not Found` responses.

---

## What I Learned

Upgrading this project from an in-memory array to PostgreSQL showed me how real web applications store, validate, and serve persistent data.

Key takeaways from this project include:

- **Connecting Express to PostgreSQL**: I learned the difference between a single `pg.Client` (useful for one-off seed scripts) and a `pg.Pool` (which reuses open connections efficiently for a live web server).
- **Preventing SQL Injection**: Instead of joining user inputs directly into SQL strings, I used parameterised queries (`$1, $2`) so PostgreSQL treats all incoming data strictly as plain text.
- **The Model-View-Controller (MVC) Pattern**: Separating SQL logic into `db/queries.js` kept `indexController.js` focused purely on handling HTTP requests and responses.
- **Input and Parameter Validation**: Using `express-validator` taught me how to sanitise form fields with `.trim()`, enforce length and character rules, and validate URL parameters with `param()` and `.toInt()` before querying the database.
- **Database Seeding Across Environments**: Writing `db/populatedb.js` with `process.argv[2]` allowed me to populate both my local Linux PostgreSQL database and my cloud Neon database without hardcoding credentials.
- **Cloud Deployment**: I deployed the Express web service on Render and connected it to a hosted PostgreSQL database on Neon using environment variables.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.6 or newer recommended for `--env-file-if-exists` support)
- [PostgreSQL](https://www.postgresql.org/) installed locally (or a cloud PostgreSQL connection string)

### Installation and Usage

1. Clone the repository:
   ```bash
   git clone [https://github.com/farisfitrijuraidi/mini-message-board.git](https://github.com/farisfitrijuraidi/mini-message-board.git)
   cd mini-message-board
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a local PostgreSQL database (for example, `mini_message_board`) and add a `.env` file in the project root with your connection string:
   ```env
   DATABASE_URL=postgresql://<role_name>:<role_password>@localhost:5432/mini_message_board
   ```

4. Run the seed script once to create the `messages` table and insert starter messages:
   ```bash
   node db/populatedb.js "postgresql://<role_name>:<role_password>@localhost:5432/mini_message_board"
   ```

5. Start the server:
   ```bash
   node --env-file-if-exists=.env --watch app.js
   ```

6. Open your browser and visit any of the supported endpoints:
   - `http://localhost:3000/` (Home page displaying all messages)
   - `http://localhost:3000/new` (Form page to submit a new message)
   - `http://localhost:3000/messages/<messageId>` (Individual message details page)
   - Visiting an invalid or non-existent message ID triggers the custom `404` error handler.

---

## Acknowledgements

- Based on the [Mini Message Board](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) and [Using PostgreSQL](https://www.theodinproject.com/lessons/nodejs-using-postgresql) lessons from The Odin Project.
- Built with [Express](https://expressjs.com/), [EJS](https://ejs.co/), [node-postgres](https://node-postgres.com/), and [express-validator](https://express-validator.github.io/).