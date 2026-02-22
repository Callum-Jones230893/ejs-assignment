import express from "express";
import "dotenv/config";
import homepageRoute from "./routes/homepageRoute.js";
import catRoute from "./routes/catRoute.js";
import dogRoute from "./routes/dogRoute.js";

const app = express();

app.use(express.static('public'));

app.set('view engine',"ejs")

app.use("/", homepageRoute);
app.use("/cats", catRoute);
app.use("/dogs", dogRoute);

app.use((req, res) => {
  res.status(404).send(`
    <h2>Page Not Found!</h2>
    <p>The page ${req.originalUrl} does not exist </p>
  `)
})

const port = process.env.PORT || 3000;
app.listen(port, () => (
  console.log(`Listening on port ${port}..`)
));