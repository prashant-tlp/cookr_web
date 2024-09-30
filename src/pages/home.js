import React, { useEffect, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const buttonCss = "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800";
  
    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isLogged, setLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const email = sessionStorage.getItem('email');
        const token = sessionStorage.getItem('token');
        setLogin(email !== null && token !== null);
    }, []);
  
    const getData = useCallback(() => {
        setLoading(true);
        axios.get('https://dummyjson.com/recipes')
            .then((res) => {
                setList(res.data.recipes);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message || 'An error occurred');
                setLoading(false);
            });
    }, []);
  
    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <div className="mx-auto mt-2 flex flex-wrap justify-evenly">
                        <div>
                            <Link to={isLogged ? "/addrecipee" : "/signup"}>
                                <button className={buttonCss}>Add-Recipee</button>
                            </Link>
                            <Link to='/findrecipee'>
                                <button className={buttonCss}>Find-Recipee</button>
                            </Link>
                        </div>
                        {isLogged ? (
                            <div>
                                <Link>
                                    <button className={buttonCss} onClick={() => {
                                        sessionStorage.clear();
                                        navigate('/');
                                    }}>
                                        Log-Out
                                    </button>
                                </Link>
                                <Link to='/my-recipe'>
                                    <button className={buttonCss}>My-Recipees</button>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link to='/login'>
                                    <button className={buttonCss}>Login</button>
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="sm:grid sm:grid-cols-3 gap-1">
                        {list.map((v, i) => (
                            <div key={i} className="m-1 bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="m-4 flex">
                                    <div className="h-36 w-3/5 sm:w-1/2 md:shrink-0">
                                        <img
                                            className="h-full w-full bg-cover bg-center"
                                            src={v.image}
                                            alt={v.rname}
                                        />
                                    </div>
                                    <div className="p-2">
                                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                            {v.rname}
                                        </div>
                                        <div className="block mt-1 sm:text-sm text-xs leading-tight font-medium text-black hover:underline">
                                            Incredible Recipe for your loved ones
                                        </div>
                                        <Link>
                                            <button className="float">Give It a Try</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default Home;
