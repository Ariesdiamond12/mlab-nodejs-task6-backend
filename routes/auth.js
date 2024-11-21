const express = require("express");
const cors = require("cors");
const app = express();


const {
  addNewUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/db");
const router = express.Router();

const corsOptions = {
  origin: "https://m-lab-employee-app.vercel.app/", // Update with your frontend's URL if different
  methods: "GET,POST,PUT,DELETE", // Allowed methods
  allowedHeaders: "Content-Type,Authorization", // Allowed headers
};

app.use(cors(corsOptions));

router.post("/addUser", addNewUser);
router.get("/getUser", getUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
