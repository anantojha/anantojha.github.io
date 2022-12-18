import React from "react";
import styles from '../styles/Projects.module.css'

const Timeline: React.FC = () => {
    const openRepo = (url: any) => {
        
    }
    return <section className='flex flex-col bg-white p-20'>
        
        <div className={styles.projecttitle}><h1>Projects</h1></div>
        <div className="flex flex-row">
            <div className={styles.gridcard}>
                <div onClick={openRepo} className="border"><a className={styles.projectname} href="https://github.com/anantojha/JobArc">JobArc Android</a></div>
                <div ></div>
            </div>
            <div className={ styles.gridcard}>
                <div className="border"><a href="">Tile-Rummy</a></div>
            </div>
        </div>
        <div className="flex flex-row">
            <div className={styles.gridcard}>
                <div className="border"><a href=""> Multithreaded-Elevator-System</a></div>
                <div ></div>
            </div>
            <div className={ styles.gridcard}>
                <div className="border"><a href=""> Android-Youtube-Player</a></div>
            </div>
        </div>
        <div className="flex flex-row">
            <div className={styles.gridcard}>
                <div className="border"><a href=""> CNN-Smile-Detector</a></div>
                <div ></div>
            </div>
            <div className={ styles.gridcard}>
                <div className="border"><a href="">SCAPES Complier</a></div>
            </div>
        </div>
        </section>
}

export default Timeline