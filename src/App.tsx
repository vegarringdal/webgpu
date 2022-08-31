import React, { useEffect } from "react";
import "./app.css";
import { initCanvas } from "./utils/initCanvas";


export function App() {
    useEffect(() => {
        initCanvas("3dview");
    }, []);

    return (
        <div className="app bg-gray-800 text-gray-200 items-center">
            <canvas id="3dview" className="w-full h-full"></canvas>
        </div>
    );
}

export default App;
