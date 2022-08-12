import React from 'react';
import vistock from '../assets/images/insight.png';

const ComingSoon: React.FC<{}> = () => (
    <div className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-cyan-400 to-violet-400">
        <img
            src={vistock}
            alt="coming soon"
            className="absolute w-[15rem] bottom-[50%]"
        />
        <p className="absolute text-7xl text-violet-900 font-semibold bottom-[40%] drop-shadow-lg">
            Coming Soon
        </p>
    </div>
);
export default ComingSoon;
