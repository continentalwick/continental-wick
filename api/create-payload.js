export default async function handler(req, res) {
  const response = await fetch("https://xumm.app/api/v1/platform/payload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-API-Key": "fa2e737f-62ca-42b5-8092-3a53315faa86"
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
