import React, { useState, useEffect } from "react";
import axios from "axios";
import DataDisplay from "./Components/Display/index";
import RenderTitle from "./Components/Title/index";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8088/files/data"
                );
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {data && (
                <>
                    <RenderTitle
                        title={"React Test App"}
                        size={"25px"}
                        styleString={
                            "border: 1px solid black; padding: 8px; font-weight:500; background-color: #FF6666; color: white; height: 54px; width: 100%;"
                        }
                    />
                    <DataDisplay data={data} />
                </>
            )}
        </>
    );
}

export default App;
