export default function PostRequest(
    requestRoute,
    sendData
)
{
    const apiUrl = process.env.EXPO_PUBLIC_SERVER_API_URL;
    const request_url = apiUrl + requestRoute + sendData;
    console.log(request_url);
    const post = () => fetch(request_url, {
        method: 'POST',
    });
    const call = post();
}