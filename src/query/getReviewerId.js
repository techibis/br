import gql from "graphql-tag";

const getReviewerIdQuery = gql`
  query reviewerId($loginid: ID!) {
    reviewerId(loginid: $loginid) {
      reviewerid
      fname
    }
  }
`;

export default getReviewerIdQuery;