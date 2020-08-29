import gql from "graphql-tag";

const getUserQuery = gql`
  query user($email: String!, $password: String!) {
    user(email: $email, password: $password) {
      loginid
      email
      fname
      lname
      type
      active
    }
  }
`;

export default getUserQuery;
