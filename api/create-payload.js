export default async function handler(req, res) {
  const response = await fetch("https://xumm.app/api/v1/platform/payload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      'X-API-Key': 'e9e3c6d8-0c77-4323-bcb3-3e3e44bb27ca'
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
