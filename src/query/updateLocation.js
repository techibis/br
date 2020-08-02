import gql from "graphql-tag";

const updateLocationMutation = gql`
    mutation updateLocation($loginid:ID!, $city: String!,$state: String!){
        updateLocation(loginid:$loginid, city:$city,state:$state){
            reviewerid
        }
    }
`;

export default updateLocationMutation;