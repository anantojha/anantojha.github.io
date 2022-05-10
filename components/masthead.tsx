import React from "react";
import Image from "next/image";

const Masthead: React.FC = () => {


    function handleResumeDownload(){
        window.open("/resume.pdf");
    }


    return <div className="min-h-screen flex flex-col items-center justify-center">
                <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                    
                    <source src="/assets/masthead-bg.webm" type="video/webm; codecs=vp9" />
                </video>
                <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
                    <Image src="/assets/logo.svg"  width={128/3} height={114/3} alt="logo"/>
                </div>
                <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
                    <h1 className="mb-6 text-4xl xl:text:5xl">Anant Ojha</h1>
                    <h2 className="mb-2 text-2xl xl:text:3xl tracking-tight">
                        <span>Software Engineer,<span>  </span>Designer</span>
                    </h2>
                    <div className="text-center mt-10">
                        <button type="submit" onClick={handleResumeDownload} className="bg-white bg-opacity-20 text-white rounded-3xl border-2 px-8 py-2">Resume</button>
                    </div>
                </div>
                <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ">
                    <Image src="/assets/arrow-down.png" width={188/3} height={105/3} alt="scroll down"/>
                </div>
            </div>
}

export default Masthead