import gql from "graphql-tag";

const getCompanysQuery = gql`
  query category($companyCat: String!) {
    category(name: $companyCat) {
      catid
      companys {
        cid
        name
        phone
      }
    }
  }
`;

export default getCompanysQuery ;
