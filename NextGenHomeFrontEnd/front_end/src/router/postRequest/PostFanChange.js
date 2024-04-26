import * as React from 'react';

export default async function PostFanChange(value){
    const sendData = value; 
    console.log("Fan Strength change to", sendData);
    const apiUrl = process.env.EXPO_PUBLIC_SERVER_API_URL;
    try{
        const postFanChange = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                value : sendData
            }),
        });
        postFanChange().then(response => response.json())
    } catch(err){
        //Maybe return error here so that front_end can inform user?
        console.log(err);
    }
    
}