import { gql } from '@apollo/client';

export const CREATE_BIRD_MUTATION = gql`
  mutation createBird(
    $common_name: String!
    $latin_name: String!
    $bird_family: String!
    $uk_conservation_status: String!
    $uk_population: Int!
  ) {
    createBird(
      common_name: $common_name
      latin_name: $latin_name
      bird_family: $bird_family
      uk_conservation_status: $uk_conservation_status
      uk_population: $uk_population
    ) {
      id
    }
  }
`;
