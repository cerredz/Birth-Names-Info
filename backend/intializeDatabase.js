import fs from "fs";
import csv from "csv-parser";
import mongoose from "mongoose";
import Births from "./models/Births.js";
// file to convert the CSV file into a MongoDB database, will create a births, names, and year collection (only have to run each helper function once)
export const initializeDatabase = async () => {
  try {
    //await fillBirths();
    await fillNames();
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
      .on("data", async (row) => {
        const newBirth = {
          Name: row.Name,
          Year: row.Year,
          Gender: row.Gender,
          Count: row.Count,
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

// fill the unique names database using _____
const fillNames = async (filePath) => {
  try {
  } catch (error) {
    console.log("Error initializing the Names Database", error);
  }
};

const fillYears = async (filePath) => {
  try {
  } catch (error) {
    console.log("Error initializing the Years Database", error);
  }
};
