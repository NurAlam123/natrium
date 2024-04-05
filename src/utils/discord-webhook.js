const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
const ownerID = import.meta.env.VITE_OWNER_ID;

const sendMessage = (message) => {
    const webhook = new XMLHttpRequest();

    webhook.open('POST', webhookUrl);
    webhook.setRequestHeader('content-type', 'application/json');

    const content = {
        username: 'Chrome',
        avatar_url: 'https://i.ibb.co/Bc5XnK1/chrome-dr-stone.jpg',
        content:  `### <@${ownerID}>, you got an anonymous message! \n- <t:${Date.now()}:F>\n\n${message} \n--- End ---\n`
    }
    // send the message to my discord server
    webhook.send(JSON.stringify(content));
}

export default sendMessage;