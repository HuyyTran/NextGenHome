import * as React from 'react';

export default async function GetColorChange(){
    const apiUrl = process.env.EXPO_PUBLIC_SERVER_API_URL;
    try {
        const getLatestColor = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'prop': 'color', // Get the current color of the light switch
            },
        });
        const colorJson = await getLatestColor.json();
        return colorJson.color
    }
    catch (error) {
        console.log(error);
    }
    
}
