let API_URL = "http://192.168.0.208:3000/"
// let TOKEN = window.localStorage.getItem("token")
let TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGl0aWpAcGFuZHUucGFuZCIsImlhdCI6MTY2NjU4MTc4N30.sgc_NSNrVCsBkZMP1sYJBTQZUDoOjuKLUMSpCbCfbC0"

export const setActive = async (taskId) => {
    console.log("In SetActive function")
    const requestBody = {
        'task_id': taskId,
        'token': TOKEN,
    };

    console.log('stringified request: ', JSON.stringify(requestBody));

    const options = {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(requestBody)
    };

    try {
        let response = await fetch(API_URL + "activeTask", options);
        let json = await response.json();
        console.log('Change to active request completed', json);

        if (json.statusCode === 200) {
            return json.body;
        }
    } catch (err) {
        console.error('Error while retrieving login details.', err);
    }
    return null;
}

