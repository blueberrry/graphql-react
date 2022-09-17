import { gql } from '@apollo/client';

export const LOAD_BIRDS = gql`
  query {
    getAllBirds {
      id
      common_name
      latin_name
      bird_family
      uk_conservation_status
      uk_population
    }
  }
`;
