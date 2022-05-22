import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';


const CandidatesContext= createContext();

const CandidatesContextComponent=({children})=>{
    const[pendingCount, setPendingCount]= useState(0)
    const[confirmedCount, setConfirmedCount]= useState(0)
    const[refusedCount, setRefusedCount]= useState(0)

    const updatePendingCount =async()=>{
        const {data}= await axios.get('/api/candidatetracker/getpendingcount');
    
        setPendingCount(data.count);
    }
    
    const updateConfirmedCount =async()=>{
        const {data}= await axios.get('/api/candidatetracker/getconfirmedcount');
        
        setConfirmedCount(data.count);
    }
    
    const updateRefusedCount =async()=>{
        const {data}= await axios.get('/api/candidatetracker/getrefusedcount');
        const refused= data.count;
        setRefusedCount(refused);
    }

    const setAllCounts= async()=>{
        await updateConfirmedCount()
        updatePendingCount()
        updateRefusedCount()
    }

    useEffect(()=>{
        updateConfirmedCount();
        updatePendingCount();
        updateRefusedCount();
    }, [])



    return (

        <CandidatesContext.Provider value={{pendingCount, updatePendingCount, confirmedCount, updateConfirmedCount, refusedCount, updateRefusedCount}}>
            {children}
        </CandidatesContext.Provider>
    )
}

const useCandidateCounts=()=>{
    return useContext(CandidatesContext);
}
export {CandidatesContextComponent, useCandidateCounts};