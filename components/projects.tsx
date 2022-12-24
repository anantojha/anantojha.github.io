import { Grid } from "@mui/material";
import React, { useState } from "react";
import styles from '../styles/Projects.module.css'

const Timeline: React.FC = () => {
    const [isHoveringJobArc, setIsHoveredJobArc] = useState(false);
    const [isHoveringSmile, setIsHoveredSmile] = useState(false);
    const [isHoveringYoutube, setIsHoveredYoutube] = useState(false);
    const [isHoveringElevator, setIsHoveredElevator] = useState(false);
    
    const onMouseEnterJobArc = () => setIsHoveredJobArc(true);
    const onMouseLeaveJobArc = () => setIsHoveredJobArc(false);
    const onMouseEnterSmile = () => setIsHoveredSmile(true);
    const onMouseLeaveSmile = () => setIsHoveredSmile(false);
    const onMouseEnterYoutube = () => setIsHoveredYoutube(true);
    const onMouseLeaveYoutube = () => setIsHoveredYoutube(false);
    const onMouseEnterElevator = () => setIsHoveredElevator(true);
    const onMouseLeaveElevator = () => setIsHoveredElevator(false);

    return <section className='flex flex-col p-10'>
        
        <div className={styles.projecttitle}><h1>Projects</h1></div>
        
        <div className="flex flex-row items-center justify-center">

            {/* For Jobarc Project window */}
            {isHoveringJobArc ? (
                <div className={styles.gridcard}>
                    <div onMouseEnter={onMouseEnterJobArc} onMouseLeave={onMouseLeaveJobArc} onClick={() => window.open("https://github.com/anantojha/JobArc", "_blank")} className="font-bold ">
                        <div className={styles.projectboxJobArcHover}>
                            <a className={styles.projectJobArc} href="https://github.com/anantojha/JobArc" target="_blank" rel="noopener noreferrer">JobArc Android</a>
                            <div className="flex flex-col items-center justify-center">
                                <video autoPlay muted playsInline width={479} className={styles.projectpic} >
                                    <source src="/assets/jobarc-portfolio-demo-fast.m4v" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                <div className={styles.gridcard}>
                    <div onMouseEnter={onMouseEnterJobArc} onMouseLeave={onMouseLeaveJobArc} onClick={() => window.open("https://github.com/anantojha/JobArc", "_blank")} className="font-bold ">
                        <div className={styles.projectboxJobArc}>
                            <a className={styles.projectJobArc} href="https://github.com/anantojha/JobArc" target="_blank" rel="noopener noreferrer">JobArc Android</a>
                            <div className="flex flex-col items-center justify-center">
                                <video autoPlay loop muted playsInline width={479} className={styles.projectpic} >
                                    <source src="/assets/jobarc-portfolio-demo-fast.m4v" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )}

            {/* For Smile Detector Project window */}
            {isHoveringSmile ? (
                <div className={styles.gridcard}>
                    <div onMouseEnter={onMouseEnterSmile} onMouseLeave={onMouseLeaveSmile} onClick={() => window.open("https://github.com/anantojha/CNN-Smile-Detector", "_blank")} className="font-bold">
                        <div className={styles.projectboxSmileDetectorHover}>
                            <a className={styles.projectSmileDetector} href="https://github.com/anantojha/CNN-Smile-Detector" target="_blank" rel="noopener noreferrer">Real-Time Smile Detector</a>
                            <div className="flex flex-col items-center justify-center">
                                <img className={styles.projectpicsmiledetector} src="/assets/smile-detector-img.png" width={520} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.gridcard}>
                    <div onMouseEnter={onMouseEnterSmile} onMouseLeave={onMouseLeaveSmile} onClick={() => window.open("https://github.com/anantojha/CNN-Smile-Detector", "_blank")} className="font-bold">
                        <div className={styles.projectboxSmileDetector}>
                            <a className={styles.projectSmileDetector} href="https://github.com/anantojha/CNN-Smile-Detector" target="_blank" rel="noopener noreferrer">Real-Time Smile Detector</a>
                            <div className="flex flex-col items-center justify-center">
                                <img className={styles.projectpicsmiledetector} src="/assets/smile-detector-img.png" width={520} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
        <div className="flex flex-row items-center justify-center">

            {/* For Elevator Project window */}
            {isHoveringElevator ? (
                <div className={styles.gridcard}>
                    <div onMouseEnter={onMouseEnterElevator} onMouseLeave={onMouseLeaveElevator} onClick={() => window.open("https://github.com/anantojha/Multithreaded-Elevator-System", "_blank")} className="font-bold">
                        <div className={styles.projectboxElevatorHover}>
                            <a className={styles.projectElevator} href="https://github.com/anantojha/Multithreaded-Elevator-System" target="_blank" rel="noopener noreferrer">Multithreaded Elevator System</a>
                            <div className="flex flex-col items-center justify-center">
                                <video autoPlay loop muted playsInline width={421} className={styles.projectpic} >
                                    <source src="/assets/elevator-portfolio-demo-fast.mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.gridcard}>
                    <div onMouseEnter={onMouseEnterElevator} onMouseLeave={onMouseLeaveElevator} onClick={() => window.open("https://github.com/anantojha/Multithreaded-Elevator-System", "_blank")} className="font-bold">
                        <div className={styles.projectboxElevator}>
                            <a className={styles.projectElevator} href="https://github.com/anantojha/Multithreaded-Elevator-System" target="_blank" rel="noopener noreferrer">Multithreaded Elevator System</a>
                            <div className="flex flex-col items-center justify-center">
                                <video autoPlay loop muted playsInline width={421} className={styles.projectpic} >
                                    <source src="/assets/elevator-portfolio-demo-fast.mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* For Youtube Project window */}
            {isHoveringYoutube ? (
                <div className={styles.gridcard}>
                    <div onMouseEnter={onMouseEnterYoutube} onMouseLeave={onMouseLeaveYoutube} onClick={() => window.open("https://github.com/anantojha/Android-Youtube-Player", "_blank")} className="font-bold">
                        <div className={styles.projectboxYTPlayerHover}>
                            <a className={styles.projectYTPlayer} href="https://github.com/anantojha/Android-Youtube-Player" target="_blank" rel="noopener noreferrer">Android Youtube Player</a>
                            <div className="flex flex-col items-center justify-center">
                                <video autoPlay loop muted playsInline width={161.5} className={styles.projectpic} >
                                    <source src="/assets/yt-portfolio-demo-fast.m4v" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.gridcard}>
                    <div onMouseEnter={onMouseEnterYoutube} onMouseLeave={onMouseLeaveYoutube} onClick={() => window.open("https://github.com/anantojha/Android-Youtube-Player", "_blank")} className="font-bold">
                        <div className={styles.projectboxYTPlayer}>
                            <a className={styles.projectYTPlayer} href="https://github.com/anantojha/Android-Youtube-Player" target="_blank" rel="noopener noreferrer">Android Youtube Player</a>
                            <div className="flex flex-col items-center justify-center">
                                <video autoPlay loop muted playsInline width={161.5} className={styles.projectpic} >
                                    <source src="/assets/yt-portfolio-demo-fast.m4v" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>    
            )}

        </div>
        </section>
}

export default Timeline