import Years from "./models/Years.js";
import Births from "./models/Births.js";
import fs from "fs";
import csv from "csv-parser";
// file with helper functions for the GraphQL resolvers

// returns the number of years (years) where a name (name) was the most popular
export async function getPeakPopularityHelper(name, years) {
  try {
    const all_years = await Years.find().select("year");

    const popularityPromises = all_years.map((yearDoc) => {
      const year = yearDoc.year;
      return getYearPopularity(name, year); // This returns a promise
    });

    // Wait for all promises to resolve
    const popularities = await Promise.all(popularityPromises); // each obj contains popularity percentage, count, and years

    // sort the popularities into descending order based on the popularity percentage
    popularities.sort((a, b) => b.percentage - a.percentage);
    const peak_years = popularities.slice(0, years);
    return peak_years;
  } catch (error) {
    console.log(`Error Getting the Peak Popularity for ${name}`, error);
  }
}

// helper function for the getPeakPopularityHelper function, gets the popularity of a name in a given year
async function getYearPopularity(name, year) {
  try {
    // get the total # of births that year
    const yearDoc = await Years.findOne({ year: year });
    const total_birth_count = yearDoc.total_births;
    let name_birth_count = 0;

    // get the total # of births that year with the inputted name
    (await Births.find({ name: name, year: year })).forEach((birth) => {
      name_birth_count += birth.count;
    });

    // return the popularity object using above information
    const popularity_percentage = (name_birth_count / total_birth_count) * 100;
    const popularityObj = {
      percentage: popularity_percentage,
      year: year,
      count: name_birth_count,
    };

    return popularityObj;
  } catch (error) {
    console.log(
      `Error getting the popularity for ${name} in year ${year}:`,
      error
    );
  }
}

// returns the most popular decade using the getPeakPopularity function
export async function getMostPopularDecadeHelper(name) {
  try {
    console.log(`Getting the most popular decade for the name ${name}...`);
    const popularities = await getPeakPopularityHelper(name);

    // group popularities by decade
    const decades = {};
    popularities.forEach((popularity) => {
      const decade = Math.floor(popularity.year / 10) * 10;
      if (!decades[decade]) {
        decades[decade] = 0;
      }
      decades[decade] += popularity.percentage;
    });

    // use grouping to determine the most popular decade, and then return it
    let most_popular_decade = null;
    let most_popular_decade_percentage = 0;

    for (const [decade, popularity] of Object.entries(decades)) {
      if (popularity > most_popular_decade_percentage) {
        most_popular_decade = decade;
        most_popular_decade_percentage = popularity;
      }
    }
    console.log(
      `Successfully determined the most popular decade for ${name}: ${most_popular_decade} `
    );
    return parseInt(most_popular_decade);
  } catch (error) {
    console.log(`Error getting the most popular decade for ${name}`);
  }
}

// returns the birth counts for a name of each century, starting from the 1800s
export async function getBirthCountByCenturyHelper(name) {
  const csvFilePath = `Births.csv`;
  const centuries = new Map();
  try {
    const data = await new Promise((resolve, reject) => {
      fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on("data", (row) => {
          const year = parseInt(row.Year, 10);
          const century = getCentury(year);

          if (!centuries.has(century)) {
            centuries.set(century, 0);
          }

          const births = parseInt(row.Count, 10);
          if (row.Name == name) {
            centuries.set(century, centuries.get(century) + births);
          }
        })
        .on("end", () => resolve(centuries))
        .on("error", (error) => reject(error));
    });

    // Return the birth counts for the 19th, 20th, and 21st century
    const returnObj = {
      century19: data.get(1800),
      century20: data.get(1900),
      century21: data.get(2000),
    };

    return returnObj;
  } catch (error) {
    console.log(
      `Error getting the birth counts by century for the name ${name}:`,
      error
    );
    throw error;
  }
}

// helper function to get the century of the inputted year
const getCentury = (year) => {
  const century = Math.floor(year / 100) * 100;
  return century;
};
