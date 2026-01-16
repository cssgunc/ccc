const CI_IDS = {
    binge: "100250717",
    party: "100061976",
};

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { which } = req.query;
    const id = CI_IDS[which];

    if (!id) {
        return res.status(400).json({ error: "unknown dataset" });
    }

    try {
        const body = {
            siteCode: process.env.CI_SITE_CODE,
            apiKey: process.env.CI_API_KEY,
            ID: id,
        };

        const r = await fetch(
            "https://api.resultsscorecard.com/api/datavalues/export",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "User-Agent": "curl/8.7.1",
                },
                body: JSON.stringify(body),
            }
        );

        const text = await r.text();
        if (!r.ok) {
            return res
                .status(r.status)
                .setHeader("Content-Type", "application/json")
                .send(text || "");
        }
        res.setHeader("Content-Type", "application/json").send(text || "{}");
    } catch {
        res.status(500).json({ error: "proxy error" });
    }
}
