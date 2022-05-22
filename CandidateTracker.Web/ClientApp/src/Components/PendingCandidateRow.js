import React from "react";
import { Link } from 'react-router-dom';

const PendingCandidateRow=({candidate})=>{
const{id, firstName, lastName, number, email}=candidate;



return(
    <tr>
         <td>  <Link to={`/viewdetails/${id}`}>
              View Details
                 </Link></td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{number}</td>
        <td>{email}</td>
    </tr>
)
}

export default PendingCandidateRow;