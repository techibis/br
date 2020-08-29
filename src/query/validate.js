import gql from "graphql-tag";

const validateAccountMutation = gql`
    mutation validateAccount($loginid:ID!, $active: Int!){
        validateAccount(loginid:$loginid, active:$active){
            loginid
        }
    }
`;

export default validateAccountMutation;