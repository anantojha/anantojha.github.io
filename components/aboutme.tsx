import { Icon } from "@material-ui/core";
import React from "react";
import styles from '../styles/AboutMe.module.css'


const AboutMe: React.FC = () => {
    return <section className='flex flex-col py-20 px-20'>
        <div className={styles.profilebanner}>
            <div className='flex flex-row'>
                <div className={ styles.imagediv}> <img className={styles.profilepic} src="/assets/Profile2.png" width={500} /> </div>
                <div className="flex flex-col">
                    <strong className={styles.introbanner}>
                        <p className={styles.intoparagraph}>Hi I&apos;m Anant! Welcome to my corner of the world-wide-web. Here you&apos;ll find my personal projects, background experience and contact information. Shoot me a message if you&apos;d like to connect!</p>
                    </strong>
                    <div className="flex flex-row items-center justify-center p-8">
                        <a href="https://www.linkedin.com/in/anant-ojha/" target="_blank" rel="noopener noreferrer"><img className={styles.iconpic} src="/assets/linkedin.png" width={50} /></a>
                        <a href="https://github.com/anantojha" target="_blank" rel="noopener noreferrer"><img className={styles.iconpic} src="/assets/github.png" width={50} /></a>
                        <a href="https://www.anantojha.dev" target="_blank" rel="noopener noreferrer"><img className={styles.iconpic} src="/assets/portfolio.png" width={50} /></a>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </section>
}

export default AboutMe