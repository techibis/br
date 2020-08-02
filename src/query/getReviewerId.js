import gql from "graphql-tag";

const getReviewerIdQuery = gql`
  query reviewerId($loginid: ID!) {
    reviewerId(loginid: $loginid) {
      reviewerid
      fname
      lname
      city
      state
      reviewerReviews {
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
        company{
          name
          fname
          lname
          address1
          address2
          city
          lat
          lon
          zip
          categoryid
          descr
          website
          phone
          logo
          suggested
          favorite
          ratings {
            rating
            revcount
            ranking
          }
          reviews {
            rid
            comments
            fname
            lname
            date
            reviewer {
              fname
              lname
              city
              state
            }
          }
        }
      }
    }
  }
`;

export default getReviewerIdQuery;