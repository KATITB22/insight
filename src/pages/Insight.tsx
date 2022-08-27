/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Image1 from '@/assets/images/dummy_image.jpg';
import Image2 from '@/assets/images/dummy_image1.jpg';
import Image3 from '@/assets/images/dummy_image2.jpg';
import CloseIcon from '@/assets/images/close_icon.png';
import ReplayIcon from '@/assets/images/replay_icon.png';
import LogoutIcon from '@/assets/images/logout_icon.png';
import Carousel from '@/components/Carousel';
import AuthService from '@/service/auth';

const images = [Image1, Image2, Image3];

const Insight: React.FC<{}> = () => {
    const [isViewInsight, setIsViewInsight] = useState(true);

    return (
        <div className="w-screen h-screen bg-black ">
            {isViewInsight ? (
                <div className="bg-DarkBlue h-full flex items-center justify-center max-w-sm md:max-w-none md:w-[43%] rounded-md ml-auto mr-auto relative">
                    <img
                        className="absolute right-6 top-10 opacity-80 cursor-pointer z-10"
                        src={CloseIcon}
                        alt="close-icon"
                        onClick={() => setIsViewInsight(!isViewInsight)}
                    />
                    <Carousel items={images} />
                </div>
            ) : (
                <div className="bg-Blue h-full flex flex-col items-center justify-center max-w-sm md:max-w-none md:w-[43%] rounded-md ml-auto mr-auto relative">
                    <a href="/">
                        <button
                            className="button-logout flex justify-center items-center h-14 w-32 md:h-16 md:w-32 rounded-full bg-[#529cdd] hover:bg-[#3777af]"
                            type="button"
                            onClick={() => {
                                AuthService.logout();
                            }}
                        >
                            <img
                                className="h-[35%]"
                                src={LogoutIcon}
                                alt="replay-icon"
                            />
                            <p className="font-Subheading ml-3">Logout</p>
                        </button>
                    </a>
                    <button
                        className="button-replay flex justify-center items-center h-14 w-32 md:h-16 md:w-32 rounded-full bg-[#529cdd] hover:bg-[#3777af] mt-4"
                        type="button"
                        onClick={() => setIsViewInsight(!isViewInsight)}
                    >
                        <img
                            className="h-[40%]"
                            src={ReplayIcon}
                            alt="replay-icon"
                        />
                        <p className="font-Subheading ml-3">Replay!</p>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Insight;
