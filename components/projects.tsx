import React from "react";
import styles from '../styles/Projects.module.css'

const Timeline: React.FC = () => {
    const openRepo = (url: any) => {
        
    }
    return <section className='flex flex-col bg-white p-20'>
        
        <div className={styles.projecttitle}><h1>Projects</h1></div>
        <div className="flex flex-row items-center justify-center">
            <div className={styles.gridcard}>
                <div onClick={() => window.open("https://github.com/anantojha/JobArc", "_blank")} className="border rounded-2xl">
                    <a className={styles.projectname} href="https://github.com/anantojha/JobArc" target="_blank">JobArc Android</a>
                    <div className="items-center justify-center">
                        <img className="items-center justify-center" src="/assets/Jobarc.png" width={500} height={500} />
                    </div>
                </div>
            
            </div>
            <div className={styles.gridcard}>
                <div onClick={() => window.open("https://github.com/anantojha/Android-Youtube-Player", "_blank")} className="border rounded-2xl">
                    <a className={styles.projectname} href="https://github.com/anantojha/Android-Youtube-Player" target="_blank">Android Youtube Player</a>
                </div>
                <div ></div>
            </div>
        </div>
        <div className="flex flex-row">
            <div className={styles.gridcard}>
                <div onClick={() => window.open("https://github.com/anantojha/Tile-Rummy", "_blank")} className="border rounded-2xl">
                    <a className={styles.projectname} href="https://github.com/anantojha/Tile-Rummy" target="_blank">Tile Rummy Board Game</a>
                </div>
                <div ></div>
            </div>
            <div className={styles.gridcard}>
                <div onClick={() => window.open("https://github.com/anantojha/CNN-Smile-Detector", "_blank")} className="border rounded-2xl">
                    <a className={styles.projectname} href="https://github.com/anantojha/CNN-Smile-Detector" target="_blank">Real-Time Smile Detector</a>
                </div>
                <div ></div>
            </div>
        </div>
        </section>
}

export default Timeline