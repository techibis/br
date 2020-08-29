import gql from "graphql-tag";

const getCompanyQuery = gql`
  query company($cid: ID!) {
    company(cid: $cid) {
      cid
      name
      fname
      lname
      address1
      address2
      city
      lat
      lon
      distance
      zip
      categoryid
      descr
      website
      phone
      logo
      loginid
      suggested
      favorite
      approved
      categoryname {
        name
        short_name
      }
      hours {
        cid
        monstart
        monend
        tuestart
        tueend
        wedstart
        wedend
        thustart
        thuend
        fristart
        friend
        satstart
        satend
        sunstart
        sunend
      }
      ratings {
        cid
        rating
        revcount
        ranking
      }
      reviews {
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
        reply {
          rid
          comment
          date
        }
      }
      extReviews {
        id
        cid
        rsi
        rating
        quantity
        date
        source {
          id
          name
          url
          logo
        }
      }
      owner {
        loginid
        email
        type
        fname
        lname
        active
      }
      categoryname {
        catid
        name
      }
    }
  }
`;

export default getCompanyQuery;
