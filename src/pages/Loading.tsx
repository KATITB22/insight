import React from 'react';

const Loading: React.FC<{}> = () => (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-Orange to-LightOrange">
        <div className="flex justify-center relative">
            <div className="absolute bottom-[30%] md:bottom-[40%] mr-6 font-Heading text-[30px] md:text-h3 text-DarkerOrange drop-shadow-errorStyle">
                LOADING
            </div>
        </div>
    </div>
);

export default Loading;
