export default async function GetRequest(requestRoute){
    const apiUrl = process.env.EXPO_PUBLIC_SERVER_API_URL;
    const request_url = apiUrl + requestRoute;
    console.log(request_url);
    const get = async () => await fetch(request_url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const response = await get()
    if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        return;
    }
    const data = await response.json();
    return data
}