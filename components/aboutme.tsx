import React from "react";
import styles from '../styles/AboutMe.module.css'


const AboutMe: React.FC = () => {
    return <section className='flex flex-col py-20'>
        <div className={styles.profilebanner}>
            <div className='flex flex-row rounded-3xl'>
                <img className={styles.profilepic} src="/assets/Profile2.png" width={300} height={300} />
                <p className='leadind-tight max-w-5xl mx-auto tracking-tight'></p>
                <strong className={styles.introbanner}>
                    <p className={styles.intoparagraph}>Hi I&apos;m Anant! Welcome to my corner of the world-wide-web. Here you&apos;ll find my personal projects, background experience and contact information. Feel free to shoot me a message if you&apos;d like to connect!</p>
                    </strong>
                <p/>
            </div>
        </div>
    </section>
}

export default AboutMe