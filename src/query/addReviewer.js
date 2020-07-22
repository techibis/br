import gql from "graphql-tag";

const addReviewerMutation = gql`
    mutation AddReviewer($fname:String!, $lname:String!, $loginid:ID,){
        addReviewer(fname:$fname,lname:$lname loginid:$loginid){
            reviewerid
            fname
        }
    }
`;

export default addReviewerMutation;