import axios from "axios";
import React, {  useEffect, useState } from "react";
import useToggle from "../Hooks/Toggle";
import CandidateRow from "../Components/CandidateRow";
import { useParams } from "react-router-dom";


const ConfirmedCandidates=()=>{
    const [confirmed, setConfirmed]= useState([]);
    const[toggle, setToggle]= useToggle();
const {typecandidates}= useParams();



    useEffect(()=>{
        console.log(typecandidates)
    
        // const loadCandidates=async()=>{
        //     const {data}=   await axios.get(`/api/candidatetracker/getconfirmed?typecandidate=${typecandidates}`);
        //     setConfirmed(data)
        const loadCandidates=async()=>{
               const {data}=   await axios.get('/api/candidatetracker/getconfirmed');
                setConfirmed(data)
   
 
        }
        loadCandidates()
    }, [])

    return(
<div>
    <h1>Confirmed Candidates! YAY!!:)</h1> 
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
             {confirmed.map(c=><CandidateRow candidate={c} toggle={toggle} key={c.id}/>)} 
            </tbody>
        </table>
        </div>
    )
}

export default ConfirmedCandidates;