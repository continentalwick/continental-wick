export default async function handler(req, res) {
  const response = await fetch("https://xumm.app/api/v1/platform/payload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      'X-API-Key': process.env.XUMM_API_KEY
    },
    body: JSON.stringify({
      txjson: {
        TransactionType: "TrustSet",
        LimitAmount: {
          currency: "WCK",
          issuer: "rEtKBaH1koMJtQiqdhDNgS4ZrUNsJKc5go",
          value: "100000000"
        }
      }
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
