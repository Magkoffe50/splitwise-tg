const getTgApi = () => {
  const { TOKEN, SERVER_URL } = process.env;
  const TG_API = `https://api.telegram.org/bot${TOKEN}`;
  const URI = `/webhook/${TOKEN}`;
  const WEBHOOK_URL = SERVER_URL + URI;

  return { api: TG_API, uri: URI, webhookUrl: WEBHOOK_URL };
};

export default getTgApi;
