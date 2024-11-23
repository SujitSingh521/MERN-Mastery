1. Package Installations
In your project directory, open the terminal and run the following commands to install the necessary packages:

Express: Express is a lightweight web application framework for Node.js. It simplifies the process of creating APIs and handling HTTP requests.

bash
Copy code
npm i express
Nodemon: Nodemon is a utility that monitors for any changes in your source code and automatically restarts the server. This is helpful during development.

bash
Copy code
npm i nodemon --save-dev
2. Create a Server using Express.js
Now, let's create a simple Express.js server.

Create a New File server.js: In the root directory of your project, create a file called server.js.

Set up Basic Express Server:

Inside server.js, write the following code to set up a basic Express server:

javascript
Copy code
const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, MERN Stack!');
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
This code creates an Express application, sets up a route at the root (/), and listens on port 5000.

3. Add Nodemon to package.json for Development
Now, we need to add a script in package.json to run the server using nodemon for automatic restarting.

Open package.json in your project and find the scripts section.

Modify the scripts section to include the server script using nodemon:

json
Copy code
"scripts": {
    "server": "nodemon server.js"
}
This will allow you to run the server with npm run server, and Nodemon will automatically restart the server whenever you make changes to server.js.

4. Run the Server
Now that everything is set up, you can start the server.

Run the server in the terminal using the following command:

bash
Copy code
npm run server
Access the server: Open your browser (Google Chrome or any browser) and visit the following URL:

arduino
Copy code
http://localhost:5000/
You should see the message: Hello, MERN Stack! displayed on the page.
