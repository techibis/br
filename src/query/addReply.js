import gql from "graphql-tag";

const addReplyMutation = gql`
    mutation addReply($rid:ID!, $comment:String!, $active: Int!){
        addReply(rid:$rid, comment: $comment, active:$active){
            id
        }
    }
`;

export default addReplyMutation;