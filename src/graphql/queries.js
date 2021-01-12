import { gql } from 'apollo-boost';

export const FETCH_REPOSITORIES = gql`
query	{
  repositories{
    edges{
      node{
        id,
        ownerAvatarUrl,
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        ratingAverage,
        reviewCount
      }
    }
  }
}
`;

export const AUTHORIZED_USER = gql`
query	{
  authorizedUser{
    id
    username
  }
}
`;