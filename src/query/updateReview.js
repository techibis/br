import gql from "graphql-tag";

const updateReviewMutation = gql`
    mutation updateReview($rid:ID!, $active: Int!){
        updateReview(rid:$rid, active:$active){
            rid
        }
    }
`;

export default updateReviewMutation;