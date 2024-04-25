import * as React from 'react';

export default function onColorChange(color){
    const sendData = color.substring(1); 
    console.log("Color Changed to", sendData);
    const apiUrl = 'http://10.130.208.74:5000/iot/change_color/' + sendData;
    console.log(apiUrl);
    const postChangeColor = () => fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'value' }) // replace with your actual data
    });
    const call = postChangeColor();
}
