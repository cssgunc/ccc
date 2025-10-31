import React from "react";
import Header from "~/components/header";
import PlanCard from "~/components/planCard";
import ReportCard from "~/components/reportsCard";

export default function Research() {
    return (
        <main>
            <Header />
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h1 className="text-3xl text-center font-bold mb-8">
                    Research Page
                </h1>

                <PlanCard
                    title="Plan Title (placeholder)"
                    summary="Placeholder summary describing the featured plan. Replace with real content."
                    buttonText="View Plan"
                    onClick={() => {
                        // Link to actual report
                    }}
                />

                <section className="mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <ReportCard
                            title="Report A (placeholder)"
                            summary="Placeholder summary for report A."
                            buttonText="View Report"
                            onClick={() => {
                                // Link to actual report
                            }}
                        />
                        <ReportCard
                            title="Report B (placeholder)"
                            summary="Placeholder summary for report B."
                            buttonText="View Report"
                            onClick={() => {
                                // Link to actual report
                            }}
                        />
                        <ReportCard
                            title="Report C (placeholder)"
                            summary="Placeholder summary for report C."
                            buttonText="View Report"
                            onClick={() => {
                                // Link to actual report
                            }}
                        />
                        <ReportCard
                            title="Report D (placeholder)"
                            summary="Placeholder summary for report D."
                            buttonText="View Report"
                            onClick={() => {
                                // Link to actual report
                            }}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}
