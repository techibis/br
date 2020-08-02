import gql from "graphql-tag";

const updateBusinessMutation = gql`
    mutation updateBusiness($cid:ID!, $name:String!,$fname:String,$lname:String,$address1:String ,$address2:String ,$city: String!,$lat:Float!,$lon:Float!,$zip:String ,$categoryid:ID! ,$descr:String ,$website: String!,$phone:String ,$suggested:Int,$favorite:Int,$approved:Int){
        updateBusiness(cid:$cid, name:$name,fname:$fname,lname:$lname,address1:$address1,address2:$address2,city:$city,lat:$lat, lon:$lon,zip:$zip,categoryid:$categoryid,descr:$descr,website:$website,phone:$phone,suggested:$suggested,favorite:$favorite,approved:$approved){
            cid
        }
    }
`;

export default updateBusinessMutation;
