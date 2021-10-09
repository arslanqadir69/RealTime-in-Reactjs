import React, { useState, useEffect } from 'react'

function RealTime() {

    const time= new Date().toLocaleTimeString();
    const [ctime, setCtime]= useState(time);
    const UpdatedTime=()=>{
        const time= new Date().toLocaleTimeString();
        setCtime(time);
    }
 setInterval(UpdatedTime,1000);

//     useEffect(() => {
//     alert('i am herre');   
//    },[1000])

    return (
        <div>
           <h1>{ctime}</h1> 
        </div>
    )
}

export default RealTime
