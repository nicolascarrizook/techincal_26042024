import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches($pageSize: Int, $after: String) {
    launches(pageSize: $pageSize, after: $after) {
      cursor
      hasMore
      launches {
        id
        mission {
          name
        }
        rocket {
          name
        }
        site
      }
    }
  }
`;
