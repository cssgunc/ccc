import React from "react";
import "./people.css";
import PartnerInfo from "../components/ParterInfo";
import Header from "../components/header";
export default function People() {
    return (
        <>
            <Header />
            <div className="page-heading">
                <h1
                    style={{
                        fontSize: "48px",
                        display: "flex",
                        justifyContent: "center",
                        margin: "40px",
                    }}
                >
                    Who We Are
                </h1>
            </div>
            <div className="director-info">
                <div className="director-photo"></div>
                <div className="director-info-text">
                    <h2 className="director-name">Samantha Lu, MPH</h2>
                    <p className="director-title">
                        Campus & Community Coalition Director
                    </p>
                    <p className="director-email">
                        samantha@downtownchapelhill.com
                    </p>
                    <p className="director-bio">
                        Samantha first worked with the CCC in 2018 and was
                        tickled to find her graduate team’s evaluation
                        deliverables in her new desk when she returned as
                        Director in 2022. As a two-time Tar Heel (BA 2014, MPH
                        2019), she is energized to serve the Chapel Hill
                        community in this role. She has previously worked on
                        mental and social well-being, sexual health, and youth
                        leadership development in domestic and global settings,
                        often wearing many different hats in those roles. When
                        she’s not facilitating CCC meetings or supporting CCC
                        partners, you can find her sipping coffee, gardening,
                        checking out local events, and traveling with her
                        husband and dog.
                    </p>
                </div>
            </div>
            <div
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "1093px",
                }}
            >
                <div className="board-of-directors-container">
                    <h1
                        style={{
                            fontSize: "40px",
                            marginBottom: "24px",
                            textAlign: "center",
                        }}
                    >
                        Board of Directors
                    </h1>
                    <div className="directors-grid">
                        <PartnerInfo
                            title="Senior Engineer"
                            text="Alice Johnson"
                            role="Admin"
                        />
                        <PartnerInfo
                            title="Senior Engineer"
                            text="Alice Johnson"
                            role="Admin"
                        />
                        <PartnerInfo
                            title="Senior Engineer"
                            text="Alice Johnson"
                            role="Admin"
                        />
                        <PartnerInfo
                            title="Senior Engineer"
                            text="Alice Johnson"
                            role="Admin"
                        />
                        <PartnerInfo
                            title="Senior Engineer"
                            text="Alice Johnson"
                            role="Admin"
                        />
                    </div>
                </div>
            </div>

            <div className="coalition-partners">
                <div className="coalition-partners-containers">
                    <h1 style={{ fontSize: "32px", color: "#499ED7" }}>
                        UNC-Chapel Hill
                    </h1>
                    <div className="divider"></div>
                    <div className="grid">
                        <div>
                            <h2 style={{ fontSize: "24px" }}>
                                Student Affairs
                            </h2>
                            <ul className="student-affairs-list">
                                <li>Off-Campus Student Life</li>
                                <li>Student Wellness</li>
                                <li>Office of Fraternity & Sorority Life</li>
                                <li>
                                    Violence Prevention and Advocacy Services
                                </li>
                                <li>Office of Student Conduct</li>
                                <li>Student Life & Leadership</li>
                                <li>Campus Recreation</li>
                            </ul>
                        </div>

                        <div>
                            <p className="item-size">Carolina Housing</p>
                            <p className="item-size">
                                Carolina Center for Public Service
                            </p>
                            <p className="item-size">Athletics</p>
                            <p className="item-size">
                                UNC Gillings School of Global Public Health
                            </p>
                        </div>

                        <div>
                            <p className="item-size">Student Government</p>
                            <p className="item-size">
                                Bowles Center for Alcohol Studies
                            </p>
                            <p className="item-size">Police</p>
                            <p className="item-size">
                                Graduate & Professional Student Government
                            </p>
                        </div>
                    </div>
                </div>
                <div className="coalition-partners-containers">
                    <h1 style={{ fontSize: "32px", color: "#499ED7" }}>
                        Town of Chapel Hill
                    </h1>
                    <div className="divider"></div>
                    <div className="grid">
                        <div>
                            <p className="item-size">Manager's Office</p>
                            <p className="item-size">Community Connections</p>
                            <p className="item-size">Economic Development</p>
                            <p className="item-size">
                                Community Arts & Culture
                            </p>
                        </div>

                        <div>
                            <p className="item-size">Community Relations</p>
                            <p className="item-size">Police Department</p>
                            <p className="item-size">Emergency Management</p>
                        </div>

                        <div>
                            <p className="item-size">Communications</p>
                            <p className="item-size">Code Enforcement</p>
                            <p className="item-size">Fire Department</p>
                        </div>
                    </div>
                </div>
                <div className="coalition-partners-containers">
                    <h1 style={{ fontSize: "32px", color: "#499ED7" }}>
                        Orange County
                    </h1>
                    <div className="divider"></div>
                    <div className="grid">
                        <div>
                            <p className="item-size">Health Department</p>
                            <p className="item-size">
                                Criminal Justic Resource Department
                            </p>
                        </div>

                        <div>
                            <p className="item-size">Emergency Services</p>
                        </div>

                        <div>
                            <p className="item-size">Sheriff's Office</p>
                        </div>
                    </div>
                </div>
                <div className="coalition-partners-containers">
                    <h1 style={{ fontSize: "32px", color: "#499ED7" }}>
                        Additional Partners
                    </h1>
                    <div className="divider"></div>
                    <div className="grid">
                        <div>
                            <p className="item-size">
                                Carolina Student Legal Services
                            </p>
                            <p className="item-size">
                                Orange County ABC Stores & Board
                            </p>
                            <p className="item-size">
                                Chapel Hill-Carrboro City Schools
                            </p>
                        </div>

                        <div>
                            <p className="item-size">
                                Marian Cheek Jackson Center for Making and
                                Saving History
                            </p>
                            <p className="item-size">
                                Chapel Hill Downtown Partnership
                            </p>
                            <p className="item-size">
                                Chapel Hill-Carrboro City Schools PTA Council
                            </p>
                        </div>

                        <div>
                            <p className="item-size">Orange Partnership</p>
                            <p className="item-size">
                                Town of Carrboro Police Department
                            </p>
                            <p className="item-size">Local Businesses</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
