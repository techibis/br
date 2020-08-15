import gql from "graphql-tag";

const getCompanysQuery = gql`
  query category($companyCat: String!, $lat:Float, $lon:Float) {
    category(short_name: $companyCat) {
      catid
      companys (lat: $lat, lon:$lon){
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
        rank
        ratings {
          cid
          rating
          revcount
          ranking
        }
        categoryname {
          catid
          name
          short_name
        }
      }
    }
  }
`;

export default getCompanysQuery ;
