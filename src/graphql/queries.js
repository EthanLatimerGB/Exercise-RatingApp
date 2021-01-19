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

export const FETCH_SINGLE_REPOSITORY = gql`
query FetchRepository($id: ID!){
  repository(id: $id){
    id,
    ownerAvatarUrl,
    url,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount
  }
}
`;