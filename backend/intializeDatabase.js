import fs from "fs";
import csv from "csv-parser";
import mongoose from "mongoose";
import Births from "./models/Births.js";
import Names from "./models/Names.js";
import Years from "./models/Years.js";
// file to convert the CSV file into a MongoDB database, will create a births, names, and year collection (only have to run each helper function once)
export const initializeDatabase = async () => {
  try {
    //await fillBirths();
    //await fillNames();
    //await fillYears();
  } catch (error) {
    console.log("Error initializing the datbase", error);
  }
};

// fill the births database using the csv file
const fillBirths = async () => {
  try {
    const csvFilePath = `Births.csv`;
    const births = [];
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (row) => {
        const newBirth = {
          name: row.Name,
          year: parseInt(row.Year, 10),
          gender: row.Gender,
          count: parseInt(row.Count, 10),
        };
        births.push(newBirth);
      })
      .on("end", async () => {
        await Births.insertMany(births);
        console.log("Births Successfully Stored in the Database");
      });
  } catch (error) {
    console.log("Error initializing the Births Database", error);
  }
};

// fill the unique names database using the Births Collection in the MongoDB Database
const fillNames = async () => {
  try {
    const births = await Births.find();
    const namesSeen = new Set();
    const uniqueNames = [];

    births.forEach((birth) => {
      const name = birth.name;
      if (!namesSeen.has(name)) {
        uniqueNames.push({ name: name });
        namesSeen.add(name);
      }
    });

    await Names.insertMany(uniqueNames);
  } catch (error) {
    console.log("Error initializing the Names Database", error);
  }
};

// fill the years database using the csv file
const fillYears = async (filePath) => {
  try {
    const csvFilePath = `Births.csv`;
    const years = new Map();
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (row) => {
        const year = row.Year;
        // create the year object to be inputted into map
        const yearObject = {
          year: row.Year,
          nameCount: {
            name: row.Name,
            count: parseInt(row.Count, 10),
            gender: row.Gender,
          },
        };

        // make sure each year can have multiple yearObjects
        if (!years.has(year)) {
          years.set(year, [yearObject]);
        } else {
          years.get(year).push(yearObject);
        }
      })
      .on("end", async () => {
        // map is fully built, use it to get the total names and total births for each year
        let total_births = new Map();
        let total_names = new Map();
        years.forEach((year) => {
          let current_year = null; // actual value of the current key (1880, 1881, etc)
          let total_births_for_year = 0;
          let unique_names = new Set();
          year.forEach((birth) => {
            // looping through data for the current year
            if (current_year == null) current_year = birth.year;
            total_births_for_year += birth.nameCount.count;
            unique_names.add(birth.nameCount.name);
          });
          total_births.set(current_year, total_births_for_year);
          total_names.set(current_year, unique_names.size);
        });

        /* TODO, fill the ACTUAL years MongoDB database using the original years map, total_births map, and total_names map */
        const yearsSchema = [];
        years.forEach((yearObjects, year) => {
          yearsSchema.push({
            year: parseInt(year, 10),
            nameCount: yearObjects.map((birth) => birth.nameCount),
            total_names: total_names.get(year),
            total_births: total_births.get(year),
          });
        });

        await Years.insertMany(yearsSchema);
      });
  } catch (error) {
    console.log("Error initializing the Years Database", error);
  }
};
