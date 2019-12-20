const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require('path');

const app = express();

app.use(express.json({ extended: false }));

mongoose
  .connect(config.get("mongoURI"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log("bd connected"))
  .catch(err => console.log(err));

app.use("/cv-garage", require("./routers/methodes-crud"));
app.use("/api/users", require("./routers/API/users"));
app.use("/api/auth", require("./routers/API/auth"));
app.use("/api/profiles", require("./routers/API/profiles"));
app.use("/api/posts", require("./routers/API/posts"));

// server static assets in production

if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
  err
    ? console.log("server failed")
    : console.log("server is running on port 5000");
});
