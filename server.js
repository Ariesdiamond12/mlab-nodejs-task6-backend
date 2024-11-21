const express = require("express");
const router = require("./routes/auth");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

// CORS configuration
const corsOptions = {
  origin: "https://mlab-nodejs-task8-server.onrender.com", // Update with your frontend's URL if different
  methods: "GET,POST,PUT,DELETE", // Allowed methods
  allowedHeaders: "Content-Type,Authorization", // Allowed headers
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);
app.use(bodyParser.json);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
