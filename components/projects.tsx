import React from "react";
import styles from '../styles/Projects.module.css'

const Timeline: React.FC = () => {
    const openRepo = (url: any) => {
        
    }
    return <section className='flex flex-col bg-white p-20'>
        
        <div className={styles.projecttitle}><h1>Projects</h1></div>
        <div className="flex flex-row items-center justify-center">
            <div className={styles.gridcard}>
                <div onClick={() => window.open("https://github.com/anantojha/JobArc", "_blank")} className=" font-bold">
                    <div className={styles.projectbox}>
                        <a className={styles.projectJobArc} href="https://github.com/anantojha/JobArc" target="_blank">JobArc Android</a>
                        <div className="flex flex-col items-center justify-center py-5">
                            <img className={ styles.projectpic} src="/assets/Jobarc.png" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.gridcard}>
                <div onClick={() => window.open("https://github.com/anantojha/Android-Youtube-Player", "_blank")} className=" font-bold">
                    <div className={styles.projectbox}>
                        <a className={styles.projectYTPlayer} href="https://github.com/anantojha/Android-Youtube-Player" target="_blank">Android Youtube Player</a>
                        <div className="flex flex-col items-center justify-center py-5">
                            <video autoPlay loop muted playsInline width={162} className={styles.projectpic } >
                                <source src="/assets/yt-portfolio-demo-fast.m4v" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row">
            <div className={styles.gridcard}>
                <div onClick={() => window.open("https://github.com/anantojha/CNN-Smile-Detector", "_blank")} className=" font-bold">
                    <div className={styles.projectbox}>
                        <a className={styles.projectSmileDetector} href="https://github.com/anantojha/CNN-Smile-Detector" target="_blank">Real-Time Smile Detector</a>
                        <div className="flex flex-col items-center justify-center py-5">
                            <img className={ styles.projectpic} src="/assets/Jobarc.png" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.gridcard}>
                <div onClick={() => window.open("https://github.com/anantojha/Multithreaded-Elevator-System", "_blank")} className=" font-bold">
                    <div className={styles.projectbox}>
                        <a className={styles.projectElevator} href="https://github.com/anantojha/Multithreaded-Elevator-System" target="_blank">Multithreaded-Elevator-System</a>
                        <div className="flex flex-col items-center justify-center py-5">
                            <img className={ styles.projectpic} src="/assets/Jobarc.png" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
}

export default Timeline