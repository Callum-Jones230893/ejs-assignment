import express from "express";
import * as path from "path";
import { catArray, dogArray } from "../data/data.js";

const router = express.Router();
const __dirname = path.resolve();

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    animalArray: catArray,
    catArray: catArray,
    dogArray: dogArray,
    speciesName: "Cats",
    speciesDescription: "Cats are graceful, independent, and affectionate in their own unique way. They offer companionship that is calm and soothing, often providing comfort with gentle purring and soft, playful antics. Cats are low-maintenance pets, making them ideal for busy households or smaller living spaces. Their curiosity, intelligence, and quirky personalities can bring joy and laughter to daily life, creating a quiet but meaningful bond with their owners.",
  });
});

router.get("/:slug", (req, res) => {
  const { slug } = req.params;

  const selectedAnimal = catArray.find(animal => animal.slug === slug);

  if (!selectedAnimal) {
    return res.status(404).send("Not found");
  }

  res.render(path.join(__dirname, "views/pages/sub-page"), {
    animalArray: catArray,
    catArray: catArray,
    dogArray: dogArray,
    animals: [selectedAnimal],
    speciesName: "Cats"
  });
});

export default router;