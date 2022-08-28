/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import ThankYouPage from '@assets/images/thank-you-page.png';
import SamitraNotAvailable from '@/assets/images/samitra_not_available_page.png';
import PresenceNotAvailable from '@/assets/images/presence_not_available_page.png';
import FormNotAvailable from '@/assets/images/form_not_available_page.png';
import PilihEventImage from '@/assets/images/Acara Paling Menarik - Pilih Ini.png';
import TidakPilihEventImage from '@/assets/images/Acara Paling Menarik - Tidak Pilih Ini.png';
import PilihAssignmentImage from '@/assets/images/Tugas Paling Menarik - Pilih Ini.png';
import TidakPilihAssignmentImage from '@/assets/images/Tugas Paling Menarik - Tidak Pilih Ini.png';
import CloseIcon from '@/assets/images/close_icon.png';
import ReplayIcon from '@/assets/images/replay_icon.png';
import LogoutIcon from '@/assets/images/logout_icon.png';
import Carousel from '@/components/Carousel';
import AuthService from '@/service/auth';
import InsightService from '@/service/insight';
import { toast } from 'react-toastify';
import Spinner from '@/components/Spinner';
// const images = [Image1, Image2, Image3, ThankYouPage];

// page 0 pasti ada
// page 1 samitra
// page 2 absen/presensi
// page 4 form
const appendUrl = (url: string) => `https://insight-file.katitb22.com/${url}`;

const Insight: React.FC<{}> = () => {
    const [isViewInsight, setIsViewInsight] = useState(true);
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // fetch di sini, UBAH DI SIN
        InsightService.getInsights(
            (response) => {
                setLoading(true);
                const fetchData = response as {
                    image_url: string;
                    page: number;
                }[];

                const image0 = appendUrl(fetchData[0].image_url as string);
                let image1 = appendUrl(
                    fetchData.filter((obj) => obj.page === 1)[0]
                        .image_url as string
                );
                if (!image1) {
                    image1 = SamitraNotAvailable;
                }

                let image2 = appendUrl(
                    fetchData.filter((obj) => obj.page === 2)[0]
                        .image_url as string
                );
                if (!image2) {
                    image2 = PresenceNotAvailable;
                }

                let image3: string[] = [];
                const arrObjImage3 = fetchData.filter((obj) => obj.page === 3);

                if (arrObjImage3.length === 0) {
                    image3 = [FormNotAvailable];
                } else {
                    image3 = arrObjImage3.map((type) => {
                        if (type.image_url === 'Pilih Event') {
                            return PilihEventImage;
                        }
                        if (type.image_url === 'Tidak Pilih Event') {
                            return TidakPilihEventImage;
                        }
                        if (type.image_url === 'Pilih Assignment') {
                            return PilihAssignmentImage;
                        }
                        if (type.image_url === 'Tidak Pilih Assignment') {
                            return TidakPilihAssignmentImage;
                        }
                        return FormNotAvailable;
                    });
                }

                let image4 = appendUrl(
                    fetchData.filter((obj) => obj.page === 4)[0]
                        .image_url as string
                );
                if (!image4) {
                    image4 = FormNotAvailable;
                }

                let image5: string[] = [];
                const arrObjImage5 = fetchData.filter((obj) => obj.page === 5);
                if (arrObjImage5.length === 0) {
                    image5 = [FormNotAvailable];
                } else {
                    image5 = arrObjImage5.map((url) =>
                        appendUrl(url.image_url!)
                    );
                }

                setImages([
                    image0 as string,
                    image1 as string,
                    image2 as string,
                    ...image3,
                    image4 as string,
                    ...image5,
                    ThankYouPage,
                ]);
                setLoading(false);
            },
            (error) => {
                toast.error(error.toString());
                setLoading(false);
                console.log(error);
            }
        );
    }, [images]);

    if (loading) {
        return <Spinner />;
    }
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
