import gql from "graphql-tag";

const addReviewMutation = gql`
    mutation addReview($cid: ID!, $quality: Int, $value: Int, $timeliness: Int, $experience: Int, $satisfaction: Int, $overall: Float!, $comments: String, $fname: String!, $lname: String!, $email: String!, $active: Int){
        addReview(cid: $cid, quality:$quality, value:$value, timeliness:$timeliness, experience:$experience, satisfaction:$satisfaction, overall:$overall, comments:$comments, fname:$fname, lname:$lname, email:$email, active:$active){
            email
            fname
            comments
        }
    }
`;

export default addReviewMutation;
