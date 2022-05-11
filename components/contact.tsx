import React from "react";

const Contact: React.FC = () => {
    return <div className='bg-white text-black flex flex-col justify-center items-center py-10'>
            <div className="flex flex-col bg-white text-3xl md:text-4xl">
                <h2 >
                Contact
            </h2>
            </div>
            <form>
                <input 
                    id="Name" 
                    name="Name"
                    required
                    maxLength={128}
                    placeholder="Name"
                    size={50}
                    type="text"
                    className="flex flex-col bg-white text-black text-left outline-none border-2 border-black mt-4 mb-4 rounded-3xl px-5 py-2"
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
                    className="flex flex-col bg-white text-black text-left outline-none border-2 border-black mb-4 rounded-3xl px-5 py-2"
                />
            </form>
        </div>
          
}

export default Contact 