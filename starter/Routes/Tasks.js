const express = require("express");

const router = express.Router();

const { getAllTasks } = require("../Controller/Tasks.js");
router.route("/").get(getAllTasks);

module.exports = router;
