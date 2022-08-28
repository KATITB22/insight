import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import APIClient from '@/utils/api-client';
import AuthService from '@/service/auth';
import Logo from '@assets/images/logo.png';
import Spinner from '@/components/Spinner';

const Login: React.FC<{ setState: Function }> = ({
    setState,
}: {
    setState: Function;
}) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const redirectIfHaveToken: Function = async () => {
        const token = await APIClient.checkToken();
        if (Object.keys(token).length > 0) {
            setState(true);
        }
    };

    const onFinish = async (e: any) => {
        const username = e.target[0].value;
        const password = e.target[1].value;
        if (!username || !password) {
            setErrors({
                username: !username ? 'Username is required' : '',
                password: !password ? 'Password is required' : '',
            });
            e.preventDefault();
            return;
        }
        setLoading(true);
        await AuthService.login(
            username,
            password,
            (response) => {
                toast.success(`Login Successfull (${response.user.username})`);
                setState(true);
                setLoading(false);
            },
            (error) => {
                if (error.toString().includes('Invalid identifier')) {
                    toast.error(
                        'NIM/No. Registrasi atau password salah atau tidak ditemukan!'
                    );
                } else {
                    toast.error(error.toString());
                }
                setState(false);
                setLoading(false);
            }
        );
    };

    useEffect(() => {
        redirectIfHaveToken();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-Blue">
            <div className="basis-3/4 md:basis-7/12 md:scale-[1.3] lg:max-w-lg rounded-md overflow-hidden py-5 px-3 bg-[#79B3F9]">
                <div className="flex justify-center mb-3 md:mb-5 flex-wrap">
                    <div className="w-1/2">
                        <img
                            src={Logo}
                            className="max-w-full h-auto align-middle border-none"
                            alt="logo"
                        />
                    </div>
                </div>
                <form
                    onSubmit={onFinish}
                    className="flex flex-col justify-center items-center w-full gap-2"
                >
                    <div className="flex flex-col items-center justify-center w-full">
                        <label
                            className="mb-2 text-sm text-gray-700 font-caption flex flex-col items-center justify-center gap-1 w-full"
                            htmlFor="username"
                        >
                            <input
                                id="username"
                                name="username"
                                placeholder="NIM/No. Registrasi"
                                className="w-full px-3 py-2 border-2 rounded-lg border-blue-300 focus:outline-none focus:border-blue-500 placeholder:text-[#79B3F9] placeholder:font-medium text-[#79B3F9]"
                            />
                            {errors.username && (
                                <span className="text-red-500 block py-1 px-2 text-sm rounded-md bg-red-200 w-full self-start">
                                    {errors.username}
                                </span>
                            )}
                        </label>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <label
                            className="mb-2 text-sm text-gray-700 font-caption flex flex-col items-center justify-center gap-1 w-full"
                            htmlFor="password"
                        >
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className="w-full px-3 py-2 border-2 rounded-lg border-blue-300 focus:outline-none focus:border-blue-500 placeholder:text-[#79B3F9] placeholder:font-medium text-[#79B3F9]"
                            />
                            {errors.password && (
                                <span className="text-red-500 block py-1 px-2 text-sm rounded-md bg-red-200 w-full self-start">
                                    {errors.password}
                                </span>
                            )}
                        </label>
                        <div className="flex items-center justify-center self-start gap-2">
                            <label htmlFor="checkbox" className="self-center">
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    checked={showPassword}
                                    className="border-blue-300 border-2"
                                    onChange={() =>
                                        setShowPassword(
                                            (prevShowPassword) =>
                                                !prevShowPassword
                                        )
                                    }
                                />
                            </label>
                            <p className="text-sm text-white">Show password</p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#174B7A] font-medium text-white focus:ring-2 focus:outline-none hover:bg-Blue hover:text-black hover:text-dark rounded-md py-1"
                    >
                        <span className="w-48">Sign In</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
