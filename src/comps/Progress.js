import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const Progress = ({ file, setFile }) => {

    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url])

    return (
        <div className="progress-bar" style={{ width: progress + '%' }}></div>
    )
}

export default Progress;
