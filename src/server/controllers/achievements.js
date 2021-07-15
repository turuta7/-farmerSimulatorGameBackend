import Achievements from "../models/achievements.js";

const MAXCABBAGESEEDLINGS = 10;
const MAXCARROTSEEDLINGS = 10;
const MAXEXPANSIONOFTHEBEDSUPTO15CELLS = 15;
const MAXFORTHEFIRSTHARVEST = 1;
const MAXFORTHEFIRST5VISITSTOTHEGAME = 5;

const getAll = async (req, res) => {
  try {
    const returnResult = await await Achievements.find();
    res.send(returnResult);
  } catch (err) {
    res.send(err.message || err);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  
  try {
    res.send(
      await Achievements.findOne({
        userId:id,
      }).select(req.body.find)
    );
  } catch (err) {
    res.send(err.message || err);
  }
};

const create = async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.body;
    res.send(
      await Achievements.create({
        userId: id,
      })
    );
  } catch (err) {
    res.send(err.message || err || "error");
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    res.send(
      await Achievements.deleteOne({
        userId: id,
      })
    );
  } catch (err) {
    res.send(err.message || err);
  }
};

const update = async (req, res) => {
  const option = req.body;
  const { id } = req.params;
  try {
    const category = await Achievements.findOne({
      userId: id,
    });

    if (
      option.cabbageSeedlings >= MAXCABBAGESEEDLINGS &&
      option.cabbageSeedlings
    ) {
      option.cabbageSeedlings = MAXCABBAGESEEDLINGS;
    }

    if (
      option.carrotSeedlings >= MAXCARROTSEEDLINGS &&
      option.carrotSeedlings
    ) {
      option.carrotSeedlings = MAXCARROTSEEDLINGS;
    }

    if (
      option.expansionOfTheBedsUpTo15Cells >=
        MAXEXPANSIONOFTHEBEDSUPTO15CELLS &&
      option.expansionOfTheBedsUpTo15Cells
    ) {
      option.expansionOfTheBedsUpTo15Cells = MAXEXPANSIONOFTHEBEDSUPTO15CELLS;
    }

    if (
      option.forTheFirstHarvest >= MAXFORTHEFIRSTHARVEST &&
      option.forTheFirstHarvest
    ) {
      option.forTheFirstHarvest = MAXFORTHEFIRSTHARVEST;
    }
    if (
      category.forTheFirst5VisitsToTheGame >= MAXFORTHEFIRST5VISITSTOTHEGAME
    ) {
      option.forTheFirst5VisitsToTheGame = MAXFORTHEFIRST5VISITSTOTHEGAME;
    } else {
      option.forTheFirst5VisitsToTheGame =
        category.forTheFirst5VisitsToTheGame++;
    }
    await Achievements.findOneAndUpdate(
      {
        userId: id,
      },
      option
    ),
      res.send(
        await Achievements.findOne({
          userId: id,
        })
      );
  } catch (err) {
    res.send(err.message || err);
  }
};

export default {
  create,
  getAll,
  remove,
  update,
  getOne,
};
