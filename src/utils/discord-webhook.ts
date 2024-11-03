const webhookUrl = process.env.WEBHOOK_URL || "";
const ownerID = process.env.OWNER_ID || "";

const sendMessage = async (message: string) => {
  const content = {
    username: "Chrome",
    avatar_url: "https://i.ibb.co/Bc5XnK1/chrome-dr-stone.jpg",
    content: `### <@${ownerID}>, you got an anonymous message! \n\n${message} \n**--- End ---**\n`,
  };
  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(content),
  };

  const res = await fetch(webhookUrl, requestOptions);
  const status = res.status;
  if (status == 400) return false;
  return true;
};

export default sendMessage;
