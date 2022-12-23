import express, { NextFunction, Request, Response } from "express";
import { superHeros } from "../models/dataHeros";

const router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.send("Bienvenue sur mon site");
});

/**
 * TODO: Route GET : afficher tous les Super-Héros
 */
router.get("/superheros", (req: Request, res: Response) => {
  res.status(200).json(superHeros);
});

/**
 * TODO: Route GET : afficher un Super-Héros en fonction de son identifiant
 */
router.get("/superheros/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const superHero = superHeros.find((superHero) => superHero.id === id);
  if (superHero?.id == null) {
    res
      .status(404)
      .send(
        "Oups... Il semblerait qu'aucun Super-Héros ne correspond à cet identifiant"
      );
  } else if (superHero) {
    res.send(superHero);
  }
});

/**
 * TODO: Route POST : Ajouer un Super-Héros
 */
router.post("/superheros", (req: Request, res: Response) => {
  const RegEx = RegExp(/^[A-Z][A-Za-z\é\è\ê\- ]+$/);
  const ageRegEx = RegExp(/^[0-9]{2}$/);
  const emailRegEx = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i);
  const superHero = {
    id: superHeros.length + 1,
    nom: req.body.nom,
    pouvoir: req.body.pouvoir,
    age: req.body.age,
    email: req.body.email,
  };
  superHeros.push(superHero);
  console.log(req.body);
  console.log("Nom: " + RegEx.test(req.body.nom));
  console.log("Pouvoir: " + RegEx.test(req.body.pouvoir));
  console.log("Âge: " + ageRegEx.test(req.body.age));
  console.log("Email: " + emailRegEx.test(req.body.email));
  res.status(201).send(superHero);
});

/**
 * TODO: Route PUT : modifier un Super-Héros en fonction de son identifiant (Écrase les données)
 */
router.put(
  "/superheros/:id",
  (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    const superHero = superHeros.find((superHero) => superHero.id === id);
    if (!superHero) {
      next();
    } else {
      next();
    }
    res.send(superHero);
  },
  (req: Request, res: Response) => {
    const RegEx = RegExp(/^[A-Z][A-Za-z\é\è\ê\- ]+$/);
    const ageRegEx = RegExp(/^[0-9]{2}$/);
    const emailRegEx = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i);
    const id = parseInt(req.params.id);
    const hero = superHeros.find((hero) => hero.id == id);
    if (!hero) {
      res.status(404).send("Oups... Le Super-Héros n'a pas été trouvé");
      console.log("ERROR: Le Super-Héros n'existe pas");
    } else {
      hero.nom = req.body.nom;
      hero.pouvoir = req.body.pouvoir;
      hero.age = req.body.age;
      hero.email = req.body.email;
      console.log("SUCCESS: Le Super-Héros a été modifié avec succès !");
      console.log("Nom: " + RegEx.test(req.body.nom));
      console.log("Pouvoir: " + RegEx.test(req.body.pouvoir));
      console.log("Âge: " + ageRegEx.test(req.body.age));
      console.log("Email: " + emailRegEx.test(req.body.email));
    }
  }
);

/**
 * TODO: Route DELETE : supprimer un Super-Héros en fonction de son identifiant
 */
router.delete(
  "/superheros/:id",
  (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    const superHero = superHeros.find((superHero) => superHero.id == id);
    if (!superHero) {
      next();
    } else {
      next();
    }
  },
  (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const superHero = superHeros.find((superHero) => superHero.id == id);
    if (!superHero) {
      res.status(404).send(`ERROR: Le Super-Héros n°${id} n'existe pas`);
    } else {
      const index = superHeros.indexOf(superHero);
      superHeros.splice(index, 1);
      res.send(
        `Le Super-Héros ${superHero.nom} (ID n°${id}) a été supprimé avec succès !`
      );
      console.log("SUCCESS: Le Super-Héros a été supprimé avec succès !");
    }
  }
);

export default router;
