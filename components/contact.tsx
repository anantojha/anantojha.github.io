import React from "react";

const Contact: React.FC = () => {

    function handleEmailSending(){

    }

    return <div className='bg-white text-black flex flex-col justify-center items-center '>
        <p className="font-bold mt-20">contact by email</p>
            <form>
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
            </form>
                <div className="text-center mt-10">
                    <button type="submit" onClick={handleEmailSending} className="bg-black border-black hover:bg-opacity-50 active:bg-opacity-90 bg-opacity-10 text-black rounded-3xl border-2 px-16 py-2 mb-20">Send</button>
                </div>
        </div>
          
}

export default Contact 