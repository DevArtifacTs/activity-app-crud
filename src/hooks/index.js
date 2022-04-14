import React, { useState, useEffect } from "react";
import { getRecords } from "../api";

export const useUserRecords = () => {
    const [records, setRecords] = useState([]);

    useEffect(()=> {
        (async()=>{
            const response = await getRecords();
            console.log('records', response.data);
            console.log('records', response.status);

            if(response.status === 200 ){
                setRecords(response);
            } else {
                alert('cannot connect to server.');
            };
        })();

    }, [])

    return [records, setRecords];
}