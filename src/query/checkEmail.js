import gql from "graphql-tag";

const checkEmailQuery = gql`
  query email($email: String!) {
    checkEmail(email: $email) {
      loginid
    }
  }
`;

export default checkEmailQuery;