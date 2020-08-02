import gql from "graphql-tag";

const updateCityMutation = gql`
    mutation updateCity($cid: ID!, $city: String!, $lat: Float! $lon: Float!){
        updateCity(cid: $cid, city: $city, lat:$lat, lon: $lon) {
            cid
        }
    }
`;

export default updateCityMutation;