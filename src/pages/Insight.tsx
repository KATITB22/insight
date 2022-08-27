import React from 'react';
import Image1 from '@/assets/images/dummy_image.jpg';
import Image2 from '@/assets/images/dummy_image1.jpg';
import Image3 from '@/assets/images/dummy_image2.jpg';
import Carousel from '@/components/Carousel';
// import vistock from '../assets/images/insight.png';

const images = [Image1, Image2, Image3];

const Insight: React.FC<{}> = () => (
    <div className="w-screen h-screen bg-black ">
        <div className="bg-slate-700 h-full flex items-center justify-center max-w-sm md:max-w-none md:w-[43%] rounded-md ml-auto mr-auto relative">
            <Carousel items={images} />
        </div>
    </div>
);
export default Insight;
