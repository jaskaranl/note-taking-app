const express = require("express");
const tasks = require("./Routes/Tasks");
const app = express();
const port = 3000;

//middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.send("tassk");
});

app.use("/api/v1/tasks", tasks);

app.listen(port, console.log(`server is listening to port ${port}`));
