import gql from "graphql-tag";

const getCompanyByLoginIdQuery = gql`
  query ownerCompany($loginid: ID!) {
    ownerCompany(loginid: $loginid) {
      cid
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
        reply{
          rid
          comment
          date
        }
      }
    }
  }
`;

export default getCompanyByLoginIdQuery;
