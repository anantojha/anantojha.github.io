import React, { useState } from "react";
import styles from "../styles/Contact.module.css"
import { Alert } from '@mui/material';

const Contact: React.FC = () => {
    const [isEmailSuccess, setEmailSuccess] = useState(false);
    const [isEmailError, setEmailError] = useState(false);


    function handleEmailValidation(e: any) {
        if(!e.target[1].value.trim().includes('@')){
            console.log(e.target[1].value.trim())
            console.log('invalid email')
            return false
        } 
        return true
    }

    async function SendMail(e: any) {
        e.preventDefault();
      
        if (handleEmailValidation(e)){ 
            const formData = {name: e.target[0].value.trim(), email: e.target[1].value.trim(), message: e.target[2].value.trim()};
      
            console.log(formData)

            await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify(formData)
            });

            e.target[0].value = ''
            e.target[1].value = ''
            e.target[2].value = ''
            setEmailError(false);
            setEmailSuccess(true);
            
        } else {
            setEmailSuccess(false);
            setEmailError(true);
        }
      }

    return <div className='bg-white text-black flex flex-col justify-center items-center '>
        <p className={styles.contacttitle}>Get In Touch</p>
            {isEmailSuccess ? (
            <div>
                <Alert severity="success">Email Sent!</Alert></div>
            ) : (<div></div>)}
            {isEmailError ? (
            <div>
                <Alert severity="error" >Email Not Sent. Try Again!</Alert></div>
            ): (<div></div>)}
            <form className="flex flex-col" onSubmit={SendMail}>
                <input 
                    id="Name" 
                    name="Name"
                    required
                    maxLength={128}
                    placeholder="Name"
                    size={50}
                    type="text"
                    className="flex flex-col bg-white text-black text-left outline-none border-2 border-black mt-2 mb-4 rounded-3xl px-5 py-2"
                />
                <input 
                    id="Email" 
                    name="Email"
                    required
                    maxLength={128}
                    placeholder="Email"
                    size={50}
                    type="text"
                    className="flex flex-col bg-white text-black text-left outline-none border-2 border-black mb-4 rounded-3xl px-5 py-2"
                />
                <textarea 
                    id="Message" 
                    name="Message"
                    required
                    maxLength={500}
                    placeholder="message"
                    rows={8}
                    cols={50}
                    className="flex flex-col bg-white text-black text-left outline-none border-2 border-black rounded-3xl px-5 py-2"
                />
                <div className="text-center mt-10">
                    <button type="submit" className="bg-black border-black hover:bg-opacity-50 active:bg-opacity-90 bg-opacity-10 text-black rounded-3xl border-2 px-16 py-2 mb-20">Send</button>
                </div>
            </form>
        </div>
}

export default Contact 