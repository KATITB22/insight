import { Suspense, useEffect, useMemo, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Loading from '@/pages/Loading';
import Spinner from '@/components/Spinner';
import { Routing } from './routing';
import APIClient from './utils/api-client';
import { UserContext } from './context';
import Login from './pages/Login';

function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const [isLoggedIn, setLoggedIn] = useState<boolean | null>(null);
    const [user, setUser] = useState({});

    useEffect(() => {
        APIClient.checkToken()
            .then((result) => {
                setUser(result);
                setLoggedIn(Object.keys(result).length > 0);
                setLoading(false);
            })
            .catch(() => {
                setLoggedIn(false);
                setLoading(false);
            });
    }, [isLoggedIn]);

    const contextValue = useMemo(
        () => ({ user, setUser, setLoggedIn }),
        [user]
    );

    if (loading) {
        return <Spinner />;
    }
    return (
        <UserContext.Provider value={contextValue}>
            <Suspense fallback={<div>Loading...</div>}>
                {/* <BrowserRouter>
                    <Routes>
                        {Routing.map((route) => {
                            const Component = route.component;
                            return (
                                <Route
                                    caseSensitive
                                    path={route.path}
                                    key={route.path}
                                    element={<Component />}
                                />
                            );
                        })}
                    </Routes>
                </BrowserRouter> */}
                {isLoggedIn && (
                    <BrowserRouter>
                        <Routes>
                            {Routing.map((route) => {
                                const Component = route.component;
                                return (
                                    <Route
                                        caseSensitive
                                        path={route.path}
                                        key={route.path}
                                        element={<Component />}
                                    />
                                );
                            })}
                        </Routes>
                    </BrowserRouter>
                )}
                {isLoggedIn === null && (
                    <div className="w-screen h-screen bg-zinc-800 opacity-70" />
                )}
                {!isLoggedIn && <Login setState={setLoggedIn} />}
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable={false}
                />
            </Suspense>
        </UserContext.Provider>
    );
}

export default App;
