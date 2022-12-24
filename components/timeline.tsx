import { setDefaultResultOrder } from "dns";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles/Timeline.module.css'


const Timeline: React.FC = () => {
    return <section className='flex flex-col'>
        <div className={styles.exptitle}>
            <h1>Professional Experience</h1>
        </div>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
                dateClassName={styles.date}
                date="2022 - Present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffa' }}
                
                
            >
                <h2 className="vertical-timeline-element-title">Software Developer, Clound Engineering</h2>
                <div className={styles.bellcolor }><h3 className="vertical-timeline-element-subtitle ">BELL CANADA</h3></div>
                <p className={styles.descriptioncolor}>Cloud Datacenter Automation, Zero-Touch Provisioning, Cisco IOS XE/XR, Python, Gitlab, Ansible, Elasticsearch, Linux KVM</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                dateClassName={styles.date}
                date="2022 - 2022"
                iconStyle={{ background: 'rgb(235, 63, 28)', color: '#ffa' }}
                
            >
                <h2 className="vertical-timeline-element-title">Undergraduate Teaching Assistant</h2>
                <div className={styles.carletoncolor }><h3 className="vertical-timeline-element-subtitle">CARLETON UNIVERSITY</h3></div>
                <p className={styles.descriptioncolor}>Web-Development, React.js, Java SpringBoot, JDBC, DB2</p>
                <p className={styles.descriptioncolor}>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                dateClassName="text-white font-bold"
                date="2020 - 2021"
                iconStyle={{ background: 'rgb(164, 39, 218)', color: '#ffa' }}
                
            >
                <h2 className="vertical-timeline-element-title">Test Automation Engineer</h2>
                <div className={styles.finastracolor }><h3 className="vertical-timeline-element-subtitle">FINASTRA &#40;Misys&#41;</h3></div>
                <p className={styles.descriptioncolor}>QA Automation, C#, Selenium, ChromeDriver, AzureDevops</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                dateClassName={styles.date}
                date="2020 - 2020"
                iconStyle={{ background: 'rgb(35, 208, 35)', color: '#ffa' }}
                
            >
                <h2 className="vertical-timeline-element-title">Information Technology Analyst - Inten</h2>
                <div className={styles.manulifecolor }><h3 className="vertical-timeline-element-subtitle">MANULIFE FINANCIAL</h3></div>
                <p className={styles.descriptioncolor}>Web-Development, React.js, Java SpringBoot, JDBC, DB2</p>
                <p className={styles.descriptioncolor}>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <div className={styles.edutitle}>
            <h1>Education</h1>
        </div>
        <div className="py-10 px-20">
            <div className={styles.edudescription}>
                <div className="flex flex-row align-center justify-center">
                    <div className={styles.padding}>
                        <div className={styles.logo}>
                            <img src="/assets/carleton_logo.png" width={275} height={100} />
                        </div>
                        <p className={styles.edutext}>Bachelor of Computer Science Honours.</p>
                        <p className={styles.edutexttwo}>Graduated 2022.</p>
                    </div>
                    <div className={styles.awardslist}>
                        <p className={styles.awardtext}>Undergraduate Teaching Assistant</p>  
                        <p className={styles.awardtextone}>Dean&apos;s Honor List Award</p>
                        <p className={styles.awardtext}>President&apos;s Scholarship</p>
                        <p className={styles.awardtext}>John M. Beck Scholarship</p>              
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Timeline