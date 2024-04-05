const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

const sendMessage = () => {
    let hook = new XMLHttpRequest();

    hook.open('POST', webhookUrl);

    hook.setRequestHeader('Content-type', 'application/json');

    let content = {
        username: 'Kirito',
        avatar_url: '',
        content: 'Hi from webhook... 2'
    }

    hook.send(JSON.stringify(content));
}

export default sendMessage;