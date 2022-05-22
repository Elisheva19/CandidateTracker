import React, { useState, useEffect } from "react";
import  axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { useCandidateCounts } from "../CandidatesContext";



const ViewDetails=()=>{

    const[candidate, setCandidate]= useState({id: '',firstName:'', lastName:'', number:'', email:'',notes: '', registrationStatus:''});
     const {id}= useParams();
     const {updateRefusedCount,updateConfirmedCount,updatePendingCount}= useCandidateCounts()
     const history= useHistory()



    useEffect(()=>{
        const getDetails= async () => {
         const {data}= await axios.get(`/api/candidatetracker/getbyid?id=${id}`);
         setCandidate(data)

        }
    getDetails();
    }, [candidate])
    const onConfirmClick= async ()=>{
       await axios.post(`api/candidatetracker/confirm`, {id})
       updateConfirmedCount()
       updatePendingCount()
       history.push(`/viewdetails/${id}`)

    }
    const onRefuseClick= async ()=>{
        await axios.post(`api/candidatetracker/refuse`, {id})
        updateRefusedCount()
        updatePendingCount()
        history.push(`/viewdetails/${id}`)
     }
  
return(
    <div className='card my-1'>
    
    <div className='card-body'>

        <h2>Name: {candidate.firstName} {candidate.lastName}</h2>
        <h2>Number: {candidate.number}</h2>
        <h2>Email: {candidate.email}</h2>
        <h2>Status: {candidate.registrationStatus}</h2>
        <h2>Notes:</h2>
        <h4>{candidate.notes}</h4>
        
           {candidate.registrationStatus === 'Pending' &&  <div>   <button className="btn btn-warning" onClick={onConfirmClick}>Confirm:</button>
                <button style={{ marginLeft: 10 }} onClick={onRefuseClick} className="btn btn-danger">Refuse:</button>
                </div>
}
            
           </div>
</div>
)

}


export default ViewDetails;