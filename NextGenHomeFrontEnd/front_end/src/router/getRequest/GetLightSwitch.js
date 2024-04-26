import * as React from 'react';

export default async function GetLightSwitch(){
    const apiUrl = process.env.EXPO_PUBLIC_SERVER_API_URL;
    try {
        const getLatestToggleValue = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'prop': 'toggleValue', // Get the current toggle value of the light switch
            },
        });
        const toggleValueJson = await getLatestToggleValue.json();
        if (toggleValueJson.isEnable === "1") return true;
        else return false;
    }
    catch (error) {
        console.log(error);
    }
    
}
