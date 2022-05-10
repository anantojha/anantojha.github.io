import React from "react";

const AboutMe: React.FC = () => {
    return <section className='flex flex-col bg-white py-20 text-3xl md:text-4xl'>
                <div className="container mx-auto px-11">
                    <p className="leadind-tight max-w-5xl mx-auto text-4xl tracking-tight">
                        <strong>
                            I am a self-driven and motivated Computer Science undergraduate. With demonstrated ability in developing and testing software applications.
                        </strong>
                        &nbsp;Strong programming, debugging and technical documentation skills.
                    </p>
                </div>
                <div className="container x-auto px-11 text-center mt-32">
                    <div className="flex flex-col bg-white text-3xl md:text-3xl" > 
                        <div className="leadind-tight max-w-5xl mx-auto tracking-tight">
                            <div className="flex items-center justify-center">
                                <img src="/assets/carleton_logo.png" width={375} height={175} />
                            </div>
                            <p className="px-12">Bachelor of Computer Science Honours</p>
                            <p className="mt-2 text-2xl">Class of 2022</p>
                        </div>
                    </div>
                </div>
            </section>
}

export default AboutMe