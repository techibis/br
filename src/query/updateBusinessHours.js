import gql from "graphql-tag";

const updateBusinessHoursMutation = gql`
    mutation updateBusinessHours($cid:ID!,$monstart:String,$monend:String,$tuestart:String,$tueend:String,$wedstart:String,$wedend:String,$thustart:String,$thuend:String,$fristart:String,$friend:String,$satstart:String,$satend:String,$sunstart:String,$sunend:String){
        updateBusinessHours(cid:$cid, monstart:$monstart,monend:$monend,tuestart:$tuestart,tueend:$tueend,wedstart:$wedstart,wedend:$wedend,thustart:$thustart,thuend:$thuend,fristart:$fristart,friend:$friend,satstart:$satstart,satend:$satend,sunstart:$sunstart,sunend:$sunend){
            cid
        }
    }
`;

export default updateBusinessHoursMutation;

