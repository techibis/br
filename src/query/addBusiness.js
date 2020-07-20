import gql from "graphql-tag";

const addBusinessMutation = gql`
    mutation AddBusiness($name:String!,$fname:String,$lname:String,$address1:String ,$address2:String ,$city: String!,$state: String!,$zip:String ,$categoryid:ID! ,$descr:String ,$website: String!,$phone:String ,$logo:String ,$suggested:Int,$favorite:Int,$approved:Int){
        addBusiness(name:$name,fname:$fname,lname:$lname,address1:$address1,address2:$address2,city:$city,state:$state,zip:$zip,categoryid:$categoryid,descr:$descr,website:$website,phone:$phone,logo:$logo,suggested:$suggested,favorite:$favorite,approved:$approved){
            cid
        }
    }
`;

export default addBusinessMutation;
