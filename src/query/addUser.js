import gql from "graphql-tag";

const addUserMutation = gql`
    mutation AddUser($email:String!, $password:String!, $type:String!, $fname:String!, $lname:String!, $active:Int,){
        addUser(email:$email,password:$password,type:$type, fname:$fname,lname:$lname active:$active){
            loginid
            email
            fname
        }
    }
`;

export default addUserMutation;