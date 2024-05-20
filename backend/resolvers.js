// resolvers for graphql
import Names from "./models/Names.js";
import Births from "./models/Births.js";
import Years from "./models/Years.js";
import Rankings from "./models/Ranking.js";

export const resolvers = {
  Query: {
    // returns whether or not we have data on the name the user inputted
    async isNameRegistered(root, args) {
      const correctlyFormattedName =
        args.name.trim().charAt(0).toUpperCase() +
        args.name.trim().slice(1).toLowerCase();
      const nameInstances = await Names.find({ name: correctlyFormattedName });
      return nameInstances.length !== 0;
    },
    // returns whether or not the name inputted is a boy name
    async isBoyName(root, args) {
      return (
        (await Births.countDocuments({ name: args.name, gender: "M" })) >= 20
      ); // need more than 20 instances of a name for it to be considered a gender
    },
    // returns whether or not the name inputted is a girl name
    async isGirlName(root, args) {
      return (
        (await Births.countDocuments({ name: args.name, gender: "F" })) >= 20
      ); // need more than 20 instances of a name for it to be considered a gender
    },
    //returns whether or not a name could be both a boy and a girl name
    async isNeutralName(root, args) {
      return (
        (await Births.countDocuments({ name: args.name, gender: "F" })) >= 20 &&
        (await Births.countDocuments({ name: args.name, gender: "M" })) >= 20
      );
    },
    // returns names starting with the same letter
    async getSimiliarNames(root, args) {
      const first_letter = args.name[0];
      let similarNames = await Births.find({
        name: { $regex: `^${first_letter}`, $options: "i" }, // finds name with the same first letter
        gender: args.gender,
      });
      return similarNames;
    },
    // returns the amount of people with the same inputted name
    async getNameCount(root, args) {
      let count = 0;
      const births_with_name = await Births.find({ name: args.name });
      births_with_name.forEach((birth) => {
        count += birth.count;
      });
      return count;
    },
    // returns the popularity of the inputted name
    async getNamePopularity(root, args) {
      const popularity = await Rankings.find({ name: args.name });
      return parseFloat(popularity.toFixed(2));
    },
  },
};
