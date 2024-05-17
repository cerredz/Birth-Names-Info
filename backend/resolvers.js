// resolvers for graphql
import Names from "./models/Names";

export const resolvers = {
  Query: {
    welcome() {
      return "Welcome to my database look-up website";
    },
    async getSimiliarNames(root, args) {
      const first_letter = args.name[0];
      const similarNames = await Names.find({
        name: { $regex: `^${first_letter}`, $options: "i" }, // finds name with the same first letter
      });
      return similarNames;
    },
  },
};
