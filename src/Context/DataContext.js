import { useState, createContext } from "react";
import useSWR from "swr";
import axios from "axios";
import useLocalStorage from "../CustomHooks/useLocalStorage";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [favData, setFavData] = useLocalStorage("planets", []);
  useLocalStorage("planets", favData);
  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(
    `https://assignment-machstatz.herokuapp.com/planet`,
    fetcher,
    {
      dedupingInterval: 5000,
    }
  );

  const removeFavDataFun = id =>
    setFavData(favData.filter(item => item.id != id));

  const setFavDataFun = fav => setFavData(prev => [...prev, fav]);

  return (
    <DataContext.Provider
      value={{ data, error, favData, setFavDataFun, removeFavDataFun }}>
      {children}
    </DataContext.Provider>
  );
};
