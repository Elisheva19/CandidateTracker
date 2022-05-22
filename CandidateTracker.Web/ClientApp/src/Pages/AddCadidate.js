import React from "react";
import  axios from 'axios';
import useForm from "../Hooks/useForm";
import { useHistory } from "react-router-dom";

import { useCandidateCounts } from "../CandidatesContext";


const AddCandidate=()=>{
    

const[formData, setFormData]= useForm({firstName:'', lastName:'', number:'', email:'',notes: ''});
const history= useHistory();
const {updatePendingCount}= useCandidateCounts();


const onSubmitClick=async()=>{
 await axios.post('/api/candidatetracker/addcandidate', formData);
    updatePendingCount();
    
history.push('/')


}

    return(
       
        <div className="col-md-6 offset-md-3 card card-body bg-light">
            <h1>Add Candidate:</h1>
            <br />
            <input type="text" value={formData.firstName} name='firstName' onChange={setFormData} className="form-control" placeholder="First Name" />
            <br />
            <input type="text" value={formData.lastName} name='lastName' onChange={setFormData} className="form-control" placeholder="Last Name" />
            <br />
            <input type="text" value={formData.number} name='number' onChange={setFormData} className="form-control" placeholder="Number" />
            <br />
            <input type="text" value={formData.email} name='email' onChange={setFormData} className="form-control" placeholder="Email" />
            <br />
            <textarea onChange={setFormData}
                      value={formData.notes}
                      name="notes"
                      placeholder="Notes"
                      className="form-control"
                      rows="5"/>
            <br/>
            <button onClick={onSubmitClick} className="btn btn-primary btn-block">Submit</button>
        </div>
    
    )
}
export default AddCandidate;