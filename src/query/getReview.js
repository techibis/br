import gql from "graphql-tag";

const getReviewQuery = gql`
  query review($rid: ID!) {
    review(rid: $rid) {
      rid
      cid
      reviewerid
      quality
      value
      timeliness
      experience
      satisfaction
      overall
      comments
      fname
      lname
      email
      active
      date
      reviewer {
        reviewerid
        fname
        lname
        city
        state
      }
      company{
        cid
        loginid
      }
    }
  }
`;

export default getReviewQuery;