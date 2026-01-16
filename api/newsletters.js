import client from "@mailchimp/mailchimp_marketing";

client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const response = await client.campaigns.list({
            count: 100,
            status: "sent",
            sort_field: "send_time",
            sort_dir: "DESC",
        });

        const campaigns = response.campaigns || [];

        const newsletters = campaigns.map((campaign) => {
            const sendTime = campaign.send_time;
            const date = new Date(sendTime);
            const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().slice(-2)}`;

            return {
                id: campaign.id,
                title: campaign.settings.title || "Untitled Newsletter",
                date: formattedDate,
                href: campaign.archive_url || "",
            };
        });

        res.status(200).json({
            success: true,
            data: newsletters,
        });
    } catch (error) {
        console.error("Mailchimp Newsletter Fetch Error:", error);

        res.status(500).json({
            success: false,
            error: error.response?.body || error.message,
        });
    }
}
