import axios from "axios";
import React, {  useEffect, useState } from "react";
import useToggle from "../Hooks/Toggle";
import CandidateRow from "../Components/CandidateRow";


const RefusedCandidates=()=>{
    const [refused, setRefused]= useState([]);
    const[toggle, setToggle]= useToggle();

    useEffect(()=>{
        const loadCandidates=async()=>{
         const {data}=   await axios.get('/api/candidatetracker/getrefused');
         setRefused(data)

        }
        loadCandidates()
    }, [])

    return(
<div>
<h1>Refused Candidates :(</h1>

    <div className="col-md-2">
    <button className="btn btn-success btn-block" onClick={setToggle}>Toggle:</button>
    </div>
        <table className="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                <th>First Name:</th>
                <th>Last Name:</th>
                <th>Phone:</th>
                <th>Email:</th>
                {toggle && <th>Notes:</th>}
                </tr>
            </thead>
            <tbody>
             {refused.map(c=><CandidateRow candidate={c} toggle={toggle} key={c.id}/>)} 
            </tbody>
        </table>
        </div>
    )
}

export default RefusedCandidates;