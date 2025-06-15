import { useState, useEffect } from "react";
import { DataContext } from "./DataContext";

const DataProvider = ({ children }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json")
            .then((res) => res.json())
            .then((apiData) => setData(apiData))
            .catch((error) => console.error(error));
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );

};

export default DataProvider;