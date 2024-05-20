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
    name: String!
    year: String!
    gender: String!
    count: Int!
  }
  type NameCount {
    name: String!
    count: Int!
    gender: String!
  }
  type Years { # almost like the Birth Type, just organized by year
    id: Int! # actual year as the ID
    names: [NameCount!]!
    total_names: Int!
    total_births: Int!
  }
  type Name { # collection of all the different unique names
    id: ID!
    name: String!
  }

  type Query {
    isNameRegistered(name: String!): Boolean!
    isBoyName(name: String!): Boolean!
    isGirlName(name: String!): Boolean!
    isNeutralName(name: String!): Boolean!
    getSimiliarNames(name: String!, gender: String!): [Name!]!
    getNameCount(name: String!): Int!
    getNamePopularity(name: String!): Float!
  }
`;
