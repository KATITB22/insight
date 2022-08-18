import React from 'react';
import vistock from '../assets/images/insight.png';

const ComingSoon: React.FC<{}> = () => (
    <div className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-cyan-400 to-violet-400">
        <img
            src={vistock}
            alt="coming soon"
            className="absolute w-[15rem] bottom-[50%]"
        />
        <p className="absolute text-7xl font-magilio text-violet-900 font-semibold bottom-[39%] drop-shadow-lg">
            Coming Soon
        </p>
        <a
            className="absolute text-2xl font-magilio text-black font-semibold bottom-[30%] drop-shadow-sm hover:animate-bounce"
            href="https://katitb22.com/"
            rel="noreferrer"
            target="_blank"
        >
            Go to main website
        </a>
    </div>
);
export default ComingSoon;
