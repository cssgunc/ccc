"use client";

import React from "react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import {
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Line,
    ComposedChart,
} from "recharts";
import { Button } from "~/components/data-ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/data-ui/card";
import type { ChartConfig } from "~/components/data-ui/chart";
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "~/components/data-ui/chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/data-ui/select";

type CiPoint = {
    timePeriod: string;
    startDate: string;
    endDate: string;
    actualValue: number | null;
    targetValue: number | null;
    forecastValue: number | null;
};
type CiResponse = { perfmeasureID: number; values: CiPoint[] };

type SeriesConfig = {
    desktop: { label: React.ReactNode; color: string };
    mobile: { label: React.ReactNode; color: string };
};

const chartConfigs = {
    binge: {
        title: "Population Indicator - Binge Drinking in the Past Two Weeks",
        subtitle: "Actual vs Target",
        blurb: "Proportion of university students who drank five or more drinks at a sitting at least once in the past two weeks.",
        series: {
            desktop: { label: "Actual", color: "hsl(86, 61%, 39%)" },
            mobile: { label: "Target", color: "hsl(215, 70%, 40%)" },
        },
    },
    party: {
        title: "Population Indicator - Party Registration",
        subtitle: "Actual vs Target",
        blurb: "Number of parties registered in the party registration system in the past 12 months.",
        series: {
            desktop: { label: "Actual", color: "hsl(86, 61%, 39%)" },
            mobile: { label: "Target", color: "hsl(215, 70%, 40%)" },
        },
    },
} as const satisfies Record<
    "binge" | "party",
    { title: string; subtitle: string; blurb: string; series: SeriesConfig }
>;

export function Chart({
    which = "binge",
    embed = false,
}: {
    which?: "binge" | "party";
    embed?: boolean;
}) {
    const [timeRange, setTimeRange] = React.useState("all");
    const [chartData, setChartData] = React.useState<
        { date: string; desktop: number | null; mobile: number | null }[]
    >([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const gradientNamespace = React.useId().replace(/:/g, "");
    const desktopGradientId = `${gradientNamespace}-desktop`;
    const mobileGradientId = `${gradientNamespace}-mobile`;
    const activeConfig = chartConfigs[which];
    const chartContainerConfig = React.useMemo<ChartConfig>(
        () => ({
            desktop: { ...activeConfig.series.desktop },
            mobile: { ...activeConfig.series.mobile },
        }),
        [activeConfig]
    );

    React.useEffect(() => {
        let alive = true;
        (async () => {
            try {
                setLoading(true);
                setError(null);
                const r = await fetch(`/api/ci/${which}`);
                if (!r.ok) throw new Error(String(r.status));
                const data = (await r.json()) as CiResponse;

                const rowsRaw = (data.values || [])
                    .filter(
                        (v) => v.actualValue !== null || v.targetValue !== null
                    )
                    .map((v) => ({
                        date: v.timePeriod,
                        desktop: v.actualValue,
                        mobile: v.targetValue,
                    }))
                    .sort((a, b) =>
                        String(a.date).localeCompare(String(b.date))
                    );

                const firstBothIdx = rowsRaw.findIndex(
                    (r) => r.desktop !== null && r.mobile !== null
                );
                const rows =
                    firstBothIdx > 0 ? rowsRaw.slice(firstBothIdx) : rowsRaw;

                if (alive) setChartData(rows);
            } catch (e: unknown) {
                if (alive)
                    setError(e instanceof Error ? e.message : "fetch error");
            } finally {
                if (alive) setLoading(false);
            }
        })();
        return () => {
            alive = false;
        };
    }, [which]);

    const filteredData = React.useMemo(() => {
        if (timeRange === "all") return chartData;

        const count =
            timeRange === "5y" ? 5 : timeRange === "2y" ? 2 : chartData.length;
        return chartData.slice(-count);
    }, [chartData, timeRange]);

    const card = (
        <Card className="bg-[#D9D9D9] shadow-none">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b border-gray-400 py-5 sm:flex-row">
                <div className="grid flex-1 gap-1">
                    <CardTitle className="text-xl font-normal">
                        {activeConfig.title}
                    </CardTitle>
                    <CardDescription>{activeConfig.subtitle}</CardDescription>
                </div>
                <Select
                    defaultValue="all"
                    value={timeRange}
                    onValueChange={setTimeRange}
                >
                    <SelectTrigger
                        className="hidden w-[40] rounded-lg sm:ml-auto sm:flex border-gray-400"
                        aria-label="Select a value"
                    >
                        <SelectValue
                            placeholder="All years"
                            className="border-gray-400"
                        />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="all" className="rounded-lg">
                            All years
                        </SelectItem>
                        <SelectItem value="2y" className="rounded-lg">
                            Last 2 data points
                        </SelectItem>
                        <SelectItem value="5y" className="rounded-lg">
                            Last 5 data points
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pt-6">
                {error ? (
                    <div className="text-sm text-red-600">Error: {error}</div>
                ) : loading ? (
                    <div className="text-sm text-muted-foreground">
                        Loading…
                    </div>
                ) : (
                    <ChartContainer
                        config={chartContainerConfig}
                        className="aspect-auto h-[250px] w-full"
                    >
                        <ComposedChart data={filteredData}>
                            <defs>
                                <>
                                    <linearGradient
                                        id={desktopGradientId}
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="5%"
                                            stopColor={
                                                activeConfig.series.desktop
                                                    .color
                                            }
                                            stopOpacity={0.85}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor={
                                                activeConfig.series.desktop
                                                    .color
                                            }
                                            stopOpacity={0.15}
                                        />
                                    </linearGradient>
                                    <linearGradient
                                        id={mobileGradientId}
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="5%"
                                            stopColor={
                                                activeConfig.series.mobile.color
                                            }
                                            stopOpacity={0.85}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor={
                                                activeConfig.series.mobile.color
                                            }
                                            stopOpacity={0.15}
                                        />
                                    </linearGradient>
                                </>
                            </defs>
                            <CartesianGrid
                                vertical={false}
                                stroke="#9CA3AF"
                                strokeDasharray="3 3"
                            />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                                tickFormatter={(value) => String(value)}
                                interval="preserveStartEnd"
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                domain={
                                    which === "binge" ? [0, 100] : undefined
                                }
                                tickFormatter={(value) =>
                                    which === "binge"
                                        ? `${value}%`
                                        : String(value)
                                }
                                label={{
                                    value:
                                        which === "binge"
                                            ? "Percentage"
                                            : "Number of Parties",
                                    angle: -90,
                                    position: "insideLeft",
                                    style: { textAnchor: "middle" },
                                }}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={
                                    <ChartTooltipContent
                                        labelFormatter={(value) =>
                                            `Year ${value}`
                                        }
                                        indicator="dot"
                                    />
                                }
                            />
                            <Area
                                dataKey="desktop"
                                name="Actual"
                                type="monotone"
                                fill={`url(#${desktopGradientId})`}
                                stroke={activeConfig.series.desktop.color}
                                connectNulls
                            />
                            <Line
                                dataKey="mobile"
                                name="Target"
                                type="monotone"
                                stroke={activeConfig.series.mobile.color}
                                strokeWidth={2}
                                strokeDasharray="5 5"
                                dot={false}
                                connectNulls
                            />
                            <ChartLegend content={<ChartLegendContent />} />
                        </ComposedChart>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    );
    return embed ? (
        card
    ) : (
        <div className="flex justify-center py-10">
            <div className="w-full max-w-3xl px-4">{card}</div>
        </div>
    );
}

export function meta() {
    return [{ title: "CCC | Data" }];
}

export default function Data() {
    return (
        <main>
            <Header />
            <header
                className="mt-20 mb-8 text-center"
                style={{ backgroundColor: "#499ED7BF", padding: "2rem 0" }}
            >
                <h1 className="text-5xl tracking-tight">Data</h1>
            </header>
            <section className="mx-auto max-w-6xl px-4 pb-16">
                <section className="mb-8 p-8 max-w-4xl mx-auto text-center">
                    <p className="text-lg leading-relaxed mb-8">
                        These data visualizations originate from our
                        comprehensive <strong>Scorecard!</strong>
                        <br />
                        All of our data is available in our scorecard via the
                        button below.{" "}
                    </p>
                    <div className="flex justify-center">
                        <Button
                            asChild
                            className="mx-auto w-[90vw] max-w-[300px] sm:max-w-[380px] h-[56px] px-12 rounded-[64px] bg-[#499ED7] hover:bg-blue-700 text-white text-xl font-medium inline-flex items-center justify-center transition"
                        >
                            <a
                                href="https://embed.clearimpact.com/Scorecard/Embed/82237"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center"
                            >
                                <span>Scorecard</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                            </a>
                        </Button>
                    </div>
                </section>

                <section className="flex flex-col gap-16">
                    <div>
                        <a
                            href="https://embed.clearimpact.com/Measure/Embed/100250717"
                            target="_blank"
                        >
                            <Chart which="binge" embed />
                        </a>
                        <div className="mt-4">
                            <p className="text-md">
                                {chartConfigs.binge.blurb}
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                                NCHA Survey from Student Wellness
                            </p>
                        </div>
                    </div>
                    <div>
                        <a
                            href="https://embed.clearimpact.com/Measure/Embed/100061976"
                            target="_blank"
                        >
                            <Chart which="party" embed />
                        </a>
                        <div className="mt-4">
                            <p className="text-md">
                                {chartConfigs.party.blurb}
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                                UNC-CH Off-Campus Student Life
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </main>
    );
}
