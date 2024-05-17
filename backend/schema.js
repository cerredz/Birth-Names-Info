import { gql } from "apollo-server-express";
/*
export const typeDefs = gql`

  type Recipe {
    id: ID!
    title: String!
    steps: [String!]!
    ingredients: [String!]!
    author: Author!
    recipes: [Recipe!]!
  }
  type Author {
    id: ID!
    name: String!
  }
  
  type Query {
    recipes: [Recipe]
    authors: [Author]
  }
`;
 */

export const typeDefs = gql`
  type Birth {
    id: ID!
    Name: String!
    Year: String!
    Gender: String!
    Count: Int!
  }
  type NameCount {
    name: String!
    count: Int!
    gender: String!
  }
  type Years { # almost like the Birth Type, just organized by year
    id: Int! # actual year as the ID
    Names: [NameCount!]!
    Total_Names: Int!
    Total_Births: Int!
  }
  type Name { # collection of all the different unique names
    id: ID!
    name: String!
  }

  type Query {
    welcome: String
    getBirths: [Birth!]!
  }
`;
