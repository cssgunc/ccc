import styles from "./people.module.css";
import PartnerInfo from "../components/PartnerInfo";
import Header from "../components/header";
import Footer from "~/components/footer";
import UncLogo from "../assets/icons/unc-chapel-hill.svg";
import TownOfChapel from "../assets/icons/town-of-chapel-hill.svg";
import OrangeCountyLogo from "../assets/icons/orange-county.svg";
import AdditionalPartnersLogo from "../assets/icons/additional-partners.svg";
import samanthaPfp from "../assets/samantha.png";

export default function People() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 pb-16">
                <Header />
                <header
                    className="mt-20 mb-8 text-center"
                    style={{ backgroundColor: "#96d47c", padding: "2rem 0" }}
                >
                    <h1 className="text-5xl tracking-tight">Who We Are</h1>
                </header>
                <div className={styles.directorInfo}>
                    <img
                        src={samanthaPfp}
                        className={styles.directorPhoto}
                    ></img>
                    <div className={styles.directorInfoText}>
                        <h2
                            style={{
                                fontFamily: "Figtree",
                                fontWeight: "600",
                                fontStyle: "SemiBold",
                                fontSize: "36px",
                            }}
                        >
                            Samantha Luu, MPH
                        </h2>
                        <p
                            style={{
                                fontFamily: "Figtree",
                                fontWeight: "400px",
                                fontStyle: "Regular",
                                fontSize: "24px",
                            }}
                        >
                            Campus & Community Coalition Director
                        </p>
                        <p
                            style={{
                                fontFamily: "Figtree",
                                fontWeight: "300px",
                                fontStyle: "Italic",
                                fontSize: "20px",
                                color: "#499ED7",
                                marginBottom: "8px",
                            }}
                        >
                            samantha@downtownchapelhill.com
                        </p>
                        <p
                            style={{
                                fontFamily: "Figtree",
                                fontWeight: "400px",
                                fontStyle: "Regular",
                                fontSize: "20px",
                            }}
                        >
                            Samantha first worked with the CCC in 2018 and was
                            tickled to find her graduate team's evaluation
                            deliverables in her new desk when she returned as
                            Director in 2022. As a two-time Tar Heel (BA 2014,
                            MPH 2019), she is energized to serve the Chapel Hill
                            community in this role. She has previously worked on
                            mental and social well-being, sexual health, and
                            youth leadership development in domestic and global
                            settings, often wearing many different hats in those
                            roles. When she's not facilitating CCC meetings or
                            supporting CCC partners, you can find her sipping
                            coffee, gardening, checking out local events, and
                            traveling with her husband and dog.
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
                    <div className={styles.boardOfDirectorsContainer}>
                        <h1
                            style={{
                                fontSize: "40px",
                                marginBottom: "24px",
                                textAlign: "center",
                            }}
                        >
                            Board of Directors
                        </h1>
                        <div className={styles.directorsGrid}>
                            <PartnerInfo
                                title="Aaron Bachenheimer, Ed. D"
                                text="Associate Vice Chancellor for Student Engagement"
                                role="UNC-Chapel Hill"
                            />
                            <PartnerInfo
                                title="Loryn Clark, A.I.C.P."
                                text="Deputy Town Manager"
                                role="Town of Chapel Hill"
                            />
                            <PartnerInfo
                                title="Marcy Williams, M.P.H"
                                text="Health Promotion and Education Services Director"
                                role="Orange County Health Department"
                            />
                            <PartnerInfo
                                title="Fran Muse, J.D."
                                text="Director"
                                role="Carolina Student Legal Services"
                            />
                            <PartnerInfo
                                title="Melissa Cox, Ph.D."
                                text="Faculty"
                                role="UNC Gillings School of Global Public Health"
                            />
                        </div>
                    </div>
                </div>

                <h1
                    style={{
                        fontFamily: "Figtree",
                        fontWeight: "500px",
                        fontStyle: "Medium",
                        fontSize: "40px",
                        lineHeight: "100%",
                        textAlign: "center",
                        marginTop: "48px",
                        marginBottom: "48px",
                    }}
                >
                    Coalition Partners
                </h1>

                <div className={styles.coalitionPartners}>
                    <div className={styles.coalitionPartnersContainers}>
                        <div className={styles.partnersHeaders}>
                            <img
                                src={UncLogo}
                                style={{ marginRight: "10px" }}
                            ></img>
                            <h1 style={{ fontSize: "32px", color: "#499ED7" }}>
                                UNC-Chapel Hill
                            </h1>
                        </div>
                        <div className={styles.grid}>
                            <div>
                                <h2
                                    style={{
                                        fontFamily: "Figtree",
                                        fontWeight: "700px",
                                        fontStyle: "Bold",
                                        fontSize: "20px",
                                        lineHeight: "24px",
                                        letterSpacing: "0px",
                                    }}
                                >
                                    Student Affairs
                                </h2>
                                <ul className={styles.studentAffairsList}>
                                    <li>Off-Campus Student Life</li>
                                    <li>Student Wellness</li>
                                    <li>
                                        Office of Fraternity & Sorority Life
                                    </li>
                                    <li>
                                        Violence Prevention and Advocacy
                                        Services
                                    </li>
                                    <li>Office of Student Conduct</li>
                                    <li>Student Life & Leadership</li>
                                    <li>Campus Recreation</li>
                                </ul>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    Carolina Housing
                                </p>
                                <p className={styles.itemSize}>
                                    Carolina Center for Public Service
                                </p>
                                <p className={styles.itemSize}>Athletics</p>
                                <p className={styles.itemSize}>
                                    UNC Gillings School of Global Public Health
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    Student Government
                                </p>
                                <p className={styles.itemSize}>
                                    Bowles Center for Alcohol Studies
                                </p>
                                <p className={styles.itemSize}>Police</p>
                                <p className={styles.itemSize}>
                                    Graduate & Professional Student Government
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.coalitionPartnersContainers}>
                        <div className={styles.partnersHeaders}>
                            <img
                                src={TownOfChapel}
                                style={{ marginRight: "10px" }}
                            ></img>
                            <h1 style={{ fontSize: "32px", color: "#6A9F26" }}>
                                Town of Chapel Hill
                            </h1>
                        </div>
                        <div className={styles.grid}>
                            <div>
                                <p className={styles.itemSize}>
                                    Manager's Office
                                </p>
                                <p className={styles.itemSize}>
                                    Community Connections
                                </p>
                                <p className={styles.itemSize}>
                                    Economic Development
                                </p>
                                <p className={styles.itemSize}>
                                    Community Arts & Culture
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    Community Relations
                                </p>
                                <p className={styles.itemSize}>
                                    Police Department
                                </p>
                                <p className={styles.itemSize}>
                                    Emergency Management
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    Communications
                                </p>
                                <p className={styles.itemSize}>
                                    Code Enforcement
                                </p>
                                <p className={styles.itemSize}>
                                    Fire Department
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.coalitionPartnersContainers}>
                        <div className={styles.partnersHeaders}>
                            <img
                                src={OrangeCountyLogo}
                                style={{ marginRight: "10px" }}
                            ></img>
                            <h1 style={{ fontSize: "32px", color: "#FFC60B" }}>
                                Orange County
                            </h1>
                        </div>
                        <div className={styles.grid}>
                            <div>
                                <p className={styles.itemSize}>
                                    Health Department
                                </p>
                                <p className={styles.itemSize}>
                                    Criminal Justic Resource Department
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    Emergency Services
                                </p>
                            </div>
                            <div>
                                <p className={styles.itemSize}>
                                    Sheriff's Office
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.coalitionPartnersContainers}>
                        <div className={styles.partnersHeaders}>
                            <img
                                src={AdditionalPartnersLogo}
                                style={{ marginRight: "10px" }}
                            ></img>
                            <h1 style={{ fontSize: "32px", color: "#05325C" }}>
                                Additonal Partners
                            </h1>
                        </div>
                        <div className={styles.grid}>
                            <div>
                                <p className={styles.itemSize}>
                                    Carolina Student Legal Services
                                </p>
                                <p className={styles.itemSize}>
                                    Orange County ABC Stores & Board
                                </p>
                                <p className={styles.itemSize}>
                                    Chapel Hill-Carrboro City Schools
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    Marian Cheek Jackson Center for Making and
                                    Saving History
                                </p>
                                <p className={styles.itemSize}>
                                    Chapel Hill Downtown Partnership
                                </p>
                                <p className={styles.itemSize}>
                                    Chapel Hill-Carrboro City Schools PTA
                                    Council
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    Orange Partnership
                                </p>
                                <p className={styles.itemSize}>
                                    Town of Carrboro Police Department
                                </p>
                                <p className={styles.itemSize}>
                                    Local Businesses
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.formerContributors}>
                    <p
                        style={{
                            fontFamily: "Figtree",
                            fontWeight: "400px",
                            fontStyle: "Regular",
                            fontSize: "36px",
                            lineHeight: "100%",
                            textAlign: "center",
                            marginBottom: "32px",
                        }}
                    >
                        Former Contributors
                    </p>
                    <p
                        style={{
                            fontFamily: "Figtree",
                            fontWeight: "300px",
                            fontStyle: "Italic",
                            fontSize: "20px",
                            lineHeight: "100%",
                            marginBottom: "32px",
                            textAlign: "center",
                        }}
                    >
                        Thank you to past partners and supporters of the CCC! We
                        couldn't have gotten here without you.
                    </p>
                    <div className={styles.formerStaffBox}>
                        <p
                            style={{
                                fontFamily: "Figtree",
                                fontWeight: "600px",
                                fontStyle: "SemiBold",
                                fontSize: "20px",
                                lineHeight: "100%",
                                color: "#499ED7",
                                marginBottom: "32px",
                            }}
                        >
                            Previous Staff and Leadership
                        </p>
                        <ul className={styles.formerStaffList}>
                            <li>Former Chapel Hill Major Kleinschmidt, J.D.</li>
                            <li>
                                Former Orange County Health Director Collen
                                Bridger, Ph.D, M.P.H.
                            </li>
                            <li>Elinor Landess, M.A.</li>
                            <li>
                                Former UNC-CH Chancellor Holden Thorp, Ph.D.
                            </li>
                            <li>Barb Alvarez Martin, Ph.D., M.P.H.</li>
                        </ul>
                    </div>
                    <p
                        style={{
                            fontFamily: "Figtree",
                            fontWeight: "400px",
                            fontStyle: "Regular",
                            fontSize: "36px",
                            lineHeight: "100%",
                            textAlign: "center",
                            marginBottom: "32px",
                        }}
                    >
                        Former Interns
                    </p>
                    <p
                        style={{
                            fontFamily: "Figtree",
                            fontWeight: "600px",
                            fontStyle: "SemiBold",
                            fontSize: "20px",
                            lineHeight: "100%",
                            marginBottom: "32px",
                            textAlign: "center",
                        }}
                    >
                        Thank you to all former interns and graduate capstone
                        teams who have dedicated numerous hours and skills to
                        further the CCC's work and promote a healthy community!
                    </p>
                </div>
                <p
                    style={{
                        fontFamily: "Figtree",
                        fontWeight: "400px",
                        fontStyle: "Regular",
                        fontSize: "36px",
                        textAlign: "center",
                        marginBottom: "48px",
                    }}
                >
                    Funding Partners
                </p>
                <p
                    style={{
                        fontFamily: "Figtree",
                        fontWeight: "300px",
                        fontStyle: "Italic",
                        fontSize: "24px",
                        lineHeight: "34px",
                        textAlign: "center",
                        width: "969px",
                        maxWidth: "90%",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    Our work can't be done without the support of funding
                    partners. Thank you to Orange County Government, UNC-Chapel
                    Hill, the Town of Chapel Hill, and the Orange County ABC
                    Board for their continuous support.
                </p>
            </main>
            <Footer />
        </div>
    );
}
