/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { CarouselProps } from '@/types/interface';
import { motion } from 'framer-motion';

const INTERVAL_MS = 7000;

const elmtViewed = <div className="bg-white h-full w-full rounded-sm" />;

const elmtOnView = (
    <motion.div
        className="bg-white h-full rounded-sm"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: INTERVAL_MS / 1000 }}
    />
);

const Carousel: React.FC<CarouselProps> = (props) => {
    const { items } = props;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const totalItems = items.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(
                currentIndex === totalItems - 1
                    ? currentIndex
                    : currentIndex + 1
            );
        }, INTERVAL_MS);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const navigatorBox: JSX.Element[] = React.useMemo(() => {
        const retval: JSX.Element[] = [];
        for (let i = 0; i < totalItems; i += 1) {
            let element;
            if (i < currentIndex) {
                element = elmtViewed;
            } else {
                element = i === currentIndex ? elmtOnView : null;
            }
            retval.push(
                <div
                    key={i}
                    className="grow h-3/4 rounded-sm bg-slate-400 opacity-75 mr-0.5 ml-0.5"
                >
                    {element}
                </div>
            );
        }
        return retval;
    }, [currentIndex]);

    const handleOnClickPrev = React.useCallback(() => {
        setCurrentIndex(currentIndex === 0 ? currentIndex : currentIndex - 1);
    }, [currentIndex]);

    const handleOnClickNext = React.useCallback(() => {
        setCurrentIndex(
            currentIndex === totalItems - 1 ? currentIndex : currentIndex + 1
        );
    }, [currentIndex]);

    return (
        <>
            <div className="flex items-center h-1 w-[90%] rounded-sm ml-auto mr-auto left-0 right-0 absolute top-4">
                {navigatorBox}
            </div>
            <img
                className="h-full overflow-hidden rounded-sm"
                src={items[currentIndex]}
                alt="sponsor images"
            />
            <div
                className="h-full w-[30%] absolute right-0"
                onClick={handleOnClickNext}
            />
            <div
                className="h-full w-[30%] absolute left-0"
                onClick={handleOnClickPrev}
            />
        </>
    );
};

export default Carousel;
