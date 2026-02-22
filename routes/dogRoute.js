import express from "express";
import * as path from "path";
import { dogArray, catArray } from "../data/data.js";

const router = express.Router();
const __dirname = path.resolve();

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    animalArray: dogArray,
    catArray: catArray,
    dogArray: dogArray,
    speciesName: "Dogs",
    speciesDescription: "Dogs are loyal, affectionate companions known for their boundless energy and eagerness to please. They thrive on human interaction, making them excellent partners for active lifestyles, family life, and outdoor adventures. Many dogs are highly trainable, often serving as service animals, therapy companions, or skilled working partners, demonstrating both intelligence and devotion. Their playful personalities and unwavering loyalty often make them the heart of a home.",
  });
});

router.get("/:slug", (req, res) => {
  const { slug } = req.params;

  const selectedAnimal = dogArray.find(animal => animal.slug === slug);

  if (!selectedAnimal) {
    return res.status(404).send("Not found");
  }

  res.render(path.join(__dirname, "views/pages/sub-page"), {
    animalArray: dogArray,
    catArray: catArray,
    dogArray: dogArray,
    animals: [selectedAnimal],
    speciesName: "Dogs"
  });
});

export default router;
