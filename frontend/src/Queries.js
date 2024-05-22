import { gql } from "@apollo/client";

export const IS_NAME_REGISTERED = gql`
  query ExampleQuery($name: String!) {
    isNameRegistered(name: $name)
  }
`;

export const IS_NAME_BOY = gql`
  query ExampleQuery($name: String!) {
    isBoyName(name: $name)
  }
`;
export const IS_NAME_GIRL = gql`
  query ExampleQuery($name: String!) {
    isGirlName(name: $name)
  }
`;
export const IS_NAME_NEUTRAL = gql`
  query ExampleQuery($name: String!) {
    isNeutralName(name: $name)
  }
`;

export const GET_NAME_DATA = gql`
  query ExampleQuery($name: String!, $years: Int!, $gender: String!) {
    getSimiliarNames(name: $name, gender: $gender)
    getNameCount(name: $name)
    getNamePopularity(name: $name)
    getNameRanking(name: $name)
    getPercentile(name: $name)
    getPeakPopularity(name: $name, years: $years) {
      percentage
      count
      year
    }
    getMostPopularDecade(name: $name)
    getBirthCountByCentury(name: $name) {
      century19
      century20
      century21
    }
  }
`;
