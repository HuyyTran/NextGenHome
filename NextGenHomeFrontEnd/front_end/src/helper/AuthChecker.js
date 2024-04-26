import * as React from 'react';

export default function AuthChecker(
    input_password
)
{
    //*Might be an await fetch function to get password from server
    //But now we just hardcode the password value
    real_password = process.env.EXPO_PUBLIC_MOCK_DOOR_PASSWORD
    if (real_password === input_password)
    {
        return true
    }
    return false
}