import React, { useContext, useEffect, useState } from "react";

export const  API_URL = `http://www.omdbapi.com/?apikey=727bbdc1&s=`;

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [isError, setIsError] = useState({ show : "false", msg : ""});
    const [query, setQuery] = useState("titanic");

    const getmovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovies(data.Search);
            } else {
                setIsError({
                    show : false,
                    msg : "",
                });
            } 
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        let timerOut = setTimeout(() => {
          getmovies(`${API_URL}&s=${query}`);    
        }, 800);

        return () => clearTimeout(timerOut);
    }, [query]);
    return <AppContext.Provider value={{ movies, isLoading, isError, query, setQuery }}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};