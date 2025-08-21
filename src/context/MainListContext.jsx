import { createContext, useContext, useEffect, useState } from "react";
import fetchListInformation from "../helpers/fetchListInformation";

const MainListContext = createContext([]);

export const useMainList = () => useContext(MainListContext);

export const MainListProvider = ({ children }) => {
  const [mainList, setMainList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchListInformation();
      setMainList(data);
    };
    loadData();
  }, []);

  return (
    <MainListContext.Provider value={mainList}>
      {children}
    </MainListContext.Provider>
  );
};
