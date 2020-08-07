import gql from "graphql-tag";

const getAllApprovedCompanysQuery = gql`
  query allApprovedCompanys($lat:Float, $lon:Float) {
    allApprovedCompanys(lat: $lat, lon:$lon){
      value
      name
      city
      label
    }
  }
`;

export default getAllApprovedCompanysQuery;
