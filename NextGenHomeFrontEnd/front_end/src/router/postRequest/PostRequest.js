export default function PostRequest(
    requestRoute,
    sendData
)
{
    let newSendData = "";
    if (sendData === undefined)
    {
        newSendData = ""
    }
    else{
        newSendData = "/" + sendData
    }
    const apiUrl = process.env.EXPO_PUBLIC_SERVER_API_URL;
    const request_url = apiUrl + requestRoute + newSendData;
    console.log(request_url);
    const post = () => fetch(request_url, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'value' }) // replace with your actual data
    });
    const call = post();
}