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
      state
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
      categoryname{
        name
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
      }
      owner {
        loginid
        email
        type
        fname
        lname
        active
      }
    }
  }
`;

export default getCompanyQuery;
