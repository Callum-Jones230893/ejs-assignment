import express from "express";
import * as path from "path";
import { catArray, dogArray } from "../data/data.js";

const router = express.Router();
const __dirname = path.resolve();

const allSpecies = [...catArray, ...dogArray]

const animalsByGroup = [
  { name: "Cats", animals: catArray },
  { name: "Dogs", animals: dogArray }
];

router.get("/", (req, res) => {
  res.render("pages/page", {
    allAnimalsArray: animalsByGroup,
    catArray: catArray,
    dogArray: dogArray
  });
});

router.get("/home/:slug", (req, res) => {
  const { slug } = req.params;

  const selectedSpecies = allSpecies.find(species => species.slug === slug);

  if (!selectedSpecies) {
    return res.status(404).send("Not found");
  }

  res.render("views/pages/route-content", {
    allAnimalsArray: animalsByGroup,
    homeSpecies: selectedSpecies,
    catArray: catArray,
    dogArray: dogArray
  });
});

export default router;