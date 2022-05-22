import axios from "axios";
import React, {  useEffect, useState } from "react";
import PendingCandidateRow from "../Components/PendingCandidateRow";



const PendingCandidates=()=>{
    const [pending, setPending]= useState([]);

    useEffect(()=>{
        const loadCandidates=async()=>{
         const {data}=   await axios.get('/api/candidatetracker/getpending');
         setPending(data)

        }
        loadCandidates()
    }, [])

    return(
        <table className="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                <th></th>
                <th>First Name:</th>
                <th>Last Name:</th>
                <th>Phone:</th>
                <th>Email:</th>
                </tr>
            </thead>
            <tbody>
                {pending.map(c=><PendingCandidateRow candidate={c} key={c.id}/>)}
            </tbody>
        </table>
    )
}

export default PendingCandidates;