export default async function handler(req, res) {
  const xummApiKey = 'e9e3c6d8-0c77-4323-bcb3-3e3e44bb27ca';
  console.log("✅ Using API Key:", xummApiKey); // confirm runtime key

  const payload = {
    txjson: {
      TransactionType: 'TrustSet',
      LimitAmount: {
        currency: 'WCK',
        issuer: 'rEtKBaH1koMJtQiqdhDNgS4ZrUNsJKc5go',
        value: '100000000'
      }
    }
  };

  try {
    const response = await fetch('https://xumm.app/api/v1/platform/payload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-API-Key': xummApiKey
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (data.uuid) {
      console.log("✅ Payload UUID:", data.uuid);
      res.status(200).json(data);
    } else {
      console.error("❌ XUMM Error:", data);
      res.status(500).json({ error: data });
    }
  } catch (err) {
    console.error("❌ Fetch Failed:", err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
