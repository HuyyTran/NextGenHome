import * as React from 'react';

export default async function PostColorChange(color){
    const sendData = color; 
    console.log("Color Changed to", sendData);
    const apiUrl = process.env.EXPO_PUBLIC_SERVER_API_URL;
    try{
        const postColorChange = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                color : sendData
            }),
        });
        postColorChange().then(response => response.json())
    } catch(err){
        //Maybe return error here so that front_end can inform user?
        console.log(err);
    }
    
}